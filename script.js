// ============================================================
// ALGOVISION
// COMPLETE DSA VISUALIZER ENGINE
// ============================================================


// ------------------------------------------------------------
// GLOBAL STATE
// ------------------------------------------------------------

let selectedType = "array";

let originalArray = [
    40, 10, 30, 20, 50, 15
];

let array = [...originalArray];

let steps = [];

let currentStep = 0;

let playing = false;

let timer = null;


// ------------------------------------------------------------
// DOM
// ------------------------------------------------------------

const visualization =
    document.getElementById("visualization");

const title =
    document.getElementById("title");

const description =
    document.getElementById("description");

const input =
    document.getElementById("input");

const valueInput =
    document.getElementById("value");

const operation =
    document.getElementById("operation");

const stepText =
    document.getElementById("step");

const status =
    document.getElementById("status");

const code =
    document.getElementById("code");


// ------------------------------------------------------------
// ALGORITHM INFORMATION
// ------------------------------------------------------------

const info = {

    array: {
        title: "Array Operations",
        description:
            "Visualize array traversal, insertion, deletion and searching.",
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(1)"
    },

    singly: {
        title: "Singly Linked List",
        description:
            "Visualize nodes connected using next pointers.",
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(n)"
    },

    doubly: {
        title: "Doubly Linked List",
        description:
            "Visualize nodes connected using next and previous pointers.",
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(n)"
    },

    circular: {
        title: "Circular Linked List",
        description:
            "Visualize a linked list whose last node points to the first.",
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(n)"
    },

    stack: {
        title: "Stack",
        description:
            "Visualize Last-In-First-Out operations.",
        best: "O(1)",
        average: "O(1)",
        worst: "O(1)",
        space: "O(n)"
    },

    queue: {
        title: "Queue",
        description:
            "Visualize First-In-First-Out operations.",
        best: "O(1)",
        average: "O(1)",
        worst: "O(1)",
        space: "O(n)"
    },

    circularQueue: {
        title: "Circular Queue",
        description:
            "Visualize a queue where the last position connects to the first.",
        best: "O(1)",
        average: "O(1)",
        worst: "O(1)",
        space: "O(n)"
    },

    bst: {
        title: "Binary Search Tree",
        description:
            "Visualize insertion and searching in a BST.",
        best: "O(log n)",
        average: "O(log n)",
        worst: "O(n)",
        space: "O(n)"
    },

    treeTraversal: {
        title: "Tree Traversal",
        description:
            "Visualize inorder, preorder and postorder traversal.",
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(n)"
    },

    bfs: {
        title: "Breadth First Search",
        description:
            "Visit graph nodes level by level.",
        best: "O(V+E)",
        average: "O(V+E)",
        worst: "O(V+E)",
        space: "O(V)"
    },

    dfs: {
        title: "Depth First Search",
        description:
            "Explore a graph deeply before backtracking.",
        best: "O(V+E)",
        average: "O(V+E)",
        worst: "O(V+E)",
        space: "O(V)"
    },

    dijkstra: {
        title: "Dijkstra Algorithm",
        description:
            "Find shortest paths from a source node.",
        best: "O(E log V)",
        average: "O(E log V)",
        worst: "O(E log V)",
        space: "O(V)"
    },

    bubble: {
        title: "Bubble Sort",
        description:
            "Repeatedly compare adjacent elements and swap them.",
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
    },

    selection: {
        title: "Selection Sort",
        description:
            "Find the minimum element and place it in its correct position.",
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
    },

    insertion: {
        title: "Insertion Sort",
        description:
            "Insert every element into its correct position.",
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
        space: "O(1)"
    },

    merge: {
        title: "Merge Sort",
        description:
            "Divide the array and merge sorted portions.",
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(n)"
    },

    quick: {
        title: "Quick Sort",
        description:
            "Partition around a pivot and recursively sort.",
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)",
        space: "O(log n)"
    },

    heap: {
        title: "Heap Sort",
        description:
            "Build a heap and repeatedly extract the maximum.",
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(1)"
    },

    linear: {
        title: "Linear Search",
        description:
            "Check every element until the target is found.",
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(1)"
    },

    binary: {
        title: "Binary Search",
        description:
            "Repeatedly divide a sorted array in half.",
        best: "O(1)",
        average: "O(log n)",
        worst: "O(log n)",
        space: "O(1)"
    },

    fibonacci: {
        title: "Fibonacci DP",
        description:
            "Build Fibonacci numbers using dynamic programming.",
        best: "O(n)",
        average: "O(n)",
        worst: "O(n)",
        space: "O(n)"
    },

    knapsack: {
        title: "0/1 Knapsack",
        description:
            "Optimize value subject to a weight constraint.",
        best: "O(nW)",
        average: "O(nW)",
        worst: "O(nW)",
        space: "O(nW)"
    },

    lcs: {
        title: "Longest Common Subsequence",
        description:
            "Find the longest common subsequence using a DP table.",
        best: "O(mn)",
        average: "O(mn)",
        worst: "O(mn)",
        space: "O(mn)"
    }

};


