// =============================================
// CODEQUEST RPG — UI RENDERING
// =============================================

const UI = (() => {

  // ---- TOAST ----
  function toast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }

  // ---- XP BAR ----
  function updateXPBar() {
    const state = State.get();
    const progress = State.xpProgress();
    const bar = document.getElementById('xp-bar');
    const label = document.getElementById('xp-label');
    if (bar) bar.style.width = `${progress * 100}%`;
    if (label) label.textContent = `${state.xp} XP`;
    const lvlEl = document.getElementById('player-level');
    if (lvlEl) lvlEl.textContent = state.level;
  }

  // ---- WORLD MAP ----
  function renderWorldMap() {
    const state = State.get();
    const grid = document.getElementById('worlds-grid');
    grid.innerHTML = '';

    GAME_DATA.worlds.forEach(world => {
      const unlocked = State.isWorldUnlocked(world.id);
      const progress = State.getWorldProgress(world.id);
      const completedCount = (state.worldProgress[world.id]?.completedLevels || []).length;

      const card = document.createElement('div');
      card.className = `world-card ${unlocked ? '' : 'locked'} lift-on-hover`;
      card.dataset.color = world.color;

      card.innerHTML = `
        ${!unlocked ? `<div class="world-lock-icon">🔒</div>` : ''}
        <div class="world-header">
          <div class="world-emoji">${world.emoji}</div>
          <div class="world-meta">
            <div class="world-name">${world.name}</div>
            <div class="world-tag">${world.tag}</div>
          </div>
        </div>
        ${world.certInfo ? `<div class="cert-badge">🎓 ${world.certInfo.code} · Pass: ${world.certInfo.passingScore} · ${world.certInfo.cost}</div>` : ''}
        <div class="world-desc">${world.desc}</div>
        <div class="world-skills">
          ${world.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="world-progress-wrap">
          <div class="world-progress-bar" style="width:${progress * 100}%"></div>
        </div>
        <div class="world-progress-label">
          ${unlocked
            ? `${completedCount}/${world.levels.length} levels · ${Math.round(progress * 100)}% complete`
            : `Requires ${world.xpToUnlock} XP to unlock (you have ${state.xp} XP)`}
        </div>
      `;

      if (unlocked) {
        card.onclick = () => App.goToWorld(world.id);
      } else {
        card.onclick = () => toast(`Need ${world.xpToUnlock} XP to unlock ${world.name}. You have ${state.xp} XP.`, 'info');
      }

      grid.appendChild(card);
    });

    // Update header
    const state2 = State.get();
    if (state2.hero) {
      document.getElementById('header-avatar').textContent = state2.hero.avatar;
      document.getElementById('header-name').textContent   = state2.hero.name;
    }
    updateXPBar();
  }

  // ---- WORLD/DUNGEON ----
  function renderWorld(worldId) {
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    if (!world) return;

    const state = State.get();

    // Header
    document.getElementById('world-icon-header').textContent  = world.emoji;
    document.getElementById('world-title-header').textContent = world.name;

    // Levels sidebar
    const levelsList = document.getElementById('levels-list');
    levelsList.innerHTML = '';

    world.levels.forEach((level, idx) => {
      const completed = State.isLevelCompleted(level.id);
      const unlocked  = State.isLevelUnlocked(worldId, idx);

      const item = document.createElement('div');
      item.className = `level-item ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}`;
      item.innerHTML = `
        <span class="level-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="level-title-item">${level.title}</span>
        <span class="level-status">${completed ? '✅' : unlocked ? '▶' : '🔒'}</span>
      `;

      if (unlocked) {
        item.onclick = () => renderLevelContent(worldId, level.id);
      }

      levelsList.appendChild(item);
    });

    // Project tracker sidebar
    renderProjectSidebar(worldId);

    // Load first unlocked uncompleted level, or last completed
    const firstUncompleted = world.levels.find((l, i) => State.isLevelUnlocked(worldId, i) && !State.isLevelCompleted(l.id));
    const target = firstUncompleted || world.levels[0];
    if (target) renderLevelContent(worldId, target.id);
  }

  function renderProjectSidebar(worldId) {
    const world   = GAME_DATA.worlds.find(w => w.id === worldId);
    const state   = State.get();
    const tracker = document.getElementById('project-tracker');
    tracker.innerHTML = '';

    world.projects.forEach(proj => {
      const ps = state.projectStatus[proj.id];
      const steps = ps?.completedSteps || [];

      const item = document.createElement('div');
      item.className = 'project-item';
      item.innerHTML = `
        <div class="project-title">${ps ? '' : '🔒 '}${proj.title}</div>
        <div class="project-desc">${proj.desc.slice(0, 60)}...</div>
        ${ps ? `
          <div class="project-progress">
            <div class="project-fill" style="width:${(steps.length / proj.steps.length) * 100}%"></div>
          </div>
          <div class="project-pct">${steps.length}/${proj.steps.length} steps · ${ps.status}</div>
        ` : `<div class="project-pct">Unlock at level ${proj.unlockLevel}</div>`}
      `;

      if (ps) {
        item.style.cursor = 'pointer';
        item.onclick = () => App.showProjects();
      }

      tracker.appendChild(item);
    });
  }

  function renderLevelContent(worldId, levelId) {
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    const level = world?.levels.find(l => l.id === levelId);
    if (!level) return;

    // Highlight active level in sidebar
    document.querySelectorAll('.level-item').forEach(el => el.classList.remove('active'));
    const idx = world.levels.findIndex(l => l.id === levelId);
    const levelItems = document.querySelectorAll('#levels-list .level-item');
    if (levelItems[idx]) levelItems[idx].classList.add('active');

    const container = document.getElementById('level-content');
    const completed = State.isLevelCompleted(levelId);
    const lesson = level.lesson;

    let sectionsHTML = '';
    lesson.sections.forEach(section => {
      sectionsHTML += `<h3>${section.heading}</h3>`;
      if (section.content) sectionsHTML += `<p>${section.content}</p>`;
      if (section.bullets) {
        sectionsHTML += '<ul>' + section.bullets.map(b => `<li>${b}</li>`).join('') + '</ul>';
      }
      if (section.code) {
        sectionsHTML += `<div class="code-block">${syntaxHighlight(section.code)}</div>`;
      }
    });

    container.innerHTML = `
      <div class="level-header">
        <div class="level-title">Level ${idx + 1}: ${level.title}</div>
        <div class="level-subtitle">Topic: ${level.subtitle}</div>
      </div>
      ${idx === 0 && world.certInfo ? `
        <div class="lesson-body" style="margin-bottom:1rem;">
          <h3>🎓 CERTIFICATION INFO</h3>
          <table class="cert-info-table">
            <tr><td>Exam Code</td><td>${world.certInfo.code}</td></tr>
            <tr><td>Questions</td><td>${world.certInfo.questions}</td></tr>
            <tr><td>Duration</td><td>${world.certInfo.duration}</td></tr>
            <tr><td>Passing Score</td><td>${world.certInfo.passingScore}</td></tr>
            <tr><td>Cost</td><td>${world.certInfo.cost}</td></tr>
            <tr><td>Validity</td><td>${world.certInfo.validity}</td></tr>
          </table>
        </div>
      ` : ''}
      <div class="lesson-body">
        <p>${lesson.intro}</p>
        ${sectionsHTML}
      </div>
      <div class="lesson-actions">
        ${completed
          ? `<div style="color:var(--green);font-weight:700;">✅ Level Completed! +${level.bossQuestion.xp} XP earned</div>
             <button class="btn-battle" onclick="Battle.startBattle('${worldId}','${levelId}')">⚔️ REPLAY BOSS</button>`
          : `<button class="btn-battle" onclick="Battle.startBattle('${worldId}','${levelId}')">⚔️ FACE THE BOSS: ${level.bossQuestion.bossName}</button>`
        }
      </div>
    `;

    State.get().currentWorldId = worldId;
    State.get().currentLevelId = levelId;
  }

  // Simple syntax highlighting
  function syntaxHighlight(code) {
    return code
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/(#[^\n]*)/g, '<span class="comment">$1</span>')
      .replace(/--[^\n]*/g, '<span class="comment">$&</span>')
      .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
      .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
      .replace(/\b(def|class|return|import|from|if|elif|else|for|while|in|not|and|or|True|False|None|pass|raise|try|except|with|as|lambda|global|async|await)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|AS|LIMIT|OFFSET|WITH|UNION|INSERT|UPDATE|DELETE|CREATE|TABLE|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|NOT NULL|DEFAULT|AND|OR|IN|LIKE|BETWEEN|IS|NULL|COUNT|SUM|AVG|MIN|MAX|OVER|PARTITION BY|ROW_NUMBER|RANK|DENSE_RANK|LAG|LEAD|ASC|DESC)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(print|len|range|type|int|float|str|bool|list|dict|set|tuple|sum|min|max|sorted|enumerate|zip|map|filter|open|super|isinstance|hasattr|getattr|setattr)\b/g, '<span class="builtin">$1</span>')
      .replace(/\b(pd|np|plt|sns|sklearn|tf|keras|joblib|stats)\b/g, '<span class="func">$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
  }

  // ---- PROJECTS SCREEN ----
  function renderProjects() {
    const state = State.get();
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    GAME_DATA.worlds.forEach(world => {
      const section = document.createElement('div');
      section.className = 'projects-world-section';

      const cards = world.projects.map(proj => {
        const ps = state.projectStatus[proj.id];
        const steps = ps?.completedSteps || [];
        const status = ps?.status || 'locked';

        return `
          <div class="project-card-full">
            <div class="project-card-header">
              <div class="project-card-title">${proj.title}</div>
              <div class="project-card-status ${status}">${status === 'locked' ? '🔒 Locked' : status === 'done' ? '✅ Done' : '🔨 In Progress'}</div>
            </div>
            <div class="project-card-desc">${proj.desc}</div>
            <div class="project-tech-stack">
              ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            ${ps ? `
              <div style="margin-bottom:1rem;">
                <div class="world-progress-wrap" style="margin-bottom:0.4rem;">
                  <div class="world-progress-bar" style="width:${(steps.length / proj.steps.length) * 100}%"></div>
                </div>
                <small style="color:var(--text-secondary)">${steps.length}/${proj.steps.length} steps complete</small>
              </div>
              <ol class="project-steps">
                ${proj.steps.map((step, i) => `
                  <li class="project-step ${steps.includes(i) ? 'done' : ''}"
                      style="cursor:pointer;padding:0.3rem 0;"
                      onclick="UI.toggleProjectStep('${proj.id}', ${i})">
                    ${steps.includes(i) ? '✅' : '⬜'} ${step}
                  </li>
                `).join('')}
              </ol>
            ` : `<div style="color:var(--text-dim);font-size:0.85rem;">Complete level ${proj.unlockLevel} in ${world.name} to unlock</div>`}
          </div>
        `;
      }).join('');

      section.innerHTML = `
        <div class="projects-world-title">${world.emoji} ${world.name}</div>
        <div class="project-cards">${cards}</div>
      `;
      container.appendChild(section);
    });
  }

  function toggleProjectStep(projectId, stepIndex) {
    const ps = State.get().projectStatus[projectId];
    if (!ps) return;

    if (ps.completedSteps.includes(stepIndex)) {
      // Un-check
      ps.completedSteps = ps.completedSteps.filter(i => i !== stepIndex);
      State.save();
    } else {
      State.completeProjectStep(projectId, stepIndex);
      UI.toast('Step completed! +XP', 'xp');
    }
    renderProjects();
  }

  // ---- ACHIEVEMENTS MODAL ----
  function renderAchievements() {
    const state = State.get();
    const earned = state.achievements;

    return `
      <h2 style="font-family:var(--font-pixel);font-size:0.8rem;color:var(--gold);margin-bottom:1.5rem;">🏆 ACHIEVEMENTS</h2>
      <div class="achievements-grid">
        ${ACHIEVEMENTS.map(ach => `
          <div class="achievement-card ${earned.includes(ach.id) ? 'earned' : 'locked'}">
            <div class="ach-icon">${ach.icon}</div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ---- SKILLS/INVENTORY MODAL ----
  function renderInventory() {
    const state = State.get();

    const skillDefs = [
      { id: 'python',  icon: '🐍', name: 'Python' },
      { id: 'sql',     icon: '🗄️', name: 'SQL' },
      { id: 'ml',      icon: '🤖', name: 'Machine Learning' },
      { id: 'dataviz', icon: '📊', name: 'Data Analysis' },
      { id: 'api',     icon: '⚡', name: 'FastAPI' },
      { id: 'cloud',   icon: '☁️', name: 'Cloud/Docker' },
    ];

    return `
      <h2 style="font-family:var(--font-pixel);font-size:0.8rem;color:var(--gold);margin-bottom:1.5rem;">📜 SKILL TREE</h2>
      <div class="skills-panel">
        ${skillDefs.map(s => {
          const xp = state.skillXP[s.id] || 0;
          return `
            <div class="skill-row">
              <div class="skill-icon">${s.icon}</div>
              <div class="skill-info">
                <div class="skill-name">${s.name}</div>
                <div class="skill-bar-wrap">
                  <div class="skill-bar-fill" style="width:${xp}%"></div>
                </div>
              </div>
              <div class="skill-pct">${xp}%</div>
            </div>
          `;
        }).join('')}
      </div>
      <hr style="border-color:var(--border);margin:1.5rem 0;">
      <h3 style="font-family:var(--font-pixel);font-size:0.6rem;color:var(--cyan);margin-bottom:1rem;">RECENT ACTIVITY</h3>
      ${state.history.slice(0, 8).map(h => `
        <div style="font-size:0.85rem;color:var(--text-secondary);padding:0.4rem 0;border-bottom:1px solid var(--border);">
          ${h.text}
        </div>
      `).join('') || '<div style="color:var(--text-dim);font-size:0.85rem;">No activity yet. Start learning!</div>'}
    `;
  }

  return {
    toast, updateXPBar,
    renderWorldMap, renderWorld, renderLevelContent,
    renderProjectSidebar, renderProjects, toggleProjectStep,
    renderAchievements, renderInventory
  };
})();
