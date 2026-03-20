// =============================================
// CODEQUEST RPG — MAIN APP CONTROLLER
// =============================================

const App = (() => {
  let currentScreen = 'landing';
  let previousScreen = 'landing';
  let selectedAvatar = '🧙';
  let selectedPath   = 'data';

  function init() {
    const hasSave = State.load();

    if (hasSave && State.get().hero) {
      showScreen('map');
      UI.renderWorldMap();
    } else {
      showScreen('landing');
    }
  }

  function showScreen(screenId) {
    const all = document.querySelectorAll('.screen');
    all.forEach(s => s.classList.remove('active'));

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add('active');
      target.classList.add('screen-transition-in');
      setTimeout(() => target.classList.remove('screen-transition-in'), 300);
    }

    previousScreen = currentScreen;
    currentScreen  = screenId;
  }

  function startGame() {
    showScreen('character');
    renderCharacterScreen();
  }

  function continueGame() {
    const hasSave = State.load();
    if (hasSave && State.get().hero) {
      showScreen('map');
      UI.renderWorldMap();
    } else {
      UI.toast('No save found. Starting new game!', 'info');
      showScreen('character');
      renderCharacterScreen();
    }
  }

  function renderCharacterScreen() {
    // Avatar picker
    const avatarGrid = document.getElementById('avatar-grid');
    avatarGrid.innerHTML = '';
    GAME_DATA.avatars.forEach(av => {
      const el = document.createElement('div');
      el.className = `avatar-option ${av === selectedAvatar ? 'selected' : ''}`;
      el.textContent = av;
      el.onclick = () => {
        document.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
        el.classList.add('selected');
        selectedAvatar = av;
      };
      avatarGrid.appendChild(el);
    });

    // Path options
    const pathContainer = document.getElementById('path-options');
    pathContainer.innerHTML = '';
    GAME_DATA.startingPaths.forEach(path => {
      const el = document.createElement('div');
      el.className = `path-card ${path.id === selectedPath ? 'selected' : ''}`;
      el.innerHTML = `
        <div class="path-icon">${path.icon}</div>
        <div class="path-name">${path.name}</div>
        <div class="path-desc">${path.desc}</div>
      `;
      el.onclick = () => {
        document.querySelectorAll('.path-card').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        selectedPath = path.id;
      };
      pathContainer.appendChild(el);
    });
  }

  function createCharacter() {
    const name = document.getElementById('hero-name').value.trim();
    if (!name) {
      UI.toast('Enter your hero name!', 'error');
      document.getElementById('hero-name').focus();
      return;
    }

    State.reset();
    State.setHero({ name, avatar: selectedAvatar, path: selectedPath });

    // Unlock initial worlds based on path
    const pathUnlocks = {
      ml:    ['python', 'ml', 'dataviz'],
      full:  ['python', 'api'],
      speed: ['python', 'sql'],
      data:  ['python']
    };
    const extra = pathUnlocks[selectedPath] || [];
    extra.forEach(w => {
      if (!State.get().unlockedWorlds.includes(w)) {
        State.get().unlockedWorlds.push(w);
      }
    });
    State.save();

    UI.toast(`Welcome, ${name}! Your quest begins!`, 'info');
    showScreen('map');
    UI.renderWorldMap();
  }

  function goToMap() {
    showScreen('map');
    UI.renderWorldMap();
  }

  function goToWorld(worldId) {
    State.get().currentWorldId = worldId;
    showScreen('world');
    UI.renderWorld(worldId);
  }

  function afterVictory() {
    const worldId = State.get().currentWorldId;
    const world   = GAME_DATA.worlds.find(w => w.id === worldId);

    // Check if world is complete
    const allDone = world.levels.every(l => State.isLevelCompleted(l.id));
    if (allDone) {
      // World complete! Check achievements
      State.addAchievement(`${worldId}_master`);
      UI.toast(`🏆 ${world.name} CONQUERED!`, 'level');
    }

    goToWorld(worldId);
  }

  function showProjects() {
    showScreen('projects');
    UI.renderProjects();
  }

  function showAchievements() {
    openModal(UI.renderAchievements());
  }

  function showInventory() {
    openModal(UI.renderInventory());
  }

  function openModal(html) {
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-content').innerHTML = html;
    overlay.classList.add('open');
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
  }

  function goBack() {
    if (previousScreen === 'world') {
      const worldId = State.get().currentWorldId;
      if (worldId) goToWorld(worldId);
      else goToMap();
    } else {
      goToMap();
    }
  }

  // XP popup animation
  function showXPPopup(amount, x, y) {
    const el = document.createElement('div');
    el.className = 'xp-popup';
    el.textContent = `+${amount} XP`;
    el.style.left = `${x}px`;
    el.style.top  = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'm' && currentScreen !== 'landing' && currentScreen !== 'character') {
      goToMap();
    }
  });

  return {
    init, showScreen,
    startGame, continueGame, createCharacter,
    goToMap, goToWorld, afterVictory,
    showProjects, showAchievements, showInventory,
    openModal, closeModal, goBack, showXPPopup
  };
})();

// ---- BOOT ----
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