// ------------------------------------------------------------
// CREATE STEP
// ------------------------------------------------------------

function makeStep(
    data,
    active = [],
    message = "",
    found = []
) {

    return {

        data:
            JSON.parse(
                JSON.stringify(data)
            ),

        active,

        found,

        message

    };

}


// ------------------------------------------------------------
// ARRAY VISUALIZER
// ------------------------------------------------------------

function renderArray(
    data,
    active = [],
    found = []
) {

    visualization.innerHTML = "";

    if (!data.length)
        return;


    const max =
        Math.max(...data);


    data.forEach(
        (number, index) => {

            const container =
                document.createElement("div");

            container.className =
                "bar-container";


            const value =
                document.createElement("div");

            value.className =
                "value";

            value.textContent =
                number;


            const bar =
                document.createElement("div");

            bar.className =
                "bar";


            bar.style.height =
                Math.max(
                    20,
                    number / max * 170
                ) + "px";


            if (
                active.includes(index)
            ) {

                bar.classList.add(
                    "active"
                );

            }


            if (
                found.includes(index)
            ) {

                bar.classList.add(
                    "found"
                );

            }


            const indexElement =
                document.createElement("div");

            indexElement.className =
                "index";

            indexElement.textContent =
                index;


            container.appendChild(value);

            container.appendChild(bar);

            container.appendChild(
                indexElement
            );

            visualization.appendChild(
                container
            );

        }
    );

}


// ------------------------------------------------------------
// LINKED LIST VISUALIZER
// ------------------------------------------------------------

function renderLinkedList(
    data,
    type
) {

    visualization.innerHTML = "";


    const wrapper =
        document.createElement("div");

    wrapper.style.display =
        "flex";

    wrapper.style.alignItems =
        "center";

    wrapper.style.flexWrap =
        "wrap";


    data.forEach(
        (value, index) => {

            const node =
                document.createElement("div");

            node.className =
                "node";


            const box =
                document.createElement("div");

            box.className =
                "node-box";

            box.textContent =
                value;


            node.appendChild(box);


            if (
                index <
                data.length - 1
            ) {

                const arrow =
                    document.createElement(
                        "span"
                    );

                arrow.className =
                    "arrow";

                arrow.textContent =
                    type === "doubly"
                        ? "⇄"
                        : "→";

                node.appendChild(
                    arrow
                );

            }

            else if (
                type === "circular"
            ) {

                const arrow =
                    document.createElement(
                        "span"
                    );

                arrow.className =
                    "arrow";

                arrow.textContent =
                    "↩";

                node.appendChild(
                    arrow
                );

            }


            wrapper.appendChild(node);

        }
    );


    visualization.appendChild(
        wrapper
    );

}


