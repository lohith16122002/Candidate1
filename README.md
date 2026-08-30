# ⚡ AlgoVision — Interactive DSA Visualizer  https://algo123.netlify.app/

> **Learn Data Structures and Algorithms by watching them work.**

AlgoVision is an interactive web-based **Data Structures and Algorithms (DSA) Visualizer** built using **HTML, CSS, and JavaScript**.

Instead of only reading algorithm code, users can visually observe how data changes step-by-step, understand algorithm complexity, control the execution speed, and study the corresponding implementation.

---

## 🚀 Features

### 📦 Arrays

* Array traversal
* Array visualization using bars
* Searching
* Insertion concepts
* Deletion concepts
* Reverse operations
* Custom array input

### 🔗 Linked Lists

* Singly Linked List
* Doubly Linked List
* Circular Linked List
* Node visualization
* Pointer visualization

### 📚 Stack

* Push
* Pop
* Peek
* LIFO visualization

### 🚶 Queue

* Enqueue
* Dequeue
* Circular Queue
* FIFO visualization

### 🌳 Trees

* Binary Tree
* Binary Search Tree
* Inorder Traversal
* Preorder Traversal
* Postorder Traversal
* Tree insertion and searching

### 🕸 Graph Algorithms

* Breadth First Search (BFS)
* Depth First Search (DFS)
* Dijkstra's Shortest Path Algorithm
* Graph node visualization
* Traversal animation

### 🔢 Sorting Algorithms

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort

### 🔍 Searching Algorithms

* Linear Search
* Binary Search

### 🧮 Dynamic Programming

* Fibonacci
* 0/1 Knapsack
* Longest Common Subsequence (LCS)
* DP table visualization

---

# 🎮 Visualization Controls

AlgoVision provides controls to understand algorithms step-by-step.

| Control  | Function                               |
| -------- | -------------------------------------- |
| ▶ Play   | Automatically execute the algorithm    |
| ⏸ Pause  | Pause execution                        |
| ⏭ Step   | Execute one step                       |
| ↻ Reset  | Restart visualization                  |
| 🎚 Speed | Change animation speed                 |
| Generate | Create visualization from custom input |

---

# 🧠 Complexity Analysis

Every algorithm provides its time and space complexity.

Example:

### Bubble Sort

```text
Best Case:     O(n)
Average Case:  O(n²)
Worst Case:    O(n²)
Space:         O(1)
```

### Binary Search

```text
Best Case:     O(1)
Average Case:  O(log n)
Worst Case:    O(log n)
Space:         O(1)
```

### BFS

```text
Time:  O(V + E)
Space: O(V)
```

---

# 🖥️ Interface

The application contains:

```text
┌─────────────────────────────────────────────────────────┐
│                     ⚡ AlgoVision                        │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│ DSA Library  │              Visualization                │
│              │                                          │
│ Arrays       │        ███                               │
│ Linked List  │    ███ ████       ███                   │
│ Stack        │  ████ █████      █████                  │
│ Queue        │                                          │
│ Trees        │       ▶ Play  ⏭ Step  ↻ Reset           │
│ Graphs       │                                          │
│ Sorting      ├──────────────────────────────────────────┤
│ Searching    │ Current Operation                        │
│ DP           │ Comparing elements...                    │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

---

# 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### JavaScript Concepts

* Arrays
* Objects
* Classes
* Functions
* Recursion
* DOM Manipulation
* Event Handling
* Set
* Queue
* Stack
* Sorting algorithms
* Searching algorithms
* Graph traversal
* Dynamic Programming

### Visualization

* HTML DOM
* CSS animations
* JavaScript state management
* SVG planned for advanced tree/graph visualization

---

# 📁 Project Structure

Current simple version:

```text
algovision/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

Planned scalable structure:

```text
algovision/
│
├── index.html
├── css/
│   ├── style.css
│   ├── sidebar.css
│   ├── visualizer.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   │
│   ├── arrays/
│   │   └── array.js
│   │
│   ├── linkedlist/
│   │   ├── singly.js
│   │   ├── doubly.js
│   │   └── circular.js
│   │
│   ├── stack/
│   │   └── stack.js
│   │
│   ├── queue/
│   │   ├── queue.js
│   │   └── circularQueue.js
│   │
│   ├── tree/
│   │   ├── binaryTree.js
│   │   ├── bst.js
│   │   └── avl.js
│   │
│   ├── graph/
│   │   ├── graph.js
│   │   ├── bfs.js
│   │   ├── dfs.js
│   │   └── dijkstra.js
│   │
│   ├── sorting/
│   │   ├── bubble.js
│   │   ├── selection.js
│   │   ├── insertion.js
│   │   ├── merge.js
│   │   ├── quick.js
│   │   └── heap.js
│   │
│   ├── searching/
│   │   ├── linear.js
│   │   └── binary.js
│   │
│   └── dp/
│       ├── fibonacci.js
│       ├── knapsack.js
│       └── lcs.js
│
├── assets/
│
└── README.md
```

