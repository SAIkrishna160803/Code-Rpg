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
    }
  ]
};