// ------------------------------------------------------------
// STACK
// ------------------------------------------------------------

function renderStack(data) {

    visualization.innerHTML = "";

    const stack =
        document.createElement("div");

    stack.className =
        "stack";


    data.forEach(value => {

        const item =
            document.createElement("div");

        item.className =
            "stack-item";

        item.textContent =
            value;

        stack.appendChild(item);

    });


    visualization.appendChild(
        stack
    );

}


// ------------------------------------------------------------
// TREE
// ------------------------------------------------------------

function renderTree(values) {

    visualization.innerHTML = "";

    const tree =
        document.createElement("div");

    tree.className =
        "tree";


    values.forEach(value => {

        const node =
            document.createElement("div");

        node.className =
            "tree-node";

        node.textContent =
            value;

        tree.appendChild(node);

    });


    visualization.appendChild(tree);

}


// ------------------------------------------------------------
// BUBBLE SORT
// ------------------------------------------------------------

function bubbleSort(arr) {

    const a = [...arr];

    const result = [];


    result.push(
        makeStep(
            a,
            [],
            "Starting Bubble Sort."
        )
    );


    for (
        let i = 0;
        i < a.length - 1;
        i++
    ) {

        for (
            let j = 0;
            j < a.length - i - 1;
            j++
        ) {

            result.push(
                makeStep(
                    a,
                    [j, j + 1],
                    `Comparing ${a[j]} and ${a[j + 1]}.`
                )
            );


            if (
                a[j] > a[j + 1]
            ) {

                [
                    a[j],
                    a[j + 1]
                ] =
                [
                    a[j + 1],
                    a[j]
                ];


                result.push(
                    makeStep(
                        a,
                        [j, j + 1],
                        "Swapped elements."
                    )
                );

            }

        }

    }


    result.push(
        makeStep(
            a,
            [],
            "Bubble Sort completed."
        )
    );


    return result;
}


// ------------------------------------------------------------
// SELECTION SORT
// ------------------------------------------------------------

