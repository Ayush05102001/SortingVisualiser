# 📊 Sorting Visualiser

An interactive web app that brings sorting algorithms to life. Watch how different algorithms compare, swap, and rearrange data step by step, and see why some are faster than others.

---

## ✨ Features

- **Multiple algorithms** – visualise and compare several classic sorting algorithms
- **Adjustable array size** – generate arrays from a handful of elements up to hundreds
- **Speed control** – slow things down to study each step, or speed up to see the big picture
- **Random array generation** – create a fresh unsorted array with one click
- **Colour-coded operations** – distinct colours highlight comparisons, swaps, and sorted elements
- **Responsive design** – works on desktop and mobile browsers

---

## 🧮 Algorithms

| Algorithm      | Best       | Average    | Worst      | Space     | Stable |
|----------------|------------|------------|------------|-----------|--------|
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)      | ✅     |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)      | ❌     |
| Insertion Sort | O(n)       | O(n²)      | O(n²)      | O(1)      | ✅     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)      | ✅     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n)  | ❌     |
| Heap Sort      | O(n log n) | O(n log n) | O(n log n) | O(1)      | ❌     |

---

## 🛠️ Tech Stack

- **HTML5** – structure
- **CSS3** – styling and animations
- **JavaScript (ES6+)** – algorithm logic and visualisation

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Git (optional, for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project folder**
   ```bash
   cd sorting-visualiser
   ```

3. **Open the app**

   Open `index.html` in your browser, or serve it locally:
   ```bash
   python -m http.server 8000
   ```

---

## 🎮 How to Use

1. Choose an **array size** with the size slider.
2. Click **Generate New Array** to create a random array.
3. Select a **sorting algorithm** from the menu.
4. Adjust the **speed** slider to your liking.
5. Click **Sort** and watch the algorithm work!

---

## 📁 Project Structure

```
sorting-visualiser/
├── index.html          # Main page
├── style.css           # Styles
├── script.js           # UI and visualisation logic
├── algorithms/         # Sorting algorithm implementations
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   ├── quickSort.js
│   └── heapSort.js
└── README.md
```

---

## 🔮 Future Improvements

- [ ] Add more algorithms (Radix Sort, Shell Sort, Counting Sort)
- [ ] Side-by-side comparison of two algorithms
- [ ] Display live comparison and swap counters
- [ ] Sound effects tied to element values
- [ ] Step-by-step mode with pause/resume
- [ ] Pseudocode panel that highlights the current line

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-algorithm`)
3. Commit your changes (`git commit -m "Add Shell Sort"`)
4. Push to the branch (`git push origin feature/new-algorithm`)
5. Open a Pull Request