---

# ⚙️ Installation

No framework or backend is required.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/algovision.git
```

### 2. Navigate to the project

```bash
cd algovision
```

### 3. Open the project

Simply open:

```text
index.html
```

in your browser.

Alternatively, use **VS Code Live Server**.

---

# ▶️ How to Use

### Step 1

Open AlgoVision.

### Step 2

Select an algorithm from the sidebar.

Example:

```text
Sorting
   ↓
Bubble Sort
```

### Step 3

Enter custom input:

```text
40,10,30,20,50,15
```

### Step 4

Click:

```text
Generate
```

### Step 5

Use:

```text
▶ Play
```

to start the animation.

You can also use:

```text
⏭ Step
```

to understand each individual operation.

---

# 🎯 Example

For:

```text
40,10,30,20
```

Bubble Sort visualizes:

```text
40  10  30  20

 ↓   ↓

10  40  30  20

    ↓   ↓

10  30  40  20

        ↓   ↓

10  30  20  40

...

10  20  30  40
```

Each comparison and swap is represented visually.

---

# 💡 Why AlgoVision?

Learning DSA only from code can be difficult.

For example:

```javascript
if (arr[j] > arr[j + 1]) {
    [arr[j], arr[j + 1]] =
    [arr[j + 1], arr[j]];
}
```

AlgoVision allows the learner to **see exactly what this code is doing**.

Instead of memorizing:

```text
Bubble Sort = O(n²)
```

the user can visually understand why repeated comparisons lead to the complexity.

---

# 🔮 Future Improvements

The project is designed to grow into a complete DSA learning platform.

### Phase 1 — Core Visualizer

* [x] Arrays
* [x] Sorting
* [x] Searching
* [x] Stack
* [x] Queue
* [x] Linked Lists
* [x] Basic Tree visualization
* [x] Basic Graph traversal
* [x] Fibonacci DP

### Phase 2 — Advanced Visualization

* [ ] Proper BST visualization
* [ ] AVL Tree
* [ ] Heap visualization
* [ ] Trie
* [ ] Hash Table
* [ ] Proper graph editor
* [ ] SVG-based graph visualization
* [ ] Dijkstra animation
* [ ] Floyd-Warshall
* [ ] Bellman-Ford
* [ ] Kruskal
* [ ] Prim's Algorithm

### Phase 3 — Learning Platform

* [ ] Algorithm explanations
* [ ] Code highlighting
* [ ] Step-by-step explanation
* [ ] Interactive quizzes
* [ ] "Predict the Next Step"
* [ ] Difficulty levels
* [ ] Beginner / Intermediate / Advanced modes
* [ ] Progress tracking
* [ ] Algorithm comparison

### Phase 4 — User Features

* [ ] User accounts
* [ ] Saved algorithms
* [ ] Learning history
* [ ] Progress dashboard
* [ ] Achievements
* [ ] Streak system
* [ ] Leaderboard

---

# 🏆 Unique Feature Idea

### Predict the Next Step

Instead of only watching the animation, the user will be asked:

```text
Current Array:

20  40  10  30

Algorithm: Bubble Sort

What happens next?

○ 40 and 10 swap
○ 20 and 40 swap
○ 10 and 30 swap
○ Nothing
```

The user selects an answer.

AlgoVision then shows:

```text
✅ Correct!

40 > 10

Therefore:

20  10  40  30
```

This turns AlgoVision from a simple visualizer into an **interactive DSA learning platform**.

---

# 📊 Algorithm Coverage

| Category    | Algorithms                                       |
| ----------- | ------------------------------------------------ |
| Arrays      | Operations, Traversal, Search                    |
| Linked List | Singly, Doubly, Circular                         |
| Stack       | Push, Pop, Peek                                  |
| Queue       | Queue, Circular Queue                            |
| Trees       | Binary Tree, BST, Traversals                     |
| Graphs      | BFS, DFS, Dijkstra                               |
| Sorting     | Bubble, Selection, Insertion, Merge, Quick, Heap |
| Searching   | Linear, Binary                                   |
| DP          | Fibonacci, Knapsack, LCS                         |

---

# 🌟 Project Highlights

* 🎨 Interactive visualization
* ⚡ Pure HTML/CSS/JavaScript
* 🎮 Step-by-step execution
* ⏯ Play/Pause controls
* 🎚 Adjustable animation speed
* 📊 Complexity analysis
* 🧠 Algorithm code display
* 📱 Responsive design
* 🔢 Custom user input
* 🎯 Designed for DSA learners

---

# 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/new-algorithm
```

Add your algorithm and visualization, then create a pull request.

---

# 📜 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

**Lohith Kumar R**

Computer Science Engineering

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

> **Understand the algorithm. Visualize the process. Master DSA.**

**AlgoVision ⚡**
