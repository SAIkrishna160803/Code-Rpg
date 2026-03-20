// =============================================
// CODEQUEST RPG — STATE MANAGEMENT
// =============================================

const State = (() => {
  const SAVE_KEY = 'codequest_save_v2';

  const defaultState = () => ({
    hero: null,
    xp: 0,
    level: 1,
    completedLevels: [],
    unlockedWorlds: ['python'],
    worldProgress: {},   // { worldId: { completedLevels: [], projectProgress: {} } }
    projectStatus: {},   // { projectId: { status: 'locked'|'in-progress'|'done', completedSteps: [] } }
    achievements: [],
    skillXP: {
      python: 0, sql: 0, ml: 0, dataviz: 0, api: 0, cloud: 0
    },
    history: [],        // recent activity log
    lastScreen: null,
    currentWorldId: null,
    currentLevelId: null,
    settings: {
      sfx: true,
      notifications: true
    }
  });

  let state = defaultState();

  function load() {
    try {
      const saved = localStorage.getItem(SAVE_KEY);
      if (saved) {
        state = { ...defaultState(), ...JSON.parse(saved) };
        return true;
      }
    } catch (e) {
      console.warn('Failed to load save:', e);
    }
    return false;
  }

  function save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save:', e);
    }
  }

  function reset() {
    state = defaultState();
    localStorage.removeItem(SAVE_KEY);
  }

  function get() { return state; }

  function setHero(heroData) {
    state.hero = heroData;
    save();
  }

  function addXP(amount) {
    state.xp += amount;
    // Level up at 100 * level XP
    while (state.xp >= xpForNextLevel(state.level)) {
      state.level += 1;
    }
    save();
    return state.level;
  }

  function xpForNextLevel(lvl) {
    return lvl * 100 * Math.pow(1.3, lvl - 1);
  }

  function xpProgress() {
    const prev = state.level > 1 ? xpForNextLevel(state.level - 1) : 0;
    const next = xpForNextLevel(state.level);
    const current = state.xp - prev;
    const needed = next - prev;
    return Math.min(current / needed, 1);
  }

  function completeLevel(worldId, levelId) {
    if (!state.worldProgress[worldId]) {
      state.worldProgress[worldId] = { completedLevels: [], projectProgress: {} };
    }
    if (!state.worldProgress[worldId].completedLevels.includes(levelId)) {
      state.worldProgress[worldId].completedLevels.push(levelId);
    }
    if (!state.completedLevels.includes(levelId)) {
      state.completedLevels.push(levelId);
    }
    // Unlock next world if enough XP
    checkWorldUnlocks();
    save();
  }

  function checkWorldUnlocks() {
    GAME_DATA.worlds.forEach(world => {
      if (!state.unlockedWorlds.includes(world.id) && state.xp >= world.xpToUnlock) {
        state.unlockedWorlds.push(world.id);
        addHistory(`🌍 Unlocked: ${world.name}!`);
      }
    });
  }

  function isLevelCompleted(levelId) {
    return state.completedLevels.includes(levelId);
  }

  function isLevelUnlocked(worldId, levelIndex) {
    if (levelIndex === 0) return true;
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    if (!world) return false;
    const prevLevel = world.levels[levelIndex - 1];
    return isLevelCompleted(prevLevel.id);
  }

  function isWorldUnlocked(worldId) {
    return state.unlockedWorlds.includes(worldId);
  }

  function getWorldProgress(worldId) {
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    if (!world) return 0;
    const wp = state.worldProgress[worldId];
    if (!wp) return 0;
    return wp.completedLevels.length / world.levels.length;
  }

  function addSkillXP(worldId, amount) {
    if (state.skillXP[worldId] !== undefined) {
      state.skillXP[worldId] = Math.min(100, state.skillXP[worldId] + amount);
    }
    save();
  }

  function unlockProject(projectId) {
    if (!state.projectStatus[projectId]) {
      state.projectStatus[projectId] = { status: 'in-progress', completedSteps: [] };
      save();
    }
  }

  function checkProjectUnlocks(worldId, levelIndex) {
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    if (!world) return;
    world.projects.forEach(proj => {
      if (levelIndex + 1 >= proj.unlockLevel && !state.projectStatus[proj.id]) {
        unlockProject(proj.id);
        addHistory(`🏗️ Project Unlocked: ${proj.title}`);
      }
    });
  }

  function completeProjectStep(projectId, stepIndex) {
    if (!state.projectStatus[projectId]) return;
    if (!state.projectStatus[projectId].completedSteps.includes(stepIndex)) {
      state.projectStatus[projectId].completedSteps.push(stepIndex);
    }
    const world = getProjectWorld(projectId);
    const proj = world ? world.projects.find(p => p.id === projectId) : null;
    if (proj && state.projectStatus[projectId].completedSteps.length >= proj.steps.length) {
      state.projectStatus[projectId].status = 'done';
      addHistory(`✅ Project Completed: ${proj.title}`);
      addXP(300);
    }
    save();
  }

  function getProjectWorld(projectId) {
    return GAME_DATA.worlds.find(w => w.projects.some(p => p.id === projectId));
  }

  function addAchievement(id) {
    if (!state.achievements.includes(id)) {
      state.achievements.push(id);
      save();
      return true;
    }
    return false;
  }

  function addHistory(entry) {
    state.history.unshift({ text: entry, time: Date.now() });
    if (state.history.length > 50) state.history = state.history.slice(0, 50);
  }

  return {
    load, save, reset, get,
    setHero, addXP, xpProgress, xpForNextLevel,
    completeLevel, isLevelCompleted, isLevelUnlocked, isWorldUnlocked,
    getWorldProgress, addSkillXP, checkProjectUnlocks,
    unlockProject, completeProjectStep,
    addAchievement, addHistory, checkWorldUnlocks
  };
})();

// Achievements data
const ACHIEVEMENTS = [
  { id: 'first_battle',  icon: '⚔️',  title: 'First Blood',       desc: 'Win your first boss battle' },
  { id: 'python_master', icon: '🐍',  title: 'Serpent Tamer',      desc: 'Complete all Python levels' },
  { id: 'sql_master',    icon: '🗄️', title: 'Query Lord',         desc: 'Complete all SQL levels' },
  { id: 'ml_master',     icon: '🤖',  title: 'Neural Knight',      desc: 'Complete all ML levels' },
  { id: 'streak_7',      icon: '🔥',  title: 'On Fire',            desc: '7-day learning streak' },
  { id: 'xp_1000',       icon: '⭐',  title: 'XP Farmer',          desc: 'Earn 1000 total XP' },
  { id: 'xp_5000',       icon: '🌟',  title: 'XP Legend',          desc: 'Earn 5000 total XP' },
  { id: 'project_1',     icon: '🏗️', title: 'Builder',            desc: 'Complete your first project' },
  { id: 'project_all',   icon: '🏰',  title: 'Grand Architect',    desc: 'Complete all projects' },
  { id: 'speedrun',      icon: '⚡',  title: 'Speed Demon',        desc: 'Complete 3 levels in one day' },
  { id: 'hint_never',    icon: '🧠',  title: 'No Hints Needed',    desc: 'Complete a boss with no hints' },
  { id: 'all_worlds',    icon: '🌍',  title: 'World Conqueror',    desc: 'Unlock all worlds' },
];
