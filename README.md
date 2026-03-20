# ⚔️ CodeQuest RPG — Learn Tech by Battling Bosses

> **A gamified learning platform for Python, SQL, Machine Learning, Data Analysis, FastAPI & Cloud/Docker**

Live Demo: https://[your-username].github.io/codequestRPG

---

## 🎮 What Is This?

CodeQuest RPG is a **browser-based RPG learning game** where you level up your tech skills by:
- 📚 Reading structured lessons with real code examples
- ⚔️ Fighting "Boss Battles" (concept questions & coding challenges)
- 🏗️ Building 2 real projects per tech stack
- 🤖 Getting AI-powered code reviews (powered by Claude)
- 🏆 Earning XP, leveling up, and unlocking new worlds

---

## 🗺️ Tech Worlds

| World | Stack | Unlock Req |
|-------|-------|------------|
| 🐍 Python Realm | Variables, OOP, Pandas, NumPy | Start |
| 🗄️ SQL Kingdom | SELECT, JOINs, Window Functions, CTEs | 200 XP |
| 📊 Data Viz Domain | EDA, Matplotlib, Seaborn, Plotly, Stats | 350 XP |
| 🤖 ML Fortress | Regression, Random Forest, Neural Nets, Pipelines | 500 XP |
| ⚡ API Citadel | FastAPI, Pydantic, REST, Auth, Deployment | 600 XP |
| ☁️ Cloud Realm | Docker, Docker Compose, AWS, CI/CD | 800 XP |

---

## 🏗️ Projects Per Stack

Each world includes **2 capstone projects** with step-by-step guides:

### Python
1. **Personal Finance Tracker** — CLI + Pandas + CSV
2. **Web Scraper & Data Pipeline** — requests + BeautifulSoup + Pandas

### SQL
1. **E-Commerce Analytics Dashboard** — schema design + complex queries
2. **HR Analytics System** — CTEs + window functions

### Data Analysis
1. **COVID-19 Data Dashboard** — Plotly interactive charts
2. **Stock Market Analysis Tool** — technical indicators + backtesting

### Machine Learning
1. **House Price Predictor** — full ML pipeline + Flask API
2. **Customer Churn Classifier** — XGBoost + SHAP interpretability

### FastAPI
1. **ML Model API Service** — containerized prediction API
2. **Real-Time Data Pipeline API** — async + SQLAlchemy

### Cloud/Docker
1. **Containerized ML Platform** — docker-compose full stack
2. **AWS Data Pipeline** — S3 + Lambda + RDS serverless

---

## 🚀 Hosting on GitHub Pages

### Step 1: Create repository
```bash
git init
git add .
git commit -m "Initial commit — CodeQuest RPG"
git branch -M main
git remote add origin https://github.com/[username]/codequestRPG.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**
5. Your site will be live at: `https://[username].github.io/codequestRPG`

### Step 3: (Optional) Custom Domain
Add a `CNAME` file with your domain name for a custom URL.

---

## 🤖 AI Features

The app uses the **Anthropic Claude API** for:
- **Code Review**: Evaluates your code submissions intelligently
- **Hints**: Context-aware progressive hints (-10 XP each)

The API calls work client-side through the Claude.ai interface. If hosting externally, you'd need a backend proxy for the API key.

---

## 📁 File Structure

```
codequestRPG/
├── index.html          # Main app shell (all screens)
├── css/
│   ├── main.css        # Complete styles + responsive
│   └── animations.css  # Battle + UI animations
├── js/
│   ├── data.js         # All game content (worlds, levels, projects)
│   ├── state.js        # Save/load, XP, achievements
│   ├── battle.js       # Boss battle + AI code evaluation
│   ├── ui.js           # All rendering functions
│   └── app.js          # Screen routing + main controller
└── README.md
```

---

## 🎯 Learning Path Recommendation

| Goal | Starting Path | Worlds Order |
|------|--------------|--------------|
| Data Science Job | Data Wizard | Python → SQL → Data Viz → ML |
| ML Engineer | AI Warrior | Python → ML → API → Cloud |
| Backend Dev | Full Stack | Python → SQL → API → Cloud |
| Fastest to employed | Speed Run | Python → SQL → API |

---

## ✨ Features

- 🎮 **RPG progression** — XP, levels, world unlocks
- ⚔️ **Boss battles** per topic — MCQ + coding challenges
- 🤖 **AI code review** — instant feedback via Claude
- 💡 **Progressive hints** — 2 hints per battle (costs XP)
- 🏗️ **Project tracker** — check off steps as you build
- 🏆 **Achievements** — 12 unlockable achievements
- 📱 **Fully responsive** — works on mobile, tablet, desktop
- 💾 **Auto-save** — progress saved to localStorage
- 📜 **Skill tree** — visual progress per technology

---

## 🛠️ Tech Stack (Ironic Note)

This learning app itself was built with:
- Vanilla HTML5, CSS3, JavaScript (no framework)
- Google Fonts (Press Start 2P, Rajdhani, Share Tech Mono)
- Anthropic Claude API for AI features
- localStorage for save data
- GitHub Pages for hosting (free!)

Zero build tools. Zero dependencies. Just open `index.html`.

---

## 📝 License

MIT — Learn freely, build freely.