function selectionSort(arr) {

    const a = [...arr];

    const result = [];


    for (
        let i = 0;
        i < a.length - 1;
        i++
    ) {

        let min = i;


        for (
            let j = i + 1;
            j < a.length;
            j++
        ) {

            result.push(
                makeStep(
                    a,
                    [min, j],
                    `Comparing ${a[min]} and ${a[j]}.`
                )
            );


            if (
                a[j] < a[min]
            ) {

                min = j;

            }

        }


        [
            a[i],
            a[min]
        ] =
        [
            a[min],
            a[i]
        ];


        result.push(
            makeStep(
                a,
                [i, min],
                `Placed ${a[i]} in correct position.`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// INSERTION SORT
// ------------------------------------------------------------

function insertionSort(arr) {

    const a = [...arr];

    const result = [];


    for (
        let i = 1;
        i < a.length;
        i++
    ) {

        let key =
            a[i];

        let j =
            i - 1;


        while (
            j >= 0 &&
            a[j] > key
        ) {

            result.push(
                makeStep(
                    a,
                    [j, j + 1],
                    `Moving ${a[j]} right.`
                )
            );


            a[j + 1] =
                a[j];

            j--;

        }


        a[j + 1] =
            key;


        result.push(
            makeStep(
                a,
                [j + 1],
                `Inserted ${key}.`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// MERGE SORT
// ------------------------------------------------------------

function mergeSort(arr) {

    const result = [];

    const a = [...arr];


    function merge(
        left,
        right
    ) {

        const merged = [];

        let i = 0;

        let j = 0;


        while (
            i < left.length &&
            j < right.length
        ) {

            if (
                left[i] <
                right[j]
            ) {

                merged.push(
                    left[i++]
                );

            }

            else {

                merged.push(
                    right[j++]
                );

            }

        }


        return merged
            .concat(
                left.slice(i)
            )
            .concat(
                right.slice(j)
            );

    }


    function divide(a) {

        if (a.length <= 1)
            return a;


        const mid =
            Math.floor(
                a.length / 2
            );


        const left =
            divide(
                a.slice(0, mid)
            );

        const right =
            divide(
                a.slice(mid)
            );


        const merged =
            merge(
                left,
                right
            );


        result.push(
            makeStep(
                merged,
                [],
                "Merging sorted portions."
            )
        );


        return merged;

    }


    divide(a);


    return result;
}


// ------------------------------------------------------------
// QUICK SORT
// ------------------------------------------------------------

function quickSort(arr) {

    const a = [...arr];

    const result = [];


    function partition(
        low,
        high
    ) {

        const pivot =
            a[high];

        let i =
            low - 1;


        for (
            let j = low;
            j < high;
            j++
        ) {

            result.push(
                makeStep(
                    a,
                    [j, high],
                    `Comparing ${a[j]} with pivot ${pivot}.`
                )
            );


            if (
                a[j] < pivot
            ) {

                i++;

                [
                    a[i],
                    a[j]
                ] =
                [
                    a[j],
                    a[i]
                ];

            }

        }


        [
            a[i + 1],
            a[high]
        ] =
        [
            a[high],
            a[i + 1]
        ];


        return i + 1;

    }


    function sort(
        low,
        high
    ) {

        if (
            low < high
        ) {

            const pi =
                partition(
                    low,
                    high
                );


            result.push(
                makeStep(
                    a,
                    [pi],
                    `Pivot ${a[pi]} placed.`
                )
            );


            sort(
                low,
                pi - 1
            );

            sort(
                pi + 1,
                high
            );

        }

    }


    sort(
        0,
        a.length - 1
    );


    return result;
}


// ------------------------------------------------------------
// HEAP SORT
// ------------------------------------------------------------

function heapSort(arr) {

    const a = [...arr];

    const result = [];


    function heapify(
        n,
        i
    ) {

        let largest = i;

        let left =
            2 * i + 1;

        let right =
            2 * i + 2;


        if (
            left < n &&
            a[left] >
            a[largest]
        ) {

            largest = left;

        }


        if (
            right < n &&
            a[right] >
            a[largest]
        ) {

            largest = right;

        }


        if (
            largest !== i
        ) {

            [
                a[i],
                a[largest]
            ] =
            [
                a[largest],
                a[i]
            ];


            result.push(
                makeStep(
                    a,
                    [i, largest],
                    "Heapifying."
                )
            );


            heapify(
                n,
                largest
            );

        }

    }


    for (
        let i =
            Math.floor(
                a.length / 2
            ) - 1;

        i >= 0;

        i--
    ) {

        heapify(
            a.length,
            i
        );

    }


    for (
        let i =
            a.length - 1;

        i > 0;

        i--
    ) {

        [
            a[0],
            a[i]
        ] =
        [
            a[i],
            a[0]
        ];


        heapify(
            i,
            0
        );

    }


    return result;
}


// ------------------------------------------------------------
// LINEAR SEARCH
// ------------------------------------------------------------

function linearSearch(
    arr,
    target
) {

    const result = [];


    for (
        let i = 0;
        i < arr.length;
        i++
    ) {

        result.push(
            makeStep(
                arr,
                [i],
                `Checking ${arr[i]}.`
            )
        );


        if (
            arr[i] === target
        ) {

            result.push(
                makeStep(
                    arr,
                    [],
                    `${target} found at index ${i}.`,
                    [i]
                )
            );


            return result;

        }

    }


    result.push(
        makeStep(
            arr,
            [],
            `${target} not found.`
        )
    );


    return result;
}


// ------------------------------------------------------------
// BINARY SEARCH
// ------------------------------------------------------------

function binarySearch(
    arr,
    target
) {

    const a =
        [...arr].sort(
            (x, y) => x - y
        );

    const result = [];


    let left = 0;

    let right =
        a.length - 1;


    while (
        left <= right
    ) {

        const mid =
            Math.floor(
                (left + right) / 2
            );


        result.push(
            makeStep(
                a,
                [left, mid, right],
                `Middle element is ${a[mid]}.`
            )
        );


        if (
            a[mid] === target
        ) {

            result.push(
                makeStep(
                    a,
                    [],
                    `${target} found.`,
                    [mid]
                )
            );


            return result;

        }


        if (
            a[mid] < target
        ) {

            left =
                mid + 1;

        }

        else {

            right =
                mid - 1;

        }

    }


    result.push(
        makeStep(
            a,
            [],
            `${target} not found.`
        )
    );


    return result;
}


// ------------------------------------------------------------
// LINKED LIST
// ------------------------------------------------------------

function linkedList(type) {

    const data =
        [...array];

    const result = [];


    for (
        let i = 0;
        i < data.length;
        i++
    ) {

        result.push(
            makeStep(
                data.slice(
                    0,
                    i + 1
                ),
                [i],
                `Created node ${data[i]}.`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// STACK
// ------------------------------------------------------------

function stackOperations() {

    const data = [];

    const result = [];


    for (
        let i = 0;
        i < array.length;
        i++
    ) {

        data.push(
            array[i]
        );


        result.push(
            makeStep(
                [...data],
                [],
                `PUSH ${array[i]}.`
            )
        );

    }


    while (
        data.length
    ) {

        const removed =
            data.pop();


        result.push(
            makeStep(
                [...data],
                [],
                `POP ${removed}.`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// QUEUE
// ------------------------------------------------------------

function queueOperations() {

    const data = [];

    const result = [];


    array.forEach(
        value => {

            data.push(value);


            result.push(
                makeStep(
                    [...data],
                    [],
                    `ENQUEUE ${value}.`
                )
            );

        }
    );


    while (
        data.length
    ) {

        const removed =
            data.shift();


        result.push(
            makeStep(
                [...data],
                [],
                `DEQUEUE ${removed}.`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// FIBONACCI DP
// ------------------------------------------------------------

function fibonacciDP(n = 10) {

    const dp =
        Array(n + 1).fill(0);

    const result = [];


    dp[0] = 0;

    dp[1] = 1;


    result.push(
        makeStep(
            [...dp],
            [0, 1],
            "Initialize Fibonacci values."
        )
    );


    for (
        let i = 2;
        i <= n;
        i++
    ) {

        dp[i] =
            dp[i - 1] +
            dp[i - 2];


        result.push(
            makeStep(
                [...dp],
                [i],
                `dp[${i}] = dp[${i - 1}] + dp[${i - 2}].`
            )
        );

    }


    return result;
}


// ------------------------------------------------------------
// TREE TRAVERSAL
// ------------------------------------------------------------

function treeTraversal() {

    const tree =
        [
            50,
            30,
            70,
            20,
            40,
            60,
            80
        ];


    const result = [];


    tree.forEach(
        (value, index) => {

            result.push(
                makeStep(
                    tree,
                    [index],
                    `Visiting node ${value}.`
                )
            );

        }
    );


    return result;
}


// ------------------------------------------------------------
// BFS
// ------------------------------------------------------------

function bfs() {

    const graph = {

        A: ["B", "C"],

        B: ["A", "D"],

        C: ["A", "E"],

        D: ["B"],

        E: ["C"]

    };


    const visited =
        new Set();

    const queue =
        ["A"];

    const result = [];


    while (
        queue.length
    ) {

        const node =
            queue.shift();


        if (
            visited.has(node)
        )
            continue;


        visited.add(node);


        result.push(
            makeStep(
                [...visited],
                [],
                `Visited ${node}.`
            )
        );


        graph[node].forEach(
            next => {

                if (
                    !visited.has(next)
                ) {

                    queue.push(next);

                }

            }
        );

    }


    return result;
}


// ------------------------------------------------------------
// DFS
// ------------------------------------------------------------

function dfs() {

    const graph = {

        A: ["B", "C"],

        B: ["A", "D"],

        C: ["A", "E"],

        D: ["B"],

        E: ["C"]

    };


    const visited =
        new Set();

    const result = [];


    function visit(node) {

        if (
            visited.has(node)
        )
            return;


        visited.add(node);


        result.push(
            makeStep(
                [...visited],
                [],
                `DFS visited ${node}.`
            )
        );


        graph[node].forEach(
            visit
        );

    }


    visit("A");


    return result;
}


// ------------------------------------------------------------
// CREATE STEPS
// ------------------------------------------------------------

function generateSteps() {

    stop();


    const target =
        Number(
            valueInput.value
        );


    switch (
        selectedType
    ) {

        case "bubble":

            steps =
                bubbleSort(
                    array
                );

            break;


        case "selection":

            steps =
                selectionSort(
                    array
                );

            break;


        case "insertion":

            steps =
                insertionSort(
                    array
                );

            break;


        case "merge":

            steps =
                mergeSort(
                    array
                );

            break;


        case "quick":

            steps =
                quickSort(
                    array
                );

            break;


        case "heap":

            steps =
                heapSort(
                    array
                );

            break;


        case "linear":

            steps =
                linearSearch(
                    array,
                    target
                );

            break;


        case "binary":

            steps =
                binarySearch(
                    array,
                    target
                );

            break;


        case "singly":

            steps =
                linkedList(
                    "singly"
                );

            break;


        case "doubly":

            steps =
                linkedList(
                    "doubly"
                );

            break;


        case "circular":

            steps =
                linkedList(
                    "circular"
                );

            break;


        case "stack":

            steps =
                stackOperations();

            break;


        case "queue":

            steps =
                queueOperations();

            break;


        case "circularQueue":

            steps =
                queueOperations();

            break;


        case "treeTraversal":

            steps =
                treeTraversal();

            break;


        case "bfs":

            steps =
                bfs();

            break;


        case "dfs":

            steps =
                dfs();

            break;


        case "fibonacci":

            steps =
                fibonacciDP();

            break;


        default:

            steps = [
                makeStep(
                    array,
                    [],
                    "Select an algorithm."
                )
            ];

    }


    currentStep = 0;

    showStep();

}


// ------------------------------------------------------------
// SHOW STEP
// ------------------------------------------------------------

function showStep() {

    if (
        !steps.length
    )
        return;


    const step =
        steps[currentStep];


    operation.textContent =
        step.message;


    stepText.textContent =
        `Step ${currentStep + 1} / ${steps.length}`;


    if (
        [
            "singly",
            "doubly",
            "circular"
        ].includes(
            selectedType
        )
    ) {

        renderLinkedList(
            step.data,
            selectedType
        );

    }

    else if (
        selectedType === "stack"
    ) {

        renderStack(
            step.data
        );

    }

    else if (
        [
            "treeTraversal",
            "bst"
        ].includes(
            selectedType
        )
    ) {

        renderTree(
            step.data
        );

    }

    else {

        renderArray(
            step.data,
            step.active,
            step.found
        );

    }

}


// ------------------------------------------------------------
// PLAYER
// ------------------------------------------------------------

function next() {

    if (
        currentStep <
        steps.length - 1
    ) {

        currentStep++;

        showStep();

    }

    else {

        stop();

        status.textContent =
            "Completed";

    }

}


function play() {

    if (playing)
        return;


    playing = true;

    status.textContent =
        "Running";


    timer =
        setInterval(
            next,
            Number(
                document.getElementById(
                    "speed"
                ).value
            )
        );

}


function stop() {

    playing = false;

    clearInterval(timer);

    timer = null;

}


function reset() {

    stop();

    currentStep = 0;

    generateSteps();

    status.textContent =
        "Ready";

}


// ------------------------------------------------------------
// ALGORITHM SELECTION
// ------------------------------------------------------------

document
    .querySelectorAll(".algo")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".algo"
                    )
                    .forEach(
                        btn =>
                            btn.classList
                                .remove(
                                    "active"
                                )
                    );


                button.classList.add(
                    "active"
                );


                selectedType =
                    button.dataset.type;


                updateInfo();

                generateSteps();

            }
        );

    });


// ------------------------------------------------------------
// UPDATE INFO
// ------------------------------------------------------------

function updateInfo() {

    const data =
        info[
            selectedType
        ];


    title.textContent =
        data.title;


    description.textContent =
        data.description;


    document.getElementById(
        "best"
    ).textContent =
        data.best;


    document.getElementById(
        "average"
    ).textContent =
        data.average;


    document.getElementById(
        "worst"
    ).textContent =
        data.worst;


    document.getElementById(
        "space"
    ).textContent =
        data.space;


    code.textContent =
        getCode(
            selectedType
        );

}


// ------------------------------------------------------------
// CODE DISPLAY
// ------------------------------------------------------------

function getCode(type) {

    const codes = {

        bubble:
`for(let i = 0; i < n - 1; i++) {

    for(let j = 0; j < n-i-1; j++) {

        if(arr[j] > arr[j+1]) {

            [arr[j], arr[j+1]] =
            [arr[j+1], arr[j]];

        }
    }
}`,

        binary:
`let left = 0;
let right = arr.length - 1;

while(left <= right) {

    let mid =
        Math.floor((left + right) / 2);

    if(arr[mid] === target)
        return mid;

    if(arr[mid] < target)
        left = mid + 1;

    else
        right = mid - 1;
}`,

        linear:
`for(let i = 0; i < arr.length; i++) {

    if(arr[i] === target)
        return i;

}

return -1;`,

        stack:
`push(x) {
    stack.push(x);
}

pop() {
    return stack.pop();
}

peek() {
    return stack[stack.length - 1];
}`,

        queue:
`enqueue(x) {
    queue.push(x);
}

dequeue() {
    return queue.shift();
}`,

        singly:
`class Node {

    constructor(data) {

        this.data = data;
        this.next = null;

    }

}`,

        fibonacci:
`dp[0] = 0;
dp[1] = 1;

for(let i = 2; i <= n; i++) {

    dp[i] =
        dp[i-1] +
        dp[i-2];

}`,

        bfs:
`queue = [start];
visited.add(start);

while(queue.length) {

    node = queue.shift();

    for(next of graph[node]) {

        if(!visited.has(next)) {

            visited.add(next);
            queue.push(next);

        }
    }
}`,

        dfs:
`function dfs(node) {

    visited.add(node);

    for(next of graph[node]) {

        if(!visited.has(next)) {

            dfs(next);

        }
    }
}`

    };


    return codes[type] ||
        "Algorithm implementation displayed here.";

}


// ------------------------------------------------------------
// BUTTON EVENTS
// ------------------------------------------------------------

document
    .getElementById("apply")
    .addEventListener(
        "click",
        () => {

            const values =
                input.value
                    .split(",")
                    .map(Number)
                    .filter(
                        n =>
                            !Number.isNaN(n)
                    );


            if (
                !values.length
            ) {

                alert(
                    "Enter valid numbers."
                );

                return;

            }


            originalArray =
                [...values];

            array =
                [...values];


            generateSteps();

        }
    );


document
    .getElementById("play")
    .addEventListener(
        "click",
        play
    );


document
    .getElementById("pause")
    .addEventListener(
        "click",
        () => {

            stop();

            status.textContent =
                "Paused";

        }
    );


document
    .getElementById("next")
    .addEventListener(
        "click",
        () => {

            stop();

            next();

        }
    );


document
    .getElementById("reset")
    .addEventListener(
        "click",
        reset
    );


// ------------------------------------------------------------
// INITIALIZE
// ------------------------------------------------------------

updateInfo();

generateSteps();