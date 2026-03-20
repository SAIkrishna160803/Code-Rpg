// =============================================
// CODEQUEST RPG — BATTLE SYSTEM
// =============================================

const Battle = (() => {
  let currentQuestion = null;
  let currentWorldId  = null;
  let currentLevelId  = null;
  let bossHP = 100;
  let playerHP = 100;
  let hintsUsed = 0;
  let usedHint = false;
  let answered = false;

  function startBattle(worldId, levelId) {
    const world = GAME_DATA.worlds.find(w => w.id === worldId);
    const level = world?.levels.find(l => l.id === levelId);
    if (!level) return;

    currentQuestion = level.bossQuestion;
    currentWorldId  = worldId;
    currentLevelId  = levelId;
    bossHP = 100;
    playerHP = 100;
    hintsUsed = 0;
    usedHint = false;
    answered = false;

    App.showScreen('battle');
    renderBattle();
  }

  function renderBattle() {
    const q = currentQuestion;
    const state = State.get();

    // Boss area
    document.getElementById('boss-sprite').textContent   = q.bossEmoji;
    document.getElementById('boss-name').textContent     = q.bossName;
    document.getElementById('boss-health-bar').style.width = '100%';

    // Player area
    document.getElementById('player-battle-sprite').textContent = state.hero.avatar;
    document.getElementById('player-battle-name').textContent   = state.hero.name;
    document.getElementById('player-health-bar').style.width    = '100%';

    // Question
    const diffBadge = document.getElementById('q-difficulty');
    diffBadge.textContent = q.difficulty;
    diffBadge.className = `difficulty-badge ${q.difficulty}`;
    document.getElementById('q-xp').textContent = `+${q.xp} XP`;
    document.getElementById('question-text').textContent = q.text;

    // Battle log
    document.getElementById('battle-log').innerHTML =
      `<div class="log-entry system">⚡ ${q.bossName} appears! Prove your worth!</div>`;

    // Boss entrance animation
    const bossEl = document.getElementById('boss-sprite');
    bossEl.classList.remove('boss-entrance');
    void bossEl.offsetWidth;
    bossEl.classList.add('boss-entrance');

    if (q.type === 'mcq') {
      renderMCQ();
    } else {
      renderCodeQuestion();
    }
  }

  function renderMCQ() {
    const q = currentQuestion;
    document.getElementById('code-answer-area').style.display = 'none';

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${String.fromCharCode(65 + i)}) ${opt}`;
      btn.onclick = () => answerMCQ(i, btn);
      grid.appendChild(btn);
    });
  }

  function renderCodeQuestion() {
    document.getElementById('options-grid').innerHTML = '';
    const codeArea = document.getElementById('code-answer-area');
    codeArea.style.display = 'block';

    const editor = document.getElementById('code-editor');
    editor.value = currentQuestion.starterCode || '';
    document.getElementById('ai-feedback').className = 'ai-feedback';
    document.getElementById('ai-feedback').textContent = '';
  }

  function answerMCQ(chosenIndex, btnEl) {
    if (answered) return;
    answered = true;

    const q = currentQuestion;
    const correct = chosenIndex === q.correct;

    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    btnEl.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
      document.querySelectorAll('.option-btn')[q.correct].classList.add('correct');
    }

    if (correct) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer(q.explanation);
    }
  }

  async function submitCode() {
    if (answered) return;

    const code = document.getElementById('code-editor').value.trim();
    if (!code) {
      UI.toast('Write some code first!', 'error');
      return;
    }

    const feedbackEl = document.getElementById('ai-feedback');
    feedbackEl.className = 'ai-feedback visible';
    feedbackEl.innerHTML = '<span class="loading-spinner"></span> AI reviewing your code...';

    const submitBtn = document.querySelector('#code-answer-area .btn-primary');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const feedback = await evaluateCodeWithAI(code, currentQuestion);
      const passed = feedback.passed;

      feedbackEl.className = `ai-feedback visible ${passed ? 'success' : 'error'}`;
      feedbackEl.innerHTML = `<strong>${passed ? '✅ CORRECT!' : '❌ Not quite right'}</strong><br><br>${feedback.message}`;

      if (passed) {
        answered = true;
        handleCorrectAnswer();
      } else {
        // Player takes damage but can retry
        playerHP = Math.max(0, playerHP - 30);
        updateHealthBars();
        animatePlayerHit();
        addBattleLog(`💔 Boss counters! Your HP: ${playerHP}`, 'hit');
        if (playerHP <= 0) {
          handleDefeat();
        } else {
          if (submitBtn) submitBtn.disabled = false;
        }
      }
    } catch (err) {
      feedbackEl.className = 'ai-feedback visible error';
      feedbackEl.textContent = 'AI review failed. Check if your code follows the requirements and try again.';
      if (submitBtn) submitBtn.disabled = false;
    }
  }

  async function evaluateCodeWithAI(userCode, question) {
    const prompt = `You are a Python/SQL code evaluator for a learning game.

Question asked: "${question.text}"

User's code:
\`\`\`
${userCode}
\`\`\`

Required elements in the solution: ${JSON.stringify(question.solution || [])}

Evaluate if the code:
1. Addresses the question requirement
2. Contains the key solution elements
3. Is syntactically reasonable Python/SQL

Respond with ONLY a JSON object (no markdown):
{
  "passed": true or false,
  "message": "Brief encouraging explanation (2-3 sentences). If wrong, give one specific hint without revealing the full answer.",
  "score": 0-100
}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '{}';
    const clean = text.replace(/```json?|```/g, '').trim();
    return JSON.parse(clean);
  }

  async function getHint() {
    if (hintsUsed >= 2) {
      UI.toast('Max hints used!', 'error');
      return;
    }
    hintsUsed++;
    usedHint = true;
    State.addXP(-10);
    UI.updateXPBar();
    UI.toast('-10 XP for hint', 'error');

    const feedbackEl = document.getElementById('ai-feedback');
    feedbackEl.className = 'ai-feedback visible';
    feedbackEl.innerHTML = '<span class="loading-spinner"></span> Getting hint...';

    try {
      const hintNum = hintsUsed;
      const prompt = `Give hint ${hintNum} of 2 for this coding question. Be progressively more specific but don't give the answer.

Question: "${currentQuestion.text}"
Key solution elements: ${JSON.stringify(currentQuestion.solution || [])}

Respond with ONLY a JSON: {"hint": "Your hint here (1-2 sentences)"}`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 150,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      const data = await response.json();
      const text = data.content?.[0]?.text || '{}';
      const clean = text.replace(/```json?|```/g, '').trim();
      const result = JSON.parse(clean);

      feedbackEl.textContent = `💡 Hint ${hintNum}: ${result.hint}`;
    } catch (err) {
      feedbackEl.textContent = `💡 Hint: ${currentQuestion.explanation}`;
    }
  }

  function handleCorrectAnswer() {
    const xpEarned = usedHint
      ? Math.floor(currentQuestion.xp * 0.7)
      : currentQuestion.xp;

    // Boss takes damage
    bossHP = 0;
    updateHealthBars();
    animateBossHit();
    addBattleLog(`⚔️ Critical hit! ${currentQuestion.bossName} defeated!`, 'system');

    // Complete level
    State.completeLevel(currentWorldId, currentLevelId);
    State.addXP(xpEarned);
    State.addSkillXP(currentWorldId, 15);
    State.checkProjectUnlocks(
      currentWorldId,
      GAME_DATA.worlds.find(w => w.id === currentWorldId)
        .levels.findIndex(l => l.id === currentLevelId)
    );

    if (!usedHint) State.addAchievement('hint_never');
    if (State.get().achievements.length === 0) State.addAchievement('first_battle');
    State.addHistory(`✅ Defeated ${currentQuestion.bossName} (+${xpEarned} XP)`);

    setTimeout(() => {
      showVictory(xpEarned);
    }, 1200);
  }

  function handleWrongAnswer(explanation) {
    playerHP = Math.max(0, playerHP - 40);
    updateHealthBars();
    animatePlayerHit();
    addBattleLog(`💔 Wrong! ${explanation}`, 'hit');

    if (playerHP <= 0) {
      handleDefeat();
    }
  }

  function handleDefeat() {
    addBattleLog('💀 You have fallen! Study and try again!', 'hit');
    setTimeout(() => {
      UI.toast('Defeated! Review the lesson and try again.', 'error');
      App.goToWorld(currentWorldId);
    }, 2000);
  }

  function showVictory(xpEarned) {
    const state = State.get();
    const world = GAME_DATA.worlds.find(w => w.id === currentWorldId);
    const levelIdx = world.levels.findIndex(l => l.id === currentLevelId);

    document.getElementById('victory-icon').textContent  = currentQuestion.bossEmoji;
    document.getElementById('victory-title').textContent = `${currentQuestion.bossName} DEFEATED!`;

    document.getElementById('victory-rewards').innerHTML = `
      <div class="reward-item">
        <div class="reward-icon">⭐</div>
        <div class="reward-value">+${xpEarned}</div>
        <div class="reward-label">XP Earned</div>
      </div>
      <div class="reward-item">
        <div class="reward-icon">🗡️</div>
        <div class="reward-value">Level ${levelIdx + 1}</div>
        <div class="reward-label">Completed</div>
      </div>
      <div class="reward-item">
        <div class="reward-icon">📜</div>
        <div class="reward-value">${world.name}</div>
        <div class="reward-label">Progress</div>
      </div>
    `;

    spawnFireworks();
    App.showScreen('victory');
    UI.updateXPBar();
  }

  function spawnFireworks() {
    const container = document.getElementById('victory-fireworks');
    container.innerHTML = '';
    const colors = ['#ffd700','#00e5ff','#7c4dff','#00e676','#ff1744'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'firework';
        el.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          width: ${Math.random() * 10 + 4}px;
          height: ${Math.random() * 10 + 4}px;
          animation-duration: ${Math.random() * 0.8 + 0.8}s;
        `;
        container.appendChild(el);
      }, i * 80);
    }
  }

  function updateHealthBars() {
    document.getElementById('boss-health-bar').style.width   = `${bossHP}%`;
    document.getElementById('player-health-bar').style.width = `${playerHP}%`;
  }

  function animateBossHit() {
    const el = document.getElementById('boss-sprite');
    const player = document.getElementById('player-battle-sprite');
    player.classList.add('player-attacking');
    setTimeout(() => player.classList.remove('player-attacking'), 400);
    el.classList.add('boss-hit');
    setTimeout(() => el.classList.remove('boss-hit'), 500);
  }

  function animatePlayerHit() {
    const el = document.getElementById('player-battle-sprite');
    el.classList.add('player-hit');
    document.body.classList.add('shake');
    setTimeout(() => {
      el.classList.remove('player-hit');
      document.body.classList.remove('shake');
    }, 500);
  }

  function addBattleLog(text, type = '') {
    const log = document.getElementById('battle-log');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = text;
    log.prepend(entry);
  }

  return { startBattle, submitCode, getHint };
})();
