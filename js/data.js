// =============================================
// CODEQUEST RPG — GAME DATA
// All worlds, levels, lessons, boss questions, projects
// =============================================

const GAME_DATA = {

  avatars: ['🧙','⚔️','🦸','🧝','🧛','🤖','👾','🦊','🐉','🧚','🧜','🦄'],

  startingPaths: [
    { id: 'data', icon: '📊', name: 'DATA WIZARD', desc: 'Start with Python & SQL — the classic data journey' },
    { id: 'ml',   icon: '🤖', name: 'AI WARRIOR',  desc: 'Start with ML & Data Analysis, build models fast' },
    { id: 'full', icon: '⚔️', name: 'FULL STACK',  desc: 'Mix of everything — APIs, Cloud, Data' },
    { id: 'speed',icon: '⚡', name: 'SPEED RUN',   desc: 'Shortest path to employment, high-ROI skills only' },
  ],

  worlds: [
    {
      id: 'python',
      name: 'PYTHON REALM',
      emoji: '🐍',
      color: 'python',
      tag: 'Foundation · High Demand',
      desc: 'Master Python from zero to professional. Variables to classes, data structures to file handling.',
      xpToUnlock: 0,
      skills: ['Variables', 'Functions', 'OOP', 'Libraries', 'File I/O'],
      levels: [
        {
          id: 'py-1', num: 1, title: 'The Awakening', subtitle: 'Variables & Data Types',
          lesson: {
            intro: 'Every hero needs tools. In Python, your tools are variables — boxes that store information. Master these and you command the first spell of programming.',
            sections: [
              {
                heading: 'Variables & Types',
                content: 'Python has 4 core data types you\'ll use every day:',
                bullets: ['int — whole numbers: 42, -7, 0', 'float — decimals: 3.14, -0.5', 'str — text: "hello", \'world\'', 'bool — True or False'],
                code: `# Creating variables
hero_name = "Aria"          # str
hero_level = 1              # int
hero_hp = 100.0             # float
is_alive = True             # bool

# Python infers the type automatically
print(type(hero_name))      # <class 'str'>
print(f"Hero: {hero_name}, Level: {hero_level}")`
              },
              {
                heading: 'Type Conversion',
                content: 'You can convert between types using built-in functions:',
                code: `age_str = "25"
age_int = int(age_str)      # "25" -> 25
score = float("98.5")       # "98.5" -> 98.5
message = str(42)           # 42 -> "42"

# Careful! This will crash:
# int("hello")  # ValueError!`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 40,
            bossName: 'TYPE TROLL', bossEmoji: '👹',
            text: 'What will this Python code output?\n\nx = 5\ny = "3"\nprint(x + int(y))',
            options: ['53', '8', 'Error', '"8"'],
            correct: 1,
            explanation: 'int("3") converts the string "3" to integer 3, then 5 + 3 = 8.'
          }
        },
        {
          id: 'py-2', num: 2, title: 'The Control Tower', subtitle: 'Conditionals & Loops',
          lesson: {
            intro: 'Control flow is how your code makes decisions and repeats actions — like a general commanding troops.',
            sections: [
              {
                heading: 'if / elif / else',
                content: 'Make decisions based on conditions:',
                code: `hp = 30

if hp > 70:
    print("Full health!")
elif hp > 30:
    print("Wounded, keep fighting")
elif hp > 0:
    print("Critical! Use potion!")
else:
    print("You have fallen...")`
              },
              {
                heading: 'for & while loops',
                content: 'Repeat code efficiently:',
                code: `# for loop - known iterations
dungeons = ["Cave", "Tower", "Abyss"]
for dungeon in dungeons:
    print(f"Entering {dungeon}...")

# range() generates numbers
for i in range(1, 6):
    print(f"Level {i}")

# while loop - unknown iterations
mana = 100
while mana > 0:
    mana -= 25
    print(f"Mana: {mana}")
    if mana == 0:
        print("Out of mana!")`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 50,
            bossName: 'LOOP DEMON', bossEmoji: '🌀',
            text: 'How many times does "Hello" get printed?\n\nfor i in range(2, 8, 2):\n    print("Hello")',
            options: ['3', '6', '4', '2'],
            correct: 0,
            explanation: 'range(2, 8, 2) generates [2, 4, 6] — three values, so "Hello" prints 3 times.'
          }
        },
        {
          id: 'py-3', num: 3, title: 'The Arsenal', subtitle: 'Lists, Dicts & Sets',
          lesson: {
            intro: 'Data structures are your inventory. Lists hold ordered items, dicts map keys to values, sets store unique items.',
            sections: [
              {
                heading: 'Lists',
                code: `inventory = ["sword", "shield", "potion"]

# Access
print(inventory[0])         # "sword"
print(inventory[-1])        # "potion" (last)

# Modify
inventory.append("bow")     # add to end
inventory.insert(1, "axe")  # add at index
inventory.remove("shield")  # remove by value
popped = inventory.pop()    # remove & return last

# Slicing
first_two = inventory[0:2]
reversed_inv = inventory[::-1]`
              },
              {
                heading: 'Dictionaries',
                code: `hero = {
    "name": "Aria",
    "level": 5,
    "class": "Mage",
    "skills": ["Fireball", "Freeze"]
}

# Access
print(hero["name"])              # "Aria"
print(hero.get("age", "Unknown"))# Safe access

# Modify  
hero["level"] += 1               # level = 6
hero["weapon"] = "Staff"         # add new key

# Iterate
for key, value in hero.items():
    print(f"{key}: {value}")`
              }
            ]
          },
          bossQuestion: {
            type: 'code', difficulty: 'MEDIUM', xp: 75,
            bossName: 'DATA HYDRA', bossEmoji: '🐲',
            text: 'Write a Python function that takes a list of numbers and returns a dictionary with keys "min", "max", and "avg" containing the respective values.\n\nExample: stats([10, 20, 30]) → {"min": 10, "max": 30, "avg": 20.0}',
            starterCode: 'def stats(numbers):\n    # Your code here\n    pass\n\n# Test\nprint(stats([10, 20, 30]))',
            solution: ['def stats(numbers):', 'min(numbers)', 'max(numbers)', 'sum(numbers)'],
            explanation: 'Use Python built-ins: min(), max(), and sum()/len() for average.'
          }
        },
        {
          id: 'py-4', num: 4, title: 'The Codex', subtitle: 'Functions & Modules',
          lesson: {
            intro: 'Functions are reusable spells. Write once, cast forever. Modules are spell books — collections of pre-built power.',
            sections: [
              {
                heading: 'Functions',
                code: `# Basic function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# *args = variable positional args
def sum_all(*numbers):
    return sum(numbers)

# **kwargs = variable keyword args
def create_hero(**attributes):
    return attributes

# Lambda (anonymous function)
double = lambda x: x * 2
square = lambda x: x ** 2

# Usage
print(greet("Aria"))              # Hello, Aria!
print(sum_all(1, 2, 3, 4, 5))   # 15
hero = create_hero(name="Aria", level=10)`
              },
              {
                heading: 'Essential Modules',
                code: `import os
import json
import random
from datetime import datetime
from collections import Counter

# random
random.randint(1, 6)          # Roll a die

# json
data = {"hero": "Aria", "xp": 500}
json_str = json.dumps(data)   # dict -> str
parsed = json.loads(json_str) # str -> dict

# datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d"))

# Counter
words = ["python", "python", "sql", "python"]
freq = Counter(words)
print(freq.most_common(2))    # [('python', 3), ('sql', 1)]`
              }
            ]
          },
          bossQuestion: {
            type: 'code', difficulty: 'MEDIUM', xp: 80,
            bossName: 'LAMBDA LICH', bossEmoji: '💀',
            text: 'Write a Python function called "word_frequency" that takes a sentence (string) and returns a dictionary of word frequencies, case-insensitive.\n\nExample: word_frequency("Hello world hello") → {"hello": 2, "world": 1}',
            starterCode: 'def word_frequency(sentence):\n    # Your code here\n    pass\n\nprint(word_frequency("Hello world hello"))',
            solution: ['lower()', 'split()', 'Counter', 'for word in', 'dict'],
            explanation: 'Split the sentence into words, use .lower() for case-insensitive comparison, then count with a dict or Counter.'
          }
        },
        {
          id: 'py-5', num: 5, title: 'The Architect', subtitle: 'OOP — Classes & Objects',
          lesson: {
            intro: 'Object-Oriented Programming is how you architect large programs. Define blueprints (classes), create instances (objects).',
            sections: [
              {
                heading: 'Classes',
                code: `class Hero:
    # Class variable (shared)
    guild = "Adventurers Guild"
    
    def __init__(self, name, hero_class, level=1):
        # Instance variables
        self.name = name
        self.hero_class = hero_class
        self.level = level
        self.hp = level * 100
        self.xp = 0
    
    def attack(self, enemy):
        damage = self.level * 15
        print(f"{self.name} attacks {enemy} for {damage} damage!")
        return damage
    
    def level_up(self):
        self.level += 1
        self.hp = self.level * 100
        print(f"🎉 {self.name} is now level {self.level}!")
    
    def __repr__(self):
        return f"Hero({self.name}, Lv{self.level})"

# Create instances
aria = Hero("Aria", "Mage", level=5)
zorn = Hero("Zorn", "Warrior", level=3)

aria.attack("Dragon")
aria.level_up()`
              },
              {
                heading: 'Inheritance',
                code: `class Mage(Hero):
    def __init__(self, name, level=1):
        super().__init__(name, "Mage", level)
        self.mana = level * 50
    
    def cast_spell(self, spell):
        if self.mana >= 20:
            self.mana -= 20
            damage = self.level * 25  # Mages hit harder
            print(f"✨ {self.name} casts {spell}! {damage} magic dmg")
            return damage
        else:
            print("Not enough mana!")

aria = Mage("Aria", level=5)
aria.cast_spell("Fireball")`
              }
            ]
          },
          bossQuestion: {
            type: 'code', difficulty: 'HARD', xp: 120,
            bossName: 'THE OOP OVERLORD', bossEmoji: '👑',
            text: 'Create a BankAccount class with:\n- __init__(owner, balance=0)\n- deposit(amount) method\n- withdraw(amount) method — raise ValueError if insufficient funds\n- __str__ returning "Account[owner]: $balance"\n\nTest it with deposits and withdrawals.',
            starterCode: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        pass\n    \n    def deposit(self, amount):\n        pass\n    \n    def withdraw(self, amount):\n        pass\n    \n    def __str__(self):\n        pass\n\n# Test\nacc = BankAccount("Aria", 1000)\nacc.deposit(500)\nacc.withdraw(200)\nprint(acc)',
            solution: ['self.owner', 'self.balance', 'self.balance +=', 'ValueError', 'self.balance -='],
            explanation: 'Use self to store instance state. Raise ValueError when balance is insufficient. Format __str__ to return the required string.'
          }
        },
        {
          id: 'py-6', num: 6, title: 'THE FINAL BOSS', subtitle: 'Pandas & NumPy Power',
          lesson: {
            intro: 'The most powerful Python weapons: Pandas for data manipulation, NumPy for numerical computing. These are used in every data job.',
            sections: [
              {
                heading: 'NumPy',
                code: `import numpy as np

# Arrays (much faster than lists)
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1,2,3],[4,5,6]])

# Operations (vectorized - no loops needed!)
print(arr * 2)              # [2, 4, 6, 8, 10]
print(arr ** 2)             # [1, 4, 9, 16, 25]
print(np.sqrt(arr))         # [1., 1.41, 1.73, 2., 2.23]

# Stats
print(np.mean(arr))         # 3.0
print(np.std(arr))          # 1.41
print(np.sum(arr))          # 15`
              },
              {
                heading: 'Pandas',
                code: `import pandas as pd

# DataFrame = spreadsheet in Python
df = pd.DataFrame({
    "name": ["Aria", "Zorn", "Kira"],
    "class": ["Mage", "Warrior", "Rogue"],
    "level": [10, 8, 12],
    "xp": [5000, 3200, 7800]
})

# Explore
print(df.shape)             # (3, 4)
print(df.describe())        # stats summary
print(df.dtypes)

# Filter & Query
mages = df[df["class"] == "Mage"]
high_level = df[df["level"] > 9]

# Aggregate
print(df.groupby("class")["xp"].mean())
print(df["level"].value_counts())`
              }
            ]
          },
          bossQuestion: {
            type: 'code', difficulty: 'BOSS', xp: 200,
            bossName: 'DARK PYTHON LORD', bossEmoji: '🐍',
            text: 'Using Pandas, write code that:\n1. Creates a DataFrame with student data (name, score, grade)\n2. Filters students with score >= 80\n3. Adds a "passed" boolean column (score >= 60)\n4. Returns the average score of passing students\n\nUse any 5 students with scores between 50-100.',
            starterCode: 'import pandas as pd\n\n# 1. Create DataFrame\nstudents = pd.DataFrame({\n    # your data here\n})\n\n# 2. Filter high scorers\n\n# 3. Add passed column\n\n# 4. Average of passing students\n',
            solution: ['pd.DataFrame', 'df[df[', '>= 80', '= df[', '>= 60', '.mean()'],
            explanation: 'Create a DataFrame, use boolean indexing for filtering, assign a new column with a condition, then use .mean() on the filtered result.'
          }
        }
      ],
      projects: [
        {
          id: 'py-proj-1',
          title: 'Personal Finance Tracker',
          desc: 'CLI app to track income, expenses, and savings. Reads/writes CSV. Generates monthly summary.',
          tech: ['Python', 'Pandas', 'CSV', 'datetime'],
          unlockLevel: 3,
          steps: [
            'Set up project structure with main.py and data/transactions.csv',
            'Build TransactionManager class with add/remove/list methods',
            'Implement CSV read/write with Pandas',
            'Add category filtering and date range queries',
            'Build monthly summary report with totals and percentages',
            'Add CLI menu with argparse',
            'Write README with usage examples'
          ]
        },
        {
          id: 'py-proj-2',
          title: 'Web Scraper & Data Pipeline',
          desc: 'Scrape job listings from a public site, clean the data with Pandas, store in JSON, and generate insights report.',
          tech: ['Python', 'requests', 'BeautifulSoup', 'Pandas', 'JSON'],
          unlockLevel: 5,
          steps: [
            'Set up environment: pip install requests bs4 pandas',
            'Write scraper for books.toscrape.com (practice site)',
            'Extract title, price, rating into DataFrame',
            'Clean data: fix types, handle nulls, normalize ratings',
            'Analyze: top rated, price distribution, category breakdown',
            'Export cleaned CSV and JSON',
            'Build summary report printed to console',
            'Add error handling and retries',
            'Write README and docstrings'
          ]
        }
      ]
    },
    {
      id: 'sql',
      name: 'SQL KINGDOM',
      emoji: '🗄️',
      color: 'sql',
      tag: 'Data Querying · Analytics',
      desc: 'Query databases like a professional analyst. From SELECT basics to advanced window functions used in real data jobs.',
      xpToUnlock: 200,
      skills: ['SELECT', 'JOINs', 'Aggregations', 'Subqueries', 'Window Functions'],
      levels: [
        {
          id: 'sql-1', num: 1, title: 'The Query Gate', subtitle: 'SELECT, WHERE, ORDER BY',
          lesson: {
            intro: 'SQL is the language of data. Every analyst, data scientist, and backend developer needs it. Start with the most fundamental command: SELECT.',
            sections: [
              {
                heading: 'SELECT Basics',
                code: `-- Get all columns from heroes table
SELECT * FROM heroes;

-- Get specific columns
SELECT name, level, class
FROM heroes;

-- Filter with WHERE
SELECT name, level
FROM heroes
WHERE level > 5;

-- Multiple conditions
SELECT *
FROM heroes
WHERE level > 5
  AND class = 'Mage'
  AND hp > 100;

-- ORDER results
SELECT name, level
FROM heroes
ORDER BY level DESC;   -- highest first

-- Limit results
SELECT name, level
FROM heroes
ORDER BY level DESC
LIMIT 10;`
              },
              {
                heading: 'String & Comparison Operations',
                code: `-- LIKE for pattern matching
SELECT * FROM heroes
WHERE name LIKE 'A%';      -- starts with A

SELECT * FROM heroes
WHERE name LIKE '%ia';     -- ends with 'ia'

-- IN for multiple values
SELECT * FROM heroes
WHERE class IN ('Mage', 'Rogue', 'Ranger');

-- BETWEEN for ranges
SELECT * FROM items
WHERE price BETWEEN 10 AND 100;

-- IS NULL check
SELECT * FROM heroes
WHERE guild IS NULL;       -- no guild assigned`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 40,
            bossName: 'NULL KNIGHT', bossEmoji: '⚔️',
            text: 'Which query returns all heroes with level > 10 AND class = "Warrior", sorted by name A-Z?',
            options: [
              "SELECT * FROM heroes WHERE level > 10 OR class = 'Warrior' ORDER BY name;",
              "SELECT * FROM heroes WHERE level > 10 AND class = 'Warrior' ORDER BY name ASC;",
              "SELECT * FROM heroes WHERE level > 10 AND class = 'Warrior' ORDER BY name DESC;",
              "SELECT name FROM heroes WHERE level > 10 AND class = 'Warrior';"
            ],
            correct: 1,
            explanation: 'AND combines both conditions, ASC sorts A-Z (default), SELECT * returns all columns.'
          }
        },
        {
          id: 'sql-2', num: 2, title: 'The Alliance', subtitle: 'JOINs — Combining Tables',
          lesson: {
            intro: 'Real databases have multiple tables connected by relationships. JOINs are how you unite them — the most critical SQL skill for any data role.',
            sections: [
              {
                heading: 'Types of JOINs',
                code: `-- INNER JOIN: only matching rows in BOTH tables
SELECT h.name, g.guild_name
FROM heroes h
INNER JOIN guilds g ON h.guild_id = g.id;

-- LEFT JOIN: all heroes, guild info if exists
SELECT h.name, g.guild_name
FROM heroes h
LEFT JOIN guilds g ON h.guild_id = g.id;
-- Heroes without a guild will show NULL for guild_name

-- Multiple JOINs
SELECT h.name, g.guild_name, r.region_name
FROM heroes h
LEFT JOIN guilds g     ON h.guild_id = g.id
LEFT JOIN regions r    ON g.region_id = r.id;`
              },
              {
                heading: 'Practical JOIN patterns',
                code: `-- Find heroes WITH a guild (INNER JOIN result)
SELECT h.name, g.guild_name, g.rank
FROM heroes h
JOIN guilds g ON h.guild_id = g.id
WHERE g.rank = 'S-Tier'
ORDER BY h.level DESC;

-- Find heroes WITHOUT a guild
SELECT h.name, h.level
FROM heroes h
LEFT JOIN guilds g ON h.guild_id = g.id
WHERE g.id IS NULL;     -- no match = unguilded`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'JOIN GIANT', bossEmoji: '🏔️',
            text: 'You have an "orders" table and "customers" table. You want ALL orders, even if the customer was deleted. Which JOIN do you use?',
            options: ['INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN (orders LEFT JOIN customers)', 'CROSS JOIN'],
            correct: 2,
            explanation: 'LEFT JOIN keeps all rows from the LEFT table (orders) and adds customer info when it exists. Deleted customers show NULL.'
          }
        },
        {
          id: 'sql-3', num: 3, title: 'The Counting Chamber', subtitle: 'Aggregations & GROUP BY',
          lesson: {
            intro: 'Aggregation turns thousands of rows into meaningful summaries. This is where SQL becomes analytics power.',
            sections: [
              {
                heading: 'Aggregate Functions',
                code: `-- COUNT, SUM, AVG, MIN, MAX
SELECT
    COUNT(*)           AS total_heroes,
    AVG(level)         AS avg_level,
    MAX(level)         AS highest_level,
    MIN(level)         AS lowest_level,
    SUM(gold)          AS total_gold
FROM heroes;

-- GROUP BY: aggregate per group
SELECT
    class,
    COUNT(*)           AS hero_count,
    AVG(level)         AS avg_level,
    SUM(gold)          AS total_gold
FROM heroes
GROUP BY class
ORDER BY hero_count DESC;`
              },
              {
                heading: 'HAVING — Filter on aggregates',
                code: `-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER aggregating

SELECT
    class,
    COUNT(*)  AS hero_count,
    AVG(gold) AS avg_gold
FROM heroes
WHERE level > 5           -- filter rows first
GROUP BY class
HAVING COUNT(*) >= 10     -- only groups with 10+ heroes
ORDER BY avg_gold DESC;`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 80,
            bossName: 'COUNT VAMPIRE', bossEmoji: '🧛',
            text: 'What is the CORRECT order of SQL clauses?\n\nSELECT ... FROM ... ___ ... GROUP BY ... ___ ... ORDER BY ...',
            options: ['HAVING, WHERE', 'WHERE, HAVING', 'ORDER BY, WHERE', 'GROUP BY, WHERE'],
            correct: 1,
            explanation: 'The order is: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY. WHERE filters before grouping, HAVING filters after.'
          }
        },
        {
          id: 'sql-4', num: 4, title: 'The Window', subtitle: 'Window Functions — Pro Analytics',
          lesson: {
            intro: 'Window functions are the most powerful SQL feature for analytics. They perform calculations across related rows WITHOUT collapsing them like GROUP BY.',
            sections: [
              {
                heading: 'ROW_NUMBER, RANK, DENSE_RANK',
                code: `-- Rank heroes by XP within each class
SELECT
    name,
    class,
    xp,
    ROW_NUMBER() OVER (PARTITION BY class ORDER BY xp DESC) AS row_num,
    RANK()       OVER (PARTITION BY class ORDER BY xp DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY class ORDER BY xp DESC) AS dense_rank
FROM heroes;

-- Get TOP 1 per class (subquery trick)
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (
        PARTITION BY class ORDER BY xp DESC
    ) AS rn
    FROM heroes
) ranked
WHERE rn = 1;`
              },
              {
                heading: 'Running Totals & Moving Averages',
                code: `-- Running total of XP earned over time
SELECT
    date,
    xp_earned,
    SUM(xp_earned) OVER (ORDER BY date)           AS running_total,
    AVG(xp_earned) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg_7d,
    LAG(xp_earned, 1) OVER (ORDER BY date)        AS prev_day_xp,
    xp_earned - LAG(xp_earned,1) OVER (ORDER BY date) AS day_over_day_change
FROM daily_xp;`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 110,
            bossName: 'WINDOW WIZARD', bossEmoji: '🔮',
            text: 'What is the difference between RANK() and DENSE_RANK() when there are ties?\n\nScores: 100, 90, 90, 80',
            options: [
              'No difference, they are identical',
              'RANK() gives: 1,2,2,4 | DENSE_RANK() gives: 1,2,2,3',
              'RANK() gives: 1,2,3,4 | DENSE_RANK() gives: 1,2,2,4',
              'RANK() gives: 1,2,2,3 | DENSE_RANK() gives: 1,2,2,4'
            ],
            correct: 1,
            explanation: 'RANK() skips numbers after ties (1,2,2,4 — skips 3). DENSE_RANK() never skips (1,2,2,3). Use DENSE_RANK when you want consecutive ranks.'
          }
        },
        {
          id: 'sql-5', num: 5, title: 'THE SQL DRAGON', subtitle: 'CTEs & Advanced Queries',
          lesson: {
            intro: 'CTEs (Common Table Expressions) make complex queries readable and maintainable. The sign of a senior data analyst.',
            sections: [
              {
                heading: 'CTEs with WITH',
                code: `-- WITHOUT CTE (hard to read):
SELECT h.name, g.avg_level
FROM heroes h
JOIN (SELECT guild_id, AVG(level) as avg_level FROM heroes GROUP BY guild_id) g
  ON h.guild_id = g.guild_id;

-- WITH CTE (clean & readable):
WITH guild_stats AS (
    SELECT
        guild_id,
        AVG(level)  AS avg_level,
        COUNT(*)    AS member_count,
        SUM(gold)   AS total_gold
    FROM heroes
    GROUP BY guild_id
),
top_guilds AS (
    SELECT guild_id
    FROM guild_stats
    WHERE member_count >= 5
      AND avg_level > 8
)
SELECT h.name, h.level, gs.avg_level
FROM heroes h
JOIN guild_stats gs  ON h.guild_id = gs.guild_id
JOIN top_guilds tg   ON h.guild_id = tg.guild_id
ORDER BY gs.avg_level DESC;`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'BOSS', xp: 180,
            bossName: 'THE SQL DRAGON', bossEmoji: '🐲',
            text: 'You need to find the 2nd highest salary in each department. Which approach is BEST?',
            options: [
              'Use MAX(salary) WHERE salary < MAX(salary)',
              'Use DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) and filter WHERE rank = 2',
              'ORDER BY salary DESC LIMIT 2 and take the second row',
              'Use a correlated subquery with COUNT(*) > 1'
            ],
            correct: 1,
            explanation: 'DENSE_RANK() with PARTITION BY is the professional solution. It handles ties correctly and works per department. The other approaches either don\'t work per-dept or have edge cases with ties.'
          }
        }
      ],
      projects: [
        {
          id: 'sql-proj-1',
          title: 'E-Commerce Analytics Dashboard',
          desc: 'Design a database schema for an e-commerce site, write queries for key business metrics: revenue, top products, customer LTV.',
          tech: ['SQL', 'SQLite', 'Python (sqlite3)', 'Pandas'],
          unlockLevel: 3,
          steps: [
            'Design schema: customers, orders, products, order_items tables',
            'Write CREATE TABLE statements with proper foreign keys',
            'Insert sample data (50+ records per table)',
            'Query: total revenue by month (GROUP BY + date functions)',
            'Query: top 10 products by revenue (JOIN + aggregate)',
            'Query: customer lifetime value (HAVING + multiple JOINs)',
            'Query: repeat vs one-time customers (subquery)',
            'Window function: month-over-month revenue growth',
            'Export results to CSV with Python sqlite3',
            'Write README with schema diagram description'
          ]
        },
        {
          id: 'sql-proj-2',
          title: 'HR Analytics System',
          desc: 'Analyze employee data: salary bands, performance, departmental insights. Uses complex JOINs, window functions, CTEs.',
          tech: ['SQL', 'PostgreSQL / SQLite', 'CTEs', 'Window Functions'],
          unlockLevel: 5,
          steps: [
            'Schema: employees, departments, salaries, performance_reviews',
            'Insert realistic employee data (100+ rows)',
            'CTE: dept headcount and avg salary',
            'Window: rank employees by salary within dept',
            'Find employees earning above dept average',
            'YoY salary growth per employee using LAG()',
            'Identify top performers with salary below avg (undervalued)',
            'Build final "executive summary" query (5+ CTEs)',
            'Document all queries with business context comments'
          ]
        }
      ]
    },
    {
      id: 'ml',
      name: 'ML FORTRESS',
      emoji: '🤖',
      color: 'ml',
      tag: 'Machine Learning · AI',
      desc: 'From linear regression to neural networks. Build real models, understand the math, apply to real problems.',
      xpToUnlock: 500,
      skills: ['Regression', 'Classification', 'Clustering', 'Neural Nets', 'Model Evaluation'],
      levels: [
        {
          id: 'ml-1', num: 1, title: 'The Prediction Gate', subtitle: 'Linear & Logistic Regression',
          lesson: {
            intro: 'Regression is the foundation of ML. Linear regression predicts numbers; logistic regression predicts categories. Both are used in countless production systems.',
            sections: [
              {
                heading: 'Linear Regression',
                code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Data: hero level vs XP required
X = np.array([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])
y = np.array([100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700, 3250])

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"R² Score: {r2_score(y_test, y_pred):.3f}")
print(f"RMSE: {mean_squared_error(y_test, y_pred, squared=False):.1f}")

# Predict level 15
print(f"XP for level 15: {model.predict([[15]])[0]:.0f}")`
              },
              {
                heading: 'Logistic Regression (Classification)',
                code: `from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Predict hero class: 0=Warrior, 1=Mage
# Features: [strength, intelligence, speed]
X_train = [[8,3,5],[7,4,6],[3,9,7],[2,10,8],[9,2,4]]
y_train = [0, 0, 1, 1, 0]

clf = LogisticRegression(random_state=42)
clf.fit(X_train, y_train)

# New hero: strength=5, intelligence=7, speed=6
new_hero = [[5, 7, 6]]
prediction = clf.predict(new_hero)
probability = clf.predict_proba(new_hero)
print(f"Class: {'Mage' if prediction[0]==1 else 'Warrior'}")
print(f"Confidence: {max(probability[0]):.1%}")`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 80,
            bossName: 'REGRESSION REAPER', bossEmoji: '📉',
            text: 'Your model has R² = 0.95 on training data but R² = 0.42 on test data. What is this called and how do you fix it?',
            options: [
              'Underfitting — add more features',
              'Overfitting — use regularization, more data, or simpler model',
              'Good model — the test set is just harder',
              'Data leakage — re-split the data'
            ],
            correct: 1,
            explanation: 'High train score + low test score = Overfitting. The model memorized training data. Solutions: regularization (Ridge/Lasso), more training data, fewer features, or cross-validation.'
          }
        },
        {
          id: 'ml-2', num: 2, title: 'The Forest', subtitle: 'Decision Trees & Random Forests',
          lesson: {
            intro: 'Tree-based models are among the most powerful in practice. Random Forests win Kaggle competitions and power real-world recommendation systems.',
            sections: [
              {
                heading: 'Decision Tree → Random Forest',
                code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd

# Load a real dataset
from sklearn.datasets import load_iris
data = load_iris()
X, y = data.data, data.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Random Forest: ensemble of 100 decision trees
rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=5,
    random_state=42
)
rf.fit(X_train, y_train)

# Evaluate
y_pred = rf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
print(classification_report(y_test, y_pred, target_names=data.target_names))

# Feature importance (which features matter most?)
importances = pd.Series(rf.feature_importances_, index=data.feature_names)
print(importances.sort_values(ascending=False))`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 90,
            bossName: 'FOREST PHANTOM', bossEmoji: '🌲',
            text: 'What makes Random Forest better than a single Decision Tree?',
            options: [
              'It runs faster because it uses simpler trees',
              'It reduces variance by averaging many trees trained on random subsets',
              'It always achieves 100% training accuracy',
              'It requires less data to train'
            ],
            correct: 1,
            explanation: 'Random Forest = bagging + random feature selection. Each tree sees a random data subset and feature subset, then predictions are averaged. This reduces variance (overfitting) while maintaining low bias.'
          }
        },
        {
          id: 'ml-3', num: 3, title: 'The Neural Nexus', subtitle: 'Neural Networks & Deep Learning',
          lesson: {
            intro: 'Neural networks power GPT, image recognition, AlphaGo. Learn the fundamentals with Keras, the most accessible deep learning API.',
            sections: [
              {
                heading: 'Building a Neural Network',
                code: `import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import StandardScaler
import numpy as np

# Build model architecture
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dropout(0.3),      # prevent overfitting
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(1, activation='sigmoid')  # binary classification
])

# Compile
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Train
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2,
    callbacks=[keras.callbacks.EarlyStopping(patience=5)]
)`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 120,
            bossName: 'NEURAL NIGHTMARE', bossEmoji: '🧠',
            text: 'What does Dropout do in a neural network?',
            options: [
              'Removes neurons with the lowest weights permanently',
              'Randomly sets neuron outputs to 0 during training to prevent overfitting',
              'Speeds up training by skipping some epochs',
              'Reduces the learning rate when validation loss plateaus'
            ],
            correct: 1,
            explanation: 'Dropout randomly "drops" neurons during each training step (sets to 0), forcing the network to learn redundant representations and preventing co-adaptation. It\'s disabled during inference.'
          }
        },
        {
          id: 'ml-4', num: 4, title: 'THE ML TITAN', subtitle: 'Model Pipeline & Production',
          lesson: {
            intro: 'A model that lives only in a notebook is useless. Learn scikit-learn Pipelines — how real ML goes to production.',
            sections: [
              {
                heading: 'sklearn Pipeline',
                code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import GridSearchCV
import joblib

# Define preprocessing per column type
numeric_features = ['age', 'salary', 'experience']
categorical_features = ['department', 'education']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
])

# Chain preprocessing + model
pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', GradientBoostingClassifier())
])

# Hyperparameter tuning
param_grid = {
    'classifier__n_estimators': [100, 200],
    'classifier__max_depth': [3, 5],
    'classifier__learning_rate': [0.05, 0.1]
}

grid_search = GridSearchCV(pipeline, param_grid, cv=5, n_jobs=-1)
grid_search.fit(X_train, y_train)

print(f"Best params: {grid_search.best_params_}")
print(f"Best CV score: {grid_search.best_score_:.3f}")

# Save to production
joblib.dump(grid_search.best_estimator_, 'model.pkl')`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'BOSS', xp: 200,
            bossName: 'THE ML TITAN', bossEmoji: '⚙️',
            text: 'You trained a fraud detection model. 99% of transactions are legitimate, 1% are fraud. Your model predicts "not fraud" for everything and gets 99% accuracy. What metric should you use instead?',
            options: ['Accuracy', 'Precision + Recall / F1-Score', 'Mean Squared Error', 'R² Score'],
            correct: 1,
            explanation: 'Class imbalance makes accuracy misleading. F1-Score = harmonic mean of Precision & Recall, penalizing models that ignore the minority class. For fraud, use AUC-ROC or F1 with focus on Recall (catching actual fraud).'
          }
        }
      ],
      projects: [
        {
          id: 'ml-proj-1',
          title: 'House Price Predictor',
          desc: 'End-to-end ML project: predict house prices using regression. Full pipeline from raw data to deployed model with API.',
          tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'Matplotlib'],
          unlockLevel: 2,
          steps: [
            'Download Boston/Ames Housing dataset from Kaggle',
            'EDA: distributions, correlations, missing values',
            'Feature engineering: log transforms, interaction terms',
            'Build preprocessing Pipeline with ColumnTransformer',
            'Train & compare: Linear, Ridge, Gradient Boosting',
            'Hyperparameter tuning with GridSearchCV',
            'Evaluate: RMSE, R², residual plots',
            'Save model with joblib',
            'Build Flask API endpoint: POST /predict',
            'Test with curl and write README'
          ]
        },
        {
          id: 'ml-proj-2',
          title: 'Customer Churn Classifier',
          desc: 'Predict which telecom customers will cancel. Handle class imbalance, build interpretable model, create business recommendations.',
          tech: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Pandas'],
          unlockLevel: 4,
          steps: [
            'Load Telco Customer Churn dataset',
            'EDA: churn rate, feature distributions by churn status',
            'Handle imbalance: SMOTE or class_weight parameter',
            'Feature selection: correlation analysis, feature importance',
            'Train XGBoost classifier with cross-validation',
            'Evaluate: F1, AUC-ROC, confusion matrix',
            'Interpret with SHAP values (which features drive churn)',
            'Build "at-risk customers" report',
            'Write business recommendations based on insights',
            'Create Jupyter notebook with full narrative'
          ]
        }
      ]
    },
    {
      id: 'dataviz',
      name: 'DATA VIZ DOMAIN',
      emoji: '📊',
      color: 'dataviz',
      tag: 'Analysis · Visualization',
      desc: 'Turn raw numbers into insights. Master EDA, statistical analysis, and powerful visualizations with Matplotlib, Seaborn & Plotly.',
      xpToUnlock: 350,
      skills: ['EDA', 'Matplotlib', 'Seaborn', 'Plotly', 'Statistics'],
      levels: [
        {
          id: 'dv-1', num: 1, title: 'The Eye of Insight', subtitle: 'Exploratory Data Analysis',
          lesson: {
            intro: 'Before modeling, you must understand your data. EDA is the process of discovering patterns, spotting anomalies, and forming hypotheses.',
            sections: [
              {
                heading: 'EDA Workflow',
                code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('heroes.csv')

# Step 1: Shape & info
print(df.shape)         # (rows, cols)
print(df.dtypes)        # column types
print(df.info())        # non-null counts

# Step 2: Statistical summary
print(df.describe())    # mean, std, min, quartiles, max

# Step 3: Missing values
print(df.isnull().sum())
print(df.isnull().mean() * 100)  # % missing

# Step 4: Value counts for categoricals
print(df['class'].value_counts())
print(df['class'].value_counts(normalize=True))  # %

# Step 5: Correlation matrix
print(df.select_dtypes(include='number').corr())`
              },
              {
                heading: 'Quick Visualizations',
                code: `# Distribution
df['level'].hist(bins=20)
plt.title('Level Distribution')
plt.show()

# Correlation heatmap
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.show()

# Pairplot (all numeric vs all)
sns.pairplot(df, hue='class', diag_kind='kde')
plt.show()

# Boxplot: outlier detection
sns.boxplot(x='class', y='gold', data=df)
plt.show()`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'OUTLIER OGRE', bossEmoji: '👹',
            text: 'Your "salary" column has mean=65000 but median=52000. What does this likely indicate?',
            options: [
              'The data is normally distributed',
              'Right skew: a few high earners are pulling the mean up',
              'Left skew: most earners have high salaries',
              'The data has no outliers'
            ],
            correct: 1,
            explanation: 'When mean > median, the distribution is right-skewed. A few very high salaries (outliers) are inflating the mean. Median is a better "typical salary" in this case. Use boxplots or histograms to visualize.'
          }
        },
        {
          id: 'dv-2', num: 2, title: 'THE STATS SPHINX', subtitle: 'Statistical Testing',
          lesson: {
            intro: 'Statistics turns observations into conclusions. A/B testing, hypothesis testing, and confidence intervals are used in every data-driven company.',
            sections: [
              {
                heading: 'Hypothesis Testing',
                code: `from scipy import stats
import numpy as np

# A/B test: Did new UI increase conversions?
control   = np.array([0.12, 0.11, 0.13, 0.10, 0.12, 0.14])  # old UI
treatment = np.array([0.15, 0.16, 0.14, 0.17, 0.15, 0.18])  # new UI

# t-test: is the difference statistically significant?
t_stat, p_value = stats.ttest_ind(control, treatment)
print(f"t-statistic: {t_stat:.3f}")
print(f"p-value: {p_value:.4f}")

if p_value < 0.05:
    print("✅ Statistically significant! New UI is better.")
else:
    print("❌ Not significant. Could be random noise.")

# Effect size (Cohen's d)
pooled_std = np.sqrt((np.std(control)**2 + np.std(treatment)**2) / 2)
cohens_d = (np.mean(treatment) - np.mean(control)) / pooled_std
print(f"Effect size: {cohens_d:.2f}")`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 110,
            bossName: 'THE STATS SPHINX', bossEmoji: '🦁',
            text: 'p-value = 0.03 in an A/B test (α = 0.05). What is the correct interpretation?',
            options: [
              'There is a 3% chance the new version is better',
              'There is a 97% chance the null hypothesis is true',
              'If there were no real effect, we\'d see data this extreme only 3% of the time',
              'The treatment definitely causes the effect'
            ],
            correct: 2,
            explanation: 'p-value = probability of seeing this data (or more extreme) IF the null hypothesis were true. It does NOT tell you the probability that your hypothesis is correct or wrong. It just measures how surprising the data is under the null.'
          }
        }
      ],
      projects: [
        {
          id: 'dv-proj-1',
          title: 'COVID-19 Data Dashboard',
          desc: 'Analyze and visualize real COVID-19 data: trends, country comparisons, vaccination rates. Interactive Plotly charts.',
          tech: ['Python', 'Pandas', 'Plotly', 'Seaborn', 'Jupyter'],
          unlockLevel: 1,
          steps: [
            'Download Our World in Data COVID dataset',
            'EDA: missing values, date ranges, country coverage',
            'Line chart: cases over time (multiple countries)',
            'Bar chart: top 20 countries by total deaths (per capita)',
            'Scatter: vaccination rate vs mortality rate correlation',
            'Animated chart: vaccination progress over time',
            'Statistical analysis: does higher vaccination → lower mortality?',
            'Build interactive Plotly dashboard',
            'Export to HTML for sharing',
            'Write analysis narrative in Jupyter markdown cells'
          ]
        },
        {
          id: 'dv-proj-2',
          title: 'Stock Market Analysis Tool',
          desc: 'Fetch stock data with yfinance, compute technical indicators, visualize trends, backtest simple trading strategies.',
          tech: ['Python', 'yfinance', 'Pandas', 'Matplotlib', 'NumPy'],
          unlockLevel: 2,
          steps: [
            'Fetch 2 years of AAPL + MSFT + GOOGL data with yfinance',
            'Plot candlestick chart with OHLC data',
            'Compute moving averages (SMA 20, SMA 50, EMA 20)',
            'Calculate RSI (Relative Strength Index)',
            'Plot Bollinger Bands',
            'Simple backtest: golden cross strategy (SMA20 > SMA50 = buy)',
            'Compare returns vs buy-and-hold benchmark',
            'Risk metrics: Sharpe ratio, max drawdown',
            'Save charts as high-res PNGs',
            'Write findings in README'
          ]
        }
      ]
    },
    {
      id: 'api',
      name: 'API CITADEL',
      emoji: '⚡',
      color: 'api',
      tag: 'FastAPI · REST · High Paying',
      desc: 'Build production APIs with FastAPI — the fastest-growing Python framework. Power your ML models and data pipelines with HTTP endpoints.',
      xpToUnlock: 600,
      skills: ['REST', 'FastAPI', 'Pydantic', 'Auth', 'Deployment'],
      levels: [
        {
          id: 'api-1', num: 1, title: 'The Gateway', subtitle: 'FastAPI Fundamentals',
          lesson: {
            intro: 'FastAPI is Python\'s most modern API framework — faster than Flask, more powerful than Django for APIs, and with automatic documentation. Used at Uber, Netflix, Microsoft.',
            sections: [
              {
                heading: 'Your First API',
                code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="CodeQuest API", version="1.0.0")

# Pydantic model = automatic validation
class Hero(BaseModel):
    name: str
    level: int = 1
    class_type: str
    xp: Optional[int] = 0

# In-memory DB (use real DB in production)
heroes_db: dict[int, Hero] = {}
next_id = 1

@app.get("/")
async def root():
    return {"message": "Welcome to CodeQuest API", "status": "healthy"}

@app.post("/heroes", status_code=201)
async def create_hero(hero: Hero):
    global next_id
    heroes_db[next_id] = hero
    result = {"id": next_id, **hero.dict()}
    next_id += 1
    return result

@app.get("/heroes/{hero_id}")
async def get_hero(hero_id: int):
    if hero_id not in heroes_db:
        raise HTTPException(status_code=404, detail="Hero not found")
    return heroes_db[hero_id]

@app.get("/heroes")
async def list_heroes(min_level: int = 0, limit: int = 10):
    results = [h for h in heroes_db.values() if h.level >= min_level]
    return results[:limit]

# Run: uvicorn main:app --reload
# Docs: http://localhost:8000/docs`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 80,
            bossName: 'REST DEMON', bossEmoji: '👿',
            text: 'What HTTP status code should you return when creating a new resource successfully?',
            options: ['200 OK', '201 Created', '204 No Content', '202 Accepted'],
            correct: 1,
            explanation: '201 Created is the correct semantic response for POST requests that create a new resource. 200 is for successful GET/PUT. 204 is for DELETE (no content). Use the right status codes — they matter for API clients.'
          }
        }
      ],
      projects: [
        {
          id: 'api-proj-1',
          title: 'ML Model API Service',
          desc: 'Wrap your trained ML model in a production FastAPI service with authentication, request validation, and async processing.',
          tech: ['FastAPI', 'Pydantic', 'scikit-learn', 'joblib', 'uvicorn'],
          unlockLevel: 1,
          steps: [
            'Train and save a model (house price or churn predictor)',
            'Create FastAPI app structure: main.py, models.py, routes/',
            'Load model at startup with @app.on_event("startup")',
            'POST /predict endpoint with Pydantic request/response models',
            'Add input validation (ranges, required fields)',
            'Add simple API key authentication with headers',
            'POST /batch endpoint for multiple predictions',
            'Add request logging middleware',
            'Docker containerize the API',
            'Deploy to Railway or Render (free tier)',
            'Write API documentation in README'
          ]
        },
        {
          id: 'api-proj-2',
          title: 'Real-Time Data Pipeline API',
          desc: 'Build an API that accepts data, processes it async, stores in SQLite, and provides analytics endpoints.',
          tech: ['FastAPI', 'SQLAlchemy', 'SQLite', 'asyncio', 'Pandas'],
          unlockLevel: 1,
          steps: [
            'Setup FastAPI with SQLAlchemy async ORM',
            'Create Event model: id, source, timestamp, payload (JSON)',
            'POST /events to ingest events asynchronously',
            'GET /events with filtering by date, source, type',
            'GET /analytics/summary endpoint (aggregated stats)',
            'Add background task for event processing',
            'Pagination with offset/limit',
            'Add health check and metrics endpoints',
            'Write integration tests with pytest',
            'Create Postman collection for API testing'
          ]
        }
      ]
    },
    {
      id: 'cloud',
      name: 'CLOUD REALM',
      emoji: '☁️',
      color: 'cloud',
      tag: 'Docker · AWS · High Paying',
      desc: 'Master Docker, containerization, and cloud deployment. The skills that 10x your salary. Every tech company uses these.',
      xpToUnlock: 800,
      skills: ['Docker', 'Docker Compose', 'AWS S3', 'CI/CD', 'GitHub Actions'],
      levels: [
        {
          id: 'cloud-1', num: 1, title: 'The Container Keep', subtitle: 'Docker Fundamentals',
          lesson: {
            intro: 'Docker ensures your code runs the same everywhere — dev, staging, production. "It works on my machine" is no longer an excuse. Docker is required in ~80% of senior dev job postings.',
            sections: [
              {
                heading: 'Dockerfile & Containers',
                code: `# Dockerfile for a Python ML API
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first (layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Non-root user for security
RUN useradd --create-home appuser
USER appuser

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s \\
    CMD curl -f http://localhost:8000/health || exit 1

# Start command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`
              },
              {
                heading: 'Docker Compose for Multi-Service Apps',
                code: `# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/codequest
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./models:/app/models   # persist ML models

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: codequest
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:

# Commands:
# docker-compose up -d         # start all services
# docker-compose logs -f api   # follow API logs
# docker-compose down -v       # stop and remove volumes`
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 120,
            bossName: 'CONTAINER COLOSSUS', bossEmoji: '🏗️',
            text: 'Why should you COPY requirements.txt and run pip install BEFORE copying your source code in a Dockerfile?',
            options: [
              'Python requires it in this order',
              'Docker caches each layer; if code changes but requirements don\'t, pip install is skipped',
              'It reduces the final image size',
              'It\'s just a convention, no real difference'
            ],
            correct: 1,
            explanation: 'Docker caches layers. If requirements.txt hasn\'t changed, Docker reuses the cached pip install layer, making builds 10x faster. This is a critical Docker optimization pattern used in production.'
          }
        }
      ],
      projects: [
        {
          id: 'cloud-proj-1',
          title: 'Containerized ML Platform',
          desc: 'Dockerize your entire ML stack: model training, FastAPI serving, PostgreSQL, and monitoring. Deploy with docker-compose.',
          tech: ['Docker', 'Docker Compose', 'FastAPI', 'PostgreSQL', 'Prometheus'],
          unlockLevel: 1,
          steps: [
            'Write Dockerfile for the ML API (multi-stage build)',
            'Add PostgreSQL for storing predictions',
            'Add Redis for caching frequent predictions',
            'docker-compose.yml with all services',
            'Add Nginx reverse proxy config',
            'Environment variable management with .env files',
            'Add Prometheus + Grafana for monitoring',
            'GitHub Actions CI: build and test on push',
            'Deploy to DigitalOcean Droplet or AWS EC2',
            'Set up HTTPS with Let\'s Encrypt Certbot'
          ]
        },
        {
          id: 'cloud-proj-2',
          title: 'AWS Data Pipeline',
          desc: 'Build a serverless data pipeline: S3 → Lambda → RDS. Process files automatically when uploaded to S3.',
          tech: ['AWS S3', 'AWS Lambda', 'AWS RDS', 'Python boto3', 'Terraform'],
          unlockLevel: 1,
          steps: [
            'Set up AWS account and IAM roles',
            'Create S3 bucket for raw data ingestion',
            'Write Lambda function to process CSV on S3 upload',
            'Store processed data in RDS PostgreSQL',
            'Set up S3 event trigger for Lambda',
            'Add error handling and Dead Letter Queue (DLQ)',
            'CloudWatch logging and alerting',
            'Infrastructure as Code with Terraform',
            'Cost optimization: right-size Lambda memory',
            'End-to-end test: upload file → verify in RDS'
          ]
        }
      ]
    },

    // =============================================
    // CERTIFICATION WORLD 1: AWS CLOUD PRACTITIONER
    // =============================================
    {
      id: 'aws',
      name: 'AWS CLOUD PRACTITIONER',
      emoji: '☁️',
      color: 'cloud',
      tag: 'Certification · CLF-C02 · Beginner',
      desc: 'Prepare for the AWS Cloud Practitioner exam (CLF-C02). Learn cloud concepts, AWS services, pricing, security, and architecture from scratch.',
      xpToUnlock: 0,
      skills: ['Cloud Concepts', 'AWS Core Services', 'Security', 'Pricing', 'Architecture'],
      certInfo: {
        name: 'AWS Certified Cloud Practitioner',
        code: 'CLF-C02',
        questions: 65,
        duration: '90 minutes',
        passingScore: '700/1000',
        cost: '$100 USD',
        validity: '3 years'
      },
      levels: [
        {
          id: 'aws-1', num: 1, title: 'The Cloud Origin', subtitle: 'Cloud Computing Fundamentals',
          lesson: {
            intro: 'Cloud computing is the delivery of IT resources over the internet on a pay-as-you-go basis. Instead of owning servers, you rent them from AWS. This is the foundation of the entire exam.',
            sections: [
              {
                heading: 'What is Cloud Computing?',
                content: 'Cloud computing has 3 deployment models and 3 service models you MUST know for the exam:',
                bullets: [
                  'Public Cloud — resources owned by AWS, shared infrastructure (e.g., AWS itself)',
                  'Private Cloud — resources used exclusively by one organization (e.g., on-premises)',
                  'Hybrid Cloud — combination of public + private cloud connected together'
                ]
              },
              {
                heading: 'Service Models (The Big 3)',
                bullets: [
                  'IaaS (Infrastructure as a Service) — You manage OS, apps. AWS manages hardware. Example: EC2',
                  'PaaS (Platform as a Service) — You manage apps/data. AWS manages everything else. Example: Elastic Beanstalk',
                  'SaaS (Software as a Service) — You just use the software. Example: Gmail, Salesforce'
                ]
              },
              {
                heading: '6 Advantages of Cloud (Memorize These!)',
                bullets: [
                  '1. Trade capital expense for variable expense (pay only what you use)',
                  '2. Benefit from massive economies of scale (AWS buys cheaper)',
                  '3. Stop guessing capacity (scale up/down instantly)',
                  '4. Increase speed and agility (deploy in minutes, not months)',
                  '5. Stop spending money on data centers',
                  '6. Go global in minutes (deploy worldwide instantly)'
                ]
              },
              {
                heading: 'AWS Global Infrastructure',
                bullets: [
                  'Region — Geographic area with 2+ Availability Zones (e.g., us-east-1)',
                  'Availability Zone (AZ) — One or more data centers with redundant power/networking',
                  'Edge Location — CDN endpoints for CloudFront (content delivery, closer to users)',
                  'Currently: 30+ Regions, 90+ AZs, 400+ Edge Locations worldwide'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 50,
            bossName: 'CLOUD GUARDIAN', bossEmoji: '⛅',
            text: 'A company wants to use AWS services without managing the underlying infrastructure, OS, or runtime. They only want to deploy their application code. Which service model does this describe?',
            options: [
              'IaaS — Infrastructure as a Service',
              'PaaS — Platform as a Service',
              'SaaS — Software as a Service',
              'FaaS — Function as a Service'
            ],
            correct: 1,
            explanation: 'PaaS means AWS manages infrastructure, OS, and runtime. You only manage your application and data. Elastic Beanstalk is a classic PaaS example on AWS.'
          }
        },
        {
          id: 'aws-2', num: 2, title: 'The Core Services Tower', subtitle: 'EC2, S3, RDS & Core AWS Services',
          lesson: {
            intro: 'AWS has 200+ services but the exam focuses on the core ones. Master these and you\'ll answer 40% of exam questions correctly.',
            sections: [
              {
                heading: 'Compute Services',
                bullets: [
                  'EC2 (Elastic Compute Cloud) — Virtual servers in the cloud. You choose CPU, RAM, OS.',
                  'Lambda — Serverless functions. Run code without managing servers. Pay per execution.',
                  'ECS / EKS — Container services (Docker/Kubernetes managed by AWS)',
                  'Elastic Beanstalk — Deploy apps without managing infrastructure (PaaS)'
                ]
              },
              {
                heading: 'Storage Services',
                bullets: [
                  'S3 (Simple Storage Service) — Object storage. Store files, images, backups. 99.999999999% durability.',
                  'EBS (Elastic Block Store) — Hard drive for EC2 instances. Stays in one AZ.',
                  'EFS (Elastic File System) — Shared file system across multiple EC2 instances.',
                  'S3 Glacier — Very cheap archival storage. Retrieval takes minutes to hours.',
                  'Storage Gateway — Connects on-premises storage to AWS cloud.'
                ]
              },
              {
                heading: 'Database Services',
                bullets: [
                  'RDS (Relational Database Service) — Managed MySQL, PostgreSQL, Oracle, SQL Server.',
                  'DynamoDB — Serverless NoSQL database. Millisecond performance at any scale.',
                  'ElastiCache — In-memory caching (Redis/Memcached). Speed up read-heavy apps.',
                  'Redshift — Data warehouse for analytics. Petabyte-scale SQL queries.',
                  'Aurora — AWS-built MySQL/PostgreSQL. 5x faster than standard MySQL.'
                ]
              },
              {
                heading: 'Networking Services',
                bullets: [
                  'VPC (Virtual Private Cloud) — Your private network inside AWS.',
                  'Route 53 — DNS service. Translates domain names to IP addresses.',
                  'CloudFront — CDN (Content Delivery Network). Serves content from edge locations.',
                  'API Gateway — Create and manage REST/WebSocket APIs.',
                  'Direct Connect — Dedicated private connection from your data center to AWS.'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 55,
            bossName: 'SERVICE SENTINEL', bossEmoji: '🛡️',
            text: 'A developer needs to run code in response to events (like file uploads to S3) without managing any servers. Which AWS service is BEST suited for this?',
            options: ['EC2', 'Lambda', 'ECS', 'Elastic Beanstalk'],
            correct: 1,
            explanation: 'Lambda is serverless — you upload code, AWS runs it in response to events. No servers to manage, and you only pay when the code runs. Perfect for event-driven architectures.'
          }
        },
        {
          id: 'aws-3', num: 3, title: 'The Security Vault', subtitle: 'IAM, Security & Compliance',
          lesson: {
            intro: 'Security is the #1 priority at AWS and one of the biggest exam domains (25%+ of questions). The Shared Responsibility Model is the most important concept.',
            sections: [
              {
                heading: 'Shared Responsibility Model — CRITICAL',
                content: 'AWS and you SHARE security responsibilities. This is on almost every exam:',
                bullets: [
                  'AWS is responsible FOR the cloud — Physical hardware, global infrastructure, managed services',
                  'YOU are responsible IN the cloud — Your data, IAM users, OS patches, security groups, encryption',
                  'Example: AWS secures the EC2 host hardware. You secure what runs ON that EC2 (OS, apps, data).'
                ]
              },
              {
                heading: 'IAM — Identity and Access Management',
                bullets: [
                  'IAM User — Individual person or application with credentials',
                  'IAM Group — Collection of users with the same permissions',
                  'IAM Role — Permissions assigned to AWS services (e.g., EC2 accessing S3)',
                  'IAM Policy — JSON document defining what actions are allowed/denied',
                  'Root Account — Never use for daily tasks! Create IAM users instead.',
                  'MFA (Multi-Factor Authentication) — Always enable on root account!'
                ]
              },
              {
                heading: 'Security Services',
                bullets: [
                  'AWS Shield — DDoS protection. Standard is free, Advanced costs extra.',
                  'WAF (Web Application Firewall) — Blocks SQL injection, XSS attacks.',
                  'GuardDuty — Intelligent threat detection using ML.',
                  'Inspector — Automated security assessment for EC2 and containers.',
                  'KMS (Key Management Service) — Create and manage encryption keys.',
                  'CloudTrail — Logs ALL API calls in your AWS account. Audit trail.',
                  'Config — Tracks configuration changes to your AWS resources.'
                ]
              },
              {
                heading: 'Compliance Programs',
                bullets: [
                  'AWS is compliant with: SOC 1/2/3, PCI DSS, HIPAA, ISO 27001, GDPR',
                  'AWS Artifact — Self-service portal to download compliance reports',
                  'AWS Compliance Center — Research cloud compliance requirements'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'SECURITY BOSS', bossEmoji: '🔐',
            text: 'Under the AWS Shared Responsibility Model, which of the following is the CUSTOMER\'S responsibility?',
            options: [
              'Physical security of AWS data centers',
              'Patching the hypervisor on EC2 hosts',
              'Encrypting data stored in S3 buckets',
              'Maintaining the global network infrastructure'
            ],
            correct: 2,
            explanation: 'Encrypting your own data in S3 is YOUR responsibility as the customer. AWS secures the physical infrastructure, hypervisor, and global network. Your data, access controls, and OS-level security are yours to manage.'
          }
        },
        {
          id: 'aws-4', num: 4, title: 'The Pricing Palace', subtitle: 'Billing, Pricing & Cost Management',
          lesson: {
            intro: 'Pricing is 16% of the exam. AWS has a unique pay-as-you-go model with several ways to save money. Know these cold.',
            sections: [
              {
                heading: 'AWS Pricing Models',
                bullets: [
                  'On-Demand — Pay by the hour/second. No commitment. Most expensive per unit.',
                  'Reserved Instances — 1 or 3 year commitment. Up to 72% cheaper than On-Demand.',
                  'Spot Instances — Bid on unused AWS capacity. Up to 90% off. Can be interrupted!',
                  'Savings Plans — Flexible commitment ($/hour) applied to any EC2, Lambda, Fargate.',
                  'Dedicated Hosts — Physical server fully dedicated to you. For compliance/licensing.'
                ]
              },
              {
                heading: 'Cost Management Tools',
                bullets: [
                  'AWS Free Tier — 12 months free for new accounts (e.g., 750 hrs EC2 t2.micro/month)',
                  'AWS Cost Explorer — Visualize and analyze your AWS spending over time',
                  'AWS Budgets — Set spending alerts before you exceed your budget',
                  'AWS Pricing Calculator — Estimate costs BEFORE you deploy anything',
                  'Cost & Usage Reports — Most detailed billing data, exported to S3',
                  'Trusted Advisor — Recommends cost optimizations, security fixes, performance improvements'
                ]
              },
              {
                heading: 'Support Plans (Know the Differences!)',
                bullets: [
                  'Basic — Free. Access to documentation, forums, 7 core Trusted Advisor checks.',
                  'Developer — $29/month. Business hours email support. 1 contact.',
                  'Business — $100/month. 24/7 phone/chat/email. Full Trusted Advisor. < 1hr response for critical.',
                  'Enterprise On-Ramp — $5,500/month. Pool of TAMs. 30-min response for critical.',
                  'Enterprise — $15,000/month. Dedicated TAM. 15-min response for critical.'
                ]
              },
              {
                heading: 'AWS Organizations & Consolidated Billing',
                bullets: [
                  'AWS Organizations — Manage multiple AWS accounts centrally',
                  'Consolidated Billing — One bill for all accounts. Volume discounts shared across accounts.',
                  'Service Control Policies (SCPs) — Restrict what services accounts can use'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'BILLING BEAST', bossEmoji: '💰',
            text: 'A startup needs EC2 instances for a web application with unpredictable traffic that could disappear at any time. They need the LOWEST cost option but can tolerate interruptions. Which pricing model should they use?',
            options: [
              'On-Demand Instances',
              'Reserved Instances (1-year)',
              'Spot Instances',
              'Dedicated Hosts'
            ],
            correct: 2,
            explanation: 'Spot Instances are up to 90% cheaper than On-Demand but AWS can reclaim them with 2 minutes notice. Perfect for fault-tolerant, interruptible workloads like batch processing or flexible web apps.'
          }
        },
        {
          id: 'aws-5', num: 5, title: 'The Architecture Temple', subtitle: 'Well-Architected Framework & Services',
          lesson: {
            intro: 'The AWS Well-Architected Framework defines best practices for building in the cloud. It has 6 pillars that appear repeatedly on the exam.',
            sections: [
              {
                heading: '6 Pillars of Well-Architected Framework',
                bullets: [
                  '1. Operational Excellence — Run and monitor systems to deliver business value (CloudWatch, CloudTrail)',
                  '2. Security — Protect data and systems (IAM, KMS, Shield)',
                  '3. Reliability — Recover from failures, scale dynamically (Multi-AZ, Auto Scaling)',
                  '4. Performance Efficiency — Use resources efficiently (right instance types, serverless)',
                  '5. Cost Optimization — Avoid unnecessary costs (Reserved Instances, right-sizing)',
                  '6. Sustainability — Minimize environmental impact (use managed services, right-size)'
                ]
              },
              {
                heading: 'High Availability & Disaster Recovery',
                bullets: [
                  'Auto Scaling — Automatically add/remove EC2 instances based on demand',
                  'Elastic Load Balancer (ELB) — Distributes traffic across multiple EC2 instances',
                  'Multi-AZ RDS — Automatic failover to standby database in another AZ',
                  'S3 Cross-Region Replication — Copy S3 data to another region automatically',
                  'RPO (Recovery Point Objective) — Maximum acceptable data loss (time)',
                  'RTO (Recovery Time Objective) — Maximum acceptable downtime'
                ]
              },
              {
                heading: 'Additional Important Services',
                bullets: [
                  'SNS (Simple Notification Service) — Send messages/emails/SMS to subscribers (pub/sub)',
                  'SQS (Simple Queue Service) — Message queue between application components',
                  'CloudWatch — Monitor metrics, logs, set alarms for AWS resources',
                  'CloudFormation — Infrastructure as Code. Deploy AWS resources via templates.',
                  'Elastic Beanstalk — Deploy and scale web apps automatically (PaaS)',
                  'Lightsail — Simple VPS for beginners. Fixed pricing.'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 100,
            bossName: 'ARCHITECT TITAN', bossEmoji: '🏛️',
            text: 'A company\'s RDS database must automatically failover to a standby instance in case of an outage, with minimal data loss. The standby must be in a DIFFERENT physical location. Which feature enables this?',
            options: [
              'Read Replicas',
              'Multi-AZ Deployment',
              'S3 Cross-Region Replication',
              'ElastiCache'
            ],
            correct: 1,
            explanation: 'Multi-AZ RDS creates a synchronous standby replica in a different Availability Zone. If the primary fails, AWS automatically fails over — typically in 1-2 minutes. Read Replicas are for performance, not high availability failover.'
          }
        },
        {
          id: 'aws-6', num: 6, title: 'THE FINAL EXAM', subtitle: 'Mixed Domain Boss — CLF-C02 Style',
          lesson: {
            intro: 'Real exam questions mix domains. This final level tests all 4 domains together: Cloud Concepts (24%), Security (30%), Cloud Technology (34%), Billing (12%). You\'re ready!',
            sections: [
              {
                heading: 'Quick Cheat Sheet — Services to Memorize',
                bullets: [
                  'Serverless compute → Lambda',
                  'Object storage → S3',
                  'Relational database (managed) → RDS',
                  'NoSQL database → DynamoDB',
                  'CDN / Content Delivery → CloudFront',
                  'DNS → Route 53',
                  'DDoS protection → Shield',
                  'Threat detection (ML) → GuardDuty',
                  'API calls audit log → CloudTrail',
                  'Resource config tracking → Config',
                  'Cost visualization → Cost Explorer',
                  'Cost alerts → AWS Budgets',
                  'Multiple accounts → Organizations',
                  'Infrastructure as Code → CloudFormation',
                  'Message queue → SQS | Notifications → SNS'
                ]
              },
              {
                heading: 'Exam Strategy Tips',
                bullets: [
                  'If a question mentions "cheapest" + unpredictable load → Spot Instances',
                  'If a question mentions "compliance reports" → AWS Artifact',
                  'If a question asks who is responsible for customer data encryption → Customer',
                  'If a question asks about "monitoring metrics and logs" → CloudWatch',
                  'If a question asks about "auditing API calls" → CloudTrail',
                  'Read ALL options before answering — AWS loves "most cost-effective" or "LEAST operational overhead"'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'BOSS', xp: 200,
            bossName: 'AWS EXAM DRAGON', bossEmoji: '🐲',
            text: 'A company needs to send automated email notifications when CPU usage on their EC2 instances exceeds 80%. Which combination of services accomplishes this with the LEAST operational overhead?',
            options: [
              'CloudTrail + SQS + Lambda',
              'CloudWatch Alarm + SNS Topic',
              'Config + GuardDuty + SES',
              'Inspector + CloudFormation + Lambda'
            ],
            correct: 1,
            explanation: 'CloudWatch monitors EC2 CPU metrics and triggers an alarm at 80%. The alarm publishes to an SNS Topic which sends the email notification. This is the standard, serverless, low-overhead pattern — no custom code needed.'
          }
        }
      ],
      projects: [
        {
          id: 'aws-proj-1',
          title: 'AWS CLF-C02 Study Guide',
          desc: 'Build a personal study guide: flashcards for all 200+ AWS services, practice question bank, and a self-assessment tracker.',
          tech: ['Note-taking', 'Flashcard App', 'Practice Tests', 'Anki / Notion'],
          unlockLevel: 3,
          steps: [
            'Create Anki deck or Notion database for AWS services',
            'Add all core services: EC2, S3, RDS, Lambda, VPC, IAM (50+ cards)',
            'Add the 6 Well-Architected pillars with examples',
            'Add Shared Responsibility Model examples (15+ scenarios)',
            'Create pricing model comparison table (On-Demand vs Reserved vs Spot)',
            'Add Support Plan comparison table',
            'Find and complete 2 free practice exams (AWS Skill Builder)',
            'Review all wrong answers and add to flashcards',
            'Score 80%+ on practice exam before booking real exam',
            'Book exam at Pearson VUE (pearsonvue.com/aws)'
          ]
        },
        {
          id: 'aws-proj-2',
          title: 'Deploy a Static Website on AWS',
          desc: 'Real hands-on AWS project: host a website on S3, add CloudFront CDN, Route 53 DNS, and HTTPS — all AWS Free Tier eligible.',
          tech: ['AWS S3', 'CloudFront', 'Route 53', 'ACM', 'AWS Console'],
          unlockLevel: 5,
          steps: [
            'Create AWS Free Tier account (credit card required, won\'t be charged)',
            'Create S3 bucket with static website hosting enabled',
            'Upload HTML/CSS files to S3 bucket',
            'Set bucket policy to allow public read access',
            'Create CloudFront distribution pointing to S3 bucket',
            'Request SSL certificate in AWS Certificate Manager (ACM)',
            'Attach SSL certificate to CloudFront distribution',
            'Test HTTPS access via CloudFront URL',
            'Optional: Register domain in Route 53 and point to CloudFront',
            'Document all steps with screenshots for your portfolio'
          ]
        }
      ]
    },

    // =============================================
    // CERTIFICATION WORLD 2: COMPTIA SECURITY+
    // =============================================
    {
      id: 'secplus',
      name: 'COMPTIA SECURITY+',
      emoji: '🔐',
      color: 'api',
      tag: 'Certification · SY0-701 · Cybersecurity',
      desc: 'The most popular entry-level cybersecurity certification. Covers threats, attacks, cryptography, identity management and security architecture.',
      xpToUnlock: 0,
      skills: ['Threats & Attacks', 'Cryptography', 'IAM', 'Network Security', 'Incident Response'],
      certInfo: {
        name: 'CompTIA Security+',
        code: 'SY0-701',
        questions: '90 max (MCQ + Performance-based)',
        duration: '90 minutes',
        passingScore: '750/900',
        cost: '$392 USD',
        validity: '3 years'
      },
      levels: [
        {
          id: 'sec-1', num: 1, title: 'The Threat Realm', subtitle: 'Threats, Attacks & Vulnerabilities',
          lesson: {
            intro: 'Security+ starts with understanding the enemy. You must know every attack type, how it works, and how to defend against it. This domain is 22% of the exam.',
            sections: [
              {
                heading: 'Malware Types (Must Memorize)',
                bullets: [
                  'Virus — Attaches to legitimate files. Spreads when files are shared.',
                  'Worm — Self-replicating malware. Spreads without human interaction across networks.',
                  'Trojan — Disguised as legitimate software. Opens backdoor for attacker.',
                  'Ransomware — Encrypts your files and demands payment for decryption key.',
                  'Spyware — Silently monitors and collects user data/keystrokes.',
                  'Rootkit — Hides malware deep in OS. Extremely hard to detect/remove.',
                  'Botnet — Army of infected computers controlled remotely by attacker.',
                  'Keylogger — Records every keystroke to steal passwords and sensitive data.'
                ]
              },
              {
                heading: 'Attack Types',
                bullets: [
                  'Phishing — Fake emails impersonating trusted entities to steal credentials',
                  'Spear Phishing — Targeted phishing at specific person using personal info',
                  'Whaling — Spear phishing targeting executives (CEO, CFO)',
                  'Vishing — Voice phishing over phone calls',
                  'Smishing — SMS phishing via text messages',
                  'SQL Injection — Inserting SQL code into input fields to attack databases',
                  'XSS (Cross-Site Scripting) — Injecting scripts into websites viewed by other users',
                  'DDoS — Overwhelming a server with traffic from many sources',
                  'MITM (Man-in-the-Middle) — Intercepting communication between two parties',
                  'Password Spraying — Trying common passwords against many accounts',
                  'Brute Force — Trying every possible password combination'
                ]
              },
              {
                heading: 'Social Engineering Techniques',
                bullets: [
                  'Pretexting — Creating a fabricated scenario to extract information',
                  'Baiting — Leaving infected USB drives for victims to find and plug in',
                  'Tailgating / Piggybacking — Following authorized person through secure door',
                  'Watering Hole — Compromising websites the target frequently visits',
                  'Shoulder Surfing — Watching someone type passwords in public'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 50,
            bossName: 'PHISHING PHANTOM', bossEmoji: '👻',
            text: 'An attacker sends a highly personalized email to the CFO of a company, referencing their recent business trip and requesting an urgent wire transfer. What type of attack is this?',
            options: ['Phishing', 'Whaling', 'Vishing', 'Smishing'],
            correct: 1,
            explanation: 'Whaling is a spear phishing attack specifically targeting high-level executives (C-suite). The personalized detail and executive target are the key indicators. Regular phishing is mass/generic; spear phishing is targeted at any person; whaling specifically targets executives.'
          }
        },
        {
          id: 'sec-2', num: 2, title: 'The Crypto Cavern', subtitle: 'Cryptography & PKI',
          lesson: {
            intro: 'Cryptography protects data confidentiality and integrity. It\'s 15% of the exam and appears in many scenario questions. Understand concepts, not just definitions.',
            sections: [
              {
                heading: 'Encryption Types',
                bullets: [
                  'Symmetric Encryption — Same key to encrypt AND decrypt. Fast. Key sharing problem. (AES, DES, 3DES)',
                  'Asymmetric Encryption — Public key encrypts, private key decrypts. Slower but solves key sharing. (RSA, ECC)',
                  'Hashing — One-way function. Cannot be reversed. Used to verify integrity. (SHA-256, MD5)',
                  'Salting — Adding random data before hashing passwords to prevent rainbow table attacks'
                ]
              },
              {
                heading: 'Common Algorithms (Know the Types)',
                bullets: [
                  'AES (Advanced Encryption Standard) — Symmetric. Industry standard. 128/256-bit keys.',
                  'RSA — Asymmetric. Uses large prime numbers. Common for key exchange.',
                  'ECC (Elliptic Curve Cryptography) — Asymmetric. Smaller keys, same strength as RSA. Used in mobile.',
                  'SHA-256 — Hashing. Output is always 256 bits. Used in certificates, file verification.',
                  'MD5 — Hashing. Broken/weak. Should NOT be used for security (still used for checksums).',
                  'Diffie-Hellman — Key exchange protocol. Allows two parties to share a key over insecure channel.'
                ]
              },
              {
                heading: 'PKI — Public Key Infrastructure',
                bullets: [
                  'Digital Certificate — Binds a public key to an identity. Signed by a CA.',
                  'CA (Certificate Authority) — Trusted entity that issues/signs digital certificates (e.g., DigiCert)',
                  'CSR (Certificate Signing Request) — Request sent to CA to get a certificate',
                  'CRL (Certificate Revocation List) — List of revoked certificates',
                  'OCSP — Online check if a certificate is still valid (faster than CRL)',
                  'SSL/TLS — Protocols using PKI for encrypted web communication (HTTPS)'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'CRYPTO KING', bossEmoji: '🔑',
            text: 'A website uses HTTPS. When your browser connects, it uses the website\'s public key to establish a secure session. What type of encryption is used for the initial key exchange, and what is used for the bulk data transfer?',
            options: [
              'Symmetric for key exchange, Asymmetric for data',
              'Asymmetric for key exchange, Symmetric for data',
              'Hashing for key exchange, Asymmetric for data',
              'Symmetric for both key exchange and data'
            ],
            correct: 1,
            explanation: 'TLS uses Asymmetric (RSA/ECC) to securely exchange a session key, then switches to Symmetric (AES) for bulk data transfer because symmetric is much faster. This hybrid approach gives you security AND performance.'
          }
        },
        {
          id: 'sec-3', num: 3, title: 'The Identity Fortress', subtitle: 'Identity & Access Management',
          lesson: {
            intro: 'IAM in security means controlling WHO can access WHAT and HOW. This is 16% of the exam and directly applies to real-world security architecture.',
            sections: [
              {
                heading: 'Authentication Factors (MFA)',
                bullets: [
                  'Something you KNOW — Password, PIN, security question',
                  'Something you HAVE — Smart card, token, authenticator app, SMS code',
                  'Something you ARE — Biometrics: fingerprint, face, retina, voice',
                  'Somewhere you ARE — Geolocation, GPS',
                  'MFA — Using 2 or more different factor types together (password + fingerprint = MFA)'
                ]
              },
              {
                heading: 'Access Control Models',
                bullets: [
                  'DAC (Discretionary Access Control) — Resource owner controls who gets access. (Most flexible, least secure)',
                  'MAC (Mandatory Access Control) — System enforces rules based on labels/classification. (Military use)',
                  'RBAC (Role-Based Access Control) — Access based on job role. Most common in enterprise.',
                  'ABAC (Attribute-Based Access Control) — Access based on attributes (time, location, device)',
                  'Rule-Based AC — Access based on rules set by admin (e.g., firewall rules)'
                ]
              },
              {
                heading: 'Authentication Protocols',
                bullets: [
                  'LDAP — Directory services protocol. Used to look up users in Active Directory.',
                  'Kerberos — Network authentication using tickets. Default in Windows AD.',
                  'SAML — XML-based SSO standard. Used for federating identity across organizations.',
                  'OAuth 2.0 — Authorization framework. "Login with Google" uses OAuth.',
                  'OpenID Connect — Authentication layer on top of OAuth 2.0.',
                  'RADIUS — Centralized authentication for network access (Wi-Fi, VPN).'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 75,
            bossName: 'IDENTITY HYDRA', bossEmoji: '🐍',
            text: 'A hospital assigns access to patient records based on job titles: Doctors get full access, Nurses get limited access, Admins get no access. Which access control model is this?',
            options: [
              'DAC — Discretionary Access Control',
              'MAC — Mandatory Access Control',
              'RBAC — Role-Based Access Control',
              'ABAC — Attribute-Based Access Control'
            ],
            correct: 2,
            explanation: 'RBAC assigns permissions based on job ROLES (Doctor, Nurse, Admin). This is the most widely used model in enterprise environments. If access was based on data classification labels, it would be MAC. If owners controlled access, it would be DAC.'
          }
        },
        {
          id: 'sec-4', num: 4, title: 'The Network Bastion', subtitle: 'Network Security & Architecture',
          lesson: {
            intro: 'Network security is about building layers of defense. Know these tools and protocols — they\'re in every real-world security setup.',
            sections: [
              {
                heading: 'Network Security Devices',
                bullets: [
                  'Firewall — Filters traffic based on rules (port, IP, protocol). Stateful vs Stateless.',
                  'IDS (Intrusion Detection System) — DETECTS and ALERTS on attacks. Passive.',
                  'IPS (Intrusion Prevention System) — DETECTS and BLOCKS attacks. Active.',
                  'WAF (Web Application Firewall) — Filters HTTP traffic. Blocks SQLi, XSS, etc.',
                  'Proxy Server — Intercepts client requests. Can filter, cache, and anonymize.',
                  'VPN (Virtual Private Network) — Encrypted tunnel over public internet.',
                  'NAC (Network Access Control) — Controls which devices can join the network.'
                ]
              },
              {
                heading: 'Network Segmentation',
                bullets: [
                  'DMZ (Demilitarized Zone) — Semi-trusted zone between internet and internal network. Public-facing servers go here.',
                  'VLAN (Virtual LAN) — Logical network segmentation within a physical network.',
                  'Zero Trust — "Never trust, always verify." Assumes breach. Verify every request.',
                  'Air Gap — Physical isolation. Completely disconnected from public networks.'
                ]
              },
              {
                heading: 'Secure Protocols (Know Port Numbers!)',
                bullets: [
                  'HTTPS — HTTP over TLS. Port 443. (HTTP = Port 80, unencrypted)',
                  'SSH — Secure Shell. Remote access. Port 22. (Telnet = Port 23, insecure)',
                  'SFTP — Secure FTP over SSH. Port 22. (FTP = Port 21, insecure)',
                  'SMTPS — Secure email sending. Port 465/587. (SMTP = Port 25)',
                  'LDAPS — Secure LDAP over SSL. Port 636. (LDAP = Port 389)',
                  'DNSSEC — DNS with digital signatures. Prevents DNS poisoning.'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 100,
            bossName: 'NETWORK WARLORD', bossEmoji: '⚔️',
            text: 'A security team notices an intrusion in progress but their security device only sent an alert — it did NOT block the attack. What type of device is this?',
            options: [
              'IPS — Intrusion Prevention System',
              'WAF — Web Application Firewall',
              'IDS — Intrusion Detection System',
              'Stateful Firewall'
            ],
            correct: 2,
            explanation: 'An IDS (Intrusion Detection System) only DETECTS and ALERTS — it is passive and does NOT block. An IPS (Intrusion Prevention System) is active and BLOCKS attacks automatically. The exam frequently tests this distinction.'
          }
        },
        {
          id: 'sec-5', num: 5, title: 'THE SECURITY TITAN', subtitle: 'Incident Response & Governance',
          lesson: {
            intro: 'The final domain covers what to do WHEN something goes wrong, and how organizations manage security policy. 18% of the exam.',
            sections: [
              {
                heading: 'Incident Response Process (In Order)',
                bullets: [
                  '1. Preparation — Policies, tools, training before incidents occur',
                  '2. Identification — Detect and confirm a security incident has occurred',
                  '3. Containment — Stop the spread. Isolate affected systems.',
                  '4. Eradication — Remove the root cause (malware, unauthorized accounts)',
                  '5. Recovery — Restore systems to normal operation',
                  '6. Lessons Learned — Document what happened and how to prevent recurrence'
                ]
              },
              {
                heading: 'Forensics Concepts',
                bullets: [
                  'Chain of Custody — Document who handled evidence and when',
                  'Order of Volatility — Collect most volatile evidence first (CPU cache → RAM → HDD → Cloud)',
                  'Legal Hold — Preserve all relevant data when litigation is anticipated',
                  'Write Blocker — Hardware/software preventing changes to evidence drives'
                ]
              },
              {
                heading: 'Governance, Risk & Compliance (GRC)',
                bullets: [
                  'Risk Assessment — Identify assets, threats, vulnerabilities, and likelihood of harm',
                  'Risk = Threat × Vulnerability × Asset Value',
                  'Risk Responses: Accept / Transfer (insurance) / Avoid / Mitigate',
                  'BCP (Business Continuity Plan) — Keep business running during a disaster',
                  'DRP (Disaster Recovery Plan) — Technical plan to restore IT systems after disaster',
                  'SLA (Service Level Agreement) — Agreed uptime/performance guarantees',
                  'Data Classification: Public → Internal → Confidential → Secret/Top Secret'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'BOSS', xp: 200,
            bossName: 'THE SECURITY TITAN', bossEmoji: '🛡️',
            text: 'During a ransomware incident, the security team disconnects infected computers from the network to prevent spread. Which phase of the Incident Response process is this?',
            options: [
              'Identification — Detecting the incident',
              'Eradication — Removing the malware',
              'Containment — Stopping the spread',
              'Recovery — Restoring systems'
            ],
            correct: 2,
            explanation: 'Containment is about STOPPING THE SPREAD — isolating infected systems, blocking network access, preventing further damage. Eradication comes AFTER containment (removing malware). Recovery comes after eradication (restoring systems). Know this order cold for the exam.'
          }
        }
      ],
      projects: [
        {
          id: 'sec-proj-1',
          title: 'Security+ Domain Flashcard Deck',
          desc: 'Build a comprehensive Anki flashcard deck covering all 5 Security+ domains with 200+ cards including attack types, protocols, and acronyms.',
          tech: ['Anki', 'Notion / Google Docs', 'Practice Tests'],
          unlockLevel: 2,
          steps: [
            'Install Anki (free flashcard software) at apps.ankiweb.net',
            'Create deck: "CompTIA Security+ SY0-701"',
            'Add 40+ cards: all malware types with definitions',
            'Add 30+ cards: all attack types (phishing, SQLi, MITM, etc.)',
            'Add 20+ cards: cryptography algorithms with key details',
            'Add 20+ cards: network security devices (IDS vs IPS, firewall types)',
            'Add 15+ cards: authentication factors and protocols',
            'Add 15+ cards: incident response steps in order',
            'Add port numbers cheat sheet as cards (22, 80, 443, 389, etc.)',
            'Study 30 minutes daily using Anki spaced repetition',
            'Take free practice test at examcompass.com — score 80%+ before real exam'
          ]
        },
        {
          id: 'sec-proj-2',
          title: 'Home Network Security Audit',
          desc: 'Apply Security+ knowledge to audit your own home network, identify vulnerabilities, and document findings like a professional security report.',
          tech: ['Wireshark', 'nmap', 'Windows Security Center', 'Documentation'],
          unlockLevel: 4,
          steps: [
            'Download and install Wireshark (wireshark.org) — free network analyzer',
            'Capture your home network traffic for 5 minutes',
            'Identify unencrypted protocols in the capture (HTTP vs HTTPS)',
            'Download nmap (nmap.org) and scan your local network',
            'Document all devices found on your network',
            'Check router: change default password, enable WPA3/WPA2, disable WPS',
            'Audit your passwords: identify any reused or weak passwords',
            'Enable 2FA on your top 5 most important accounts',
            'Check for software updates on all devices',
            'Write a 1-page "Security Audit Report" with findings and recommendations'
          ]
        }
      ]
    },

    // =============================================
    // CERTIFICATION WORLD 3: GOOGLE ANALYTICS
    // =============================================
    {
      id: 'ga4',
      name: 'GOOGLE ANALYTICS 4',
      emoji: '📈',
      color: 'dataviz',
      tag: 'Certification · GA4 · Digital Marketing',
      desc: 'Master Google Analytics 4 for the Google Analytics Certification. Learn data collection, reports, conversions, audiences and data-driven marketing decisions.',
      xpToUnlock: 0,
      skills: ['Data Collection', 'Reports', 'Conversions', 'Audiences', 'Attribution'],
      certInfo: {
        name: 'Google Analytics Certification',
        code: 'GA4',
        questions: '50',
        duration: '75 minutes',
        passingScore: '80%',
        cost: 'FREE',
        validity: '1 year'
      },
      levels: [
        {
          id: 'ga-1', num: 1, title: 'The Data Collection Gate', subtitle: 'GA4 Fundamentals & Setup',
          lesson: {
            intro: 'Google Analytics 4 is a complete rebuild of Universal Analytics. It\'s event-based, privacy-first, and uses machine learning. The free certification is recognized by every digital marketing employer.',
            sections: [
              {
                heading: 'GA4 vs Universal Analytics (UA)',
                bullets: [
                  'GA4 is EVENT-based. Every interaction (page view, click, scroll) is an event.',
                  'UA was SESSION-based. GA4 tracks the complete user journey across devices.',
                  'GA4 uses a single property for both web AND app data.',
                  'GA4 has built-in machine learning for predictive metrics.',
                  'Universal Analytics was sunset in July 2023 — GA4 is the standard now.'
                ]
              },
              {
                heading: 'GA4 Data Model',
                bullets: [
                  'Event — Any interaction: page_view, scroll, click, purchase, custom_event',
                  'Parameter — Additional info about an event: page_title, item_name, value',
                  'User Property — Attribute about the user: language, subscription_status',
                  'Session — Group of events within a time period (30-min timeout by default)',
                  'Engagement — Session with 10+ seconds active, 2+ page views, or 1+ conversion'
                ]
              },
              {
                heading: 'Automatic Events in GA4 (Collected Without Code)',
                bullets: [
                  'page_view — Every page load',
                  'scroll — User scrolls to 90% of page',
                  'click — Outbound link clicks',
                  'video_start / video_progress / video_complete — YouTube embeds',
                  'file_download — PDF, zip, doc downloads',
                  'session_start — Beginning of each session',
                  'first_visit — New user visits your site'
                ]
              },
              {
                heading: 'GA4 Account Structure',
                bullets: [
                  'Account — Top level (e.g., Your Company)',
                  'Property — A website or app being measured (contains all data)',
                  'Data Stream — Source of data flowing into property (Web, iOS App, Android App)',
                  'Measurement ID — Unique ID (G-XXXXXXXXXX) added to website for tracking'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'EASY', xp: 45,
            bossName: 'DATA DEMON', bossEmoji: '👹',
            text: 'What is the fundamental difference between Google Analytics 4 and Universal Analytics in terms of data model?',
            options: [
              'GA4 uses a session-based model; UA uses an event-based model',
              'GA4 uses an event-based model; UA used a session-based model',
              'GA4 only tracks mobile apps; UA only tracks websites',
              'GA4 requires paid subscription; UA was free'
            ],
            correct: 1,
            explanation: 'GA4 is event-based — EVERYTHING is an event (page views, clicks, purchases). UA was session-based, grouping interactions into sessions. This fundamental shift allows GA4 to track cross-device journeys much more accurately.'
          }
        },
        {
          id: 'ga-2', num: 2, title: 'The Reports Kingdom', subtitle: 'Standard Reports & Exploration',
          lesson: {
            intro: 'GA4 reports are organized differently from UA. Knowing where to find data and what each report shows is a major part of the certification exam.',
            sections: [
              {
                heading: 'Standard Reports Overview',
                bullets: [
                  'Realtime — See who is on your site RIGHT NOW. Events in last 30 minutes.',
                  'Acquisition — Where do users come from? (Organic, Paid, Social, Direct, Referral)',
                  'Engagement — What do users do? (Pages, events, conversion events)',
                  'Monetization — Revenue from ecommerce, subscriptions, ad revenue',
                  'Retention — How many users come back? User retention curves.',
                  'Demographics — Age, gender, interests, language, location',
                  'Tech — Browser, device, OS, screen size breakdown'
                ]
              },
              {
                heading: 'Traffic Source Channels',
                bullets: [
                  'Organic Search — Users from Google/Bing search (not paid)',
                  'Paid Search — Users from Google Ads (CPC campaigns)',
                  'Organic Social — Users from Facebook, Instagram, LinkedIn (not paid)',
                  'Paid Social — Users from social media ads',
                  'Direct — Users who typed URL directly or bookmarked',
                  'Referral — Users from links on other websites',
                  'Email — Users from email campaigns',
                  'Organic Video — YouTube and other video platforms'
                ]
              },
              {
                heading: 'Explore Reports (Advanced Analysis)',
                bullets: [
                  'Free Form — Drag-and-drop dimensions and metrics into pivot tables',
                  'Funnel Exploration — Visualize steps in a conversion process and drop-off rates',
                  'Path Exploration — See the actual sequence of pages/events users follow',
                  'Segment Overlap — Compare up to 3 user segments visually',
                  'User Lifetime — Analyze cumulative revenue and behavior over user lifetime',
                  'Cohort Exploration — Group users by acquisition date and track behavior'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 65,
            bossName: 'REPORT REAPER', bossEmoji: '📊',
            text: 'A marketing manager wants to understand at which step most users abandon the checkout process (add to cart → begin checkout → payment → confirmation). Which GA4 report type is BEST for this?',
            options: [
              'Realtime Report',
              'Acquisition Overview',
              'Funnel Exploration',
              'Cohort Exploration'
            ],
            correct: 2,
            explanation: 'Funnel Exploration is specifically designed to visualize multi-step conversion processes and show drop-off rates at each step. You define the steps (add_to_cart → begin_checkout → purchase) and GA4 shows how many users complete or abandon each step.'
          }
        },
        {
          id: 'ga-3', num: 3, title: 'The Conversion Castle', subtitle: 'Conversions, Goals & Events',
          lesson: {
            intro: 'Conversions are the actions that matter most to your business. Setting them up correctly makes the difference between useful and useless analytics.',
            sections: [
              {
                heading: 'Events & Conversions in GA4',
                bullets: [
                  'Automatic Events — Collected automatically (page_view, scroll, click)',
                  'Enhanced Measurement Events — Toggle on in GA4 (file_download, video, site search)',
                  'Recommended Events — Follow GA4 naming conventions (purchase, sign_up, login)',
                  'Custom Events — You define via Google Tag Manager or gtag.js code',
                  'Conversion Event — Any event you mark as a conversion (was called "Goal" in UA)'
                ]
              },
              {
                heading: 'Key Ecommerce Events',
                bullets: [
                  'view_item — User views a product detail page',
                  'add_to_cart — User adds item to cart',
                  'begin_checkout — User starts checkout',
                  'add_payment_info — User enters payment details',
                  'purchase — Transaction completed (MOST IMPORTANT: include revenue, items)',
                  'refund — Purchase was refunded'
                ]
              },
              {
                heading: 'Key Metrics to Know',
                bullets: [
                  'Sessions — Total number of sessions in the date range',
                  'Users — Unique users (using cookies + Google Signals)',
                  'Engaged Sessions — Sessions with 10+ sec active, 2+ pageviews, or 1+ conversion',
                  'Engagement Rate — % of sessions that were engaged (better than bounce rate)',
                  'Average Engagement Time — Average active time per session',
                  'Conversions — Total number of conversion events',
                  'Conversion Rate — Conversions / Sessions × 100%',
                  'Revenue — Total purchase revenue'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'MEDIUM', xp: 70,
            bossName: 'CONVERSION COLOSSUS', bossEmoji: '🎯',
            text: 'A website has 10,000 sessions in a month. 4,000 sessions lasted more than 10 seconds. 500 users made a purchase. What is the Engagement Rate?',
            options: ['5%', '40%', '4%', '50%'],
            correct: 1,
            explanation: 'Engagement Rate = Engaged Sessions / Total Sessions = 4,000 / 10,000 = 40%. Engaged sessions are those with 10+ seconds active time, 2+ page views, OR 1+ conversion event. This metric replaced "Bounce Rate" in GA4.'
          }
        },
        {
          id: 'ga-4', num: 4, title: 'The Audience Arena', subtitle: 'Audiences, Segments & Attribution',
          lesson: {
            intro: 'Audiences let you group users for remarketing and analysis. Attribution tells you which channels deserve credit for conversions. Both are heavily tested.',
            sections: [
              {
                heading: 'Audiences in GA4',
                bullets: [
                  'Audiences — Groups of users defined by behavior, demographics, or events',
                  'Predictive Audiences — ML-powered: "Likely 7-day purchasers", "Likely churners"',
                  'Audiences can be exported to Google Ads for remarketing campaigns',
                  'Example audiences: "Users who added to cart but didn\'t purchase"',
                  'Example: "High-value customers who spent > $500 in last 30 days"',
                  'Audience triggers — Create events when users enter/exit an audience'
                ]
              },
              {
                heading: 'Attribution Models',
                bullets: [
                  'Last Click — 100% credit to last touchpoint before conversion (default in most tools)',
                  'First Click — 100% credit to the first touchpoint that introduced the user',
                  'Linear — Equal credit distributed across all touchpoints in the journey',
                  'Time Decay — More credit to touchpoints closer in time to the conversion',
                  'Position-Based — 40% first, 40% last, 20% split across middle touchpoints',
                  'Data-Driven (GA4 Default) — ML assigns credit based on actual conversion patterns'
                ]
              },
              {
                heading: 'User Journey Example',
                bullets: [
                  'Day 1: User clicks Google Organic result (first touch)',
                  'Day 3: User sees Facebook Ad and clicks (middle touch)',
                  'Day 5: User clicks Google Ads and converts (last touch)',
                  'Last Click model: 100% credit to Google Ads',
                  'First Click model: 100% credit to Organic Search',
                  'Data-Driven: ML decides based on which paths most often lead to conversion'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'HARD', xp: 95,
            bossName: 'ATTRIBUTION TITAN', bossEmoji: '🏆',
            text: 'A company runs campaigns on Email, Social Media, and Paid Search. Using Last Click attribution, Paid Search gets 90% of conversion credit. The CMO thinks Email is being undervalued. Which attribution model would BEST show the full value of the email channel?',
            options: [
              'Last Click — it already shows the most accurate data',
              'First Click — if email introduces users, it gets full credit',
              'Data-Driven — ML will fairly distribute credit based on actual impact',
              'Time Decay — recent touchpoints get more credit'
            ],
            correct: 2,
            explanation: 'Data-Driven Attribution uses machine learning to analyze all conversion paths and assign credit based on which touchpoints genuinely influence conversions. It\'s the most accurate model and GA4\'s default. First Click would only help if email is always the first touch, which may not be true.'
          }
        },
        {
          id: 'ga-5', num: 5, title: 'THE GA4 DRAGON', subtitle: 'Advanced Features & Certification Prep',
          lesson: {
            intro: 'Final stretch! These advanced features and exam strategies will get you across the 80% passing threshold on the Google Analytics Certification.',
            sections: [
              {
                heading: 'Google Signals & User ID',
                bullets: [
                  'Google Signals — Enables cross-device tracking for signed-in Google users',
                  'User ID — Assign your own ID when users log in (most accurate cross-device)',
                  'Reporting Identity — How GA4 stitches users across devices: User ID > Google Signals > Device ID',
                  'Blended Identity (default) — Uses all available identity methods together'
                ]
              },
              {
                heading: 'Key Settings to Know for Exam',
                bullets: [
                  'Data Retention — How long GA4 stores user-level data (max 14 months)',
                  'Filters — Exclude internal traffic (your own team\'s visits) from reports',
                  'Google Ads Linking — Connect GA4 to Google Ads for conversion imports',
                  'BigQuery Export — Export raw GA4 data to BigQuery for SQL analysis',
                  'Debug View — Real-time event testing before going live'
                ]
              },
              {
                heading: 'Exam Quick-Reference',
                bullets: [
                  'Engagement Rate replaces Bounce Rate in GA4',
                  'Everything in GA4 is an EVENT (no more goals, pageviews are events)',
                  'Default attribution model = Data-Driven',
                  'Predictive metrics require 1,000+ conversions to activate',
                  'GA4 Certification is FREE at skillshop.google.com',
                  'Passing score = 80%. 50 questions. 75 minutes.',
                  'Certificate valid for 1 year then must re-take'
                ]
              }
            ]
          },
          bossQuestion: {
            type: 'mcq', difficulty: 'BOSS', xp: 200,
            bossName: 'THE GA4 DRAGON', bossEmoji: '🐉',
            text: 'A user visits your site from an organic Google search on their laptop (no purchase). Three days later, they click a retargeting ad on their phone and purchase. In GA4 with Data-Driven Attribution and Google Signals enabled, how is this tracked?',
            options: [
              'As two separate users — GA4 cannot connect laptop and phone sessions',
              'Only the phone session is recorded since that\'s where the purchase happened',
              'As one user journey across devices; Data-Driven model assigns credit to both touchpoints',
              'The organic search gets 100% credit as it was the first touch'
            ],
            correct: 2,
            explanation: 'With Google Signals enabled, GA4 can connect sessions from the same signed-in Google user across devices. Data-Driven Attribution then analyzes the full multi-touch journey and distributes conversion credit to both organic search and the retargeting ad based on their actual influence — this is the power of GA4 over older analytics tools.'
          }
        }
      ],
      projects: [
        {
          id: 'ga-proj-1',
          title: 'GA4 Certification Prep Plan',
          desc: 'Structured 2-week study plan to pass the Google Analytics Certification, including all Skillshop courses and practice quizzes.',
          tech: ['Google Skillshop', 'GA4 Demo Account', 'Google Docs', 'Practice Tests'],
          unlockLevel: 2,
          steps: [
            'Create free Google account and go to skillshop.google.com',
            'Enroll in "Google Analytics Certification" course (free)',
            'Complete Unit 1: Collect and process data in GA4 (1-2 hours)',
            'Complete Unit 2: Explore and analyze data (1-2 hours)',
            'Complete Unit 3: Turn insights into action (1-2 hours)',
            'Access GA4 Demo Account (search "GA4 Demo Account Google")',
            'Explore all 5 report sections in the demo account hands-on',
            'Create 3 custom Explorations (funnel, path, free-form)',
            'Take the Skillshop practice assessment until scoring 80%+',
            'Take the official certification exam — it\'s free to retake if needed'
          ]
        },
        {
          id: 'ga-proj-2',
          title: 'Website Analytics Report',
          desc: 'Connect GA4 to a real website (or demo account), analyze 30 days of data, and produce a professional marketing performance report.',
          tech: ['GA4', 'Google Looker Studio', 'Google Sheets', 'Slides/PDF'],
          unlockLevel: 4,
          steps: [
            'Access GA4 Demo Account or set up GA4 on your own site',
            'Analyze last 30 days: top traffic sources (Acquisition report)',
            'Find top 10 pages by engagement time (Engagement report)',
            'Identify conversion rate by traffic channel',
            'Build a Funnel Exploration for a key user journey',
            'Connect GA4 to Google Looker Studio (free)',
            'Build dashboard: Sessions, Users, Engagement Rate, Top Pages',
            'Add channel performance comparison chart',
            'Write 3 key insights and recommendations based on data',
            'Export as PDF — add to your portfolio/resume'
          ]
        }
      ]
    }
  ]
};
