# 📚 Tailwind CSS & CSS Grid — Practical Guide

## 🎨 What is Tailwind CSS?
**Tailwind CSS** is a utility-first CSS framework.

Unlike **Bootstrap**, where a single class can contain multiple CSS properties, in Tailwind CSS **each class corresponds to a specific property** with a descriptive name.

### ✅ Advantages of Tailwind CSS
- Write CSS directly in your components (no need for external stylesheets).
- No worries about CSS inheritance.
- No more class naming headaches.
- Excellent VSCode extension with autocomplete.
- Ideal for rapid prototyping with utility classes.

---

## 🧩 What is CSS Grid?
**CSS Grid** is a **two-dimensional** layout system that lets you create layouts in rows and columns with precision and flexibility.

📌 **Difference from Flexbox:**  
- Flexbox → **one-dimensional** layout (row **or** column).  
- Grid → **two-dimensional** layout (row **and** column).

💡 **Mental example:**  
Think of a grid notebook: each cell is a space where you can place an element, define how many rows and columns there will be, and how elements are arranged.

---

## 🧱 Key Concepts in CSS Grid

| Concept           | Simple Explanation                          |
|-------------------|---------------------------------------------|
| **Grid container**| Parent element with `display: grid`.        |
| **Grid items**    | Direct children of the container.           |
| **Grid lines**    | Lines dividing rows and columns (numbered). |
| **Grid tracks**   | Complete rows and columns.                  |
| **Grid cell**     | A single cell in the grid.                  |
| **Grid area**     | A block of cells an element can occupy.     |

---

## 🛠 Create a basic grid

```css
.container {
  display: grid; /* Enable grid */
  grid-template-columns: 100px 200px auto; /* 3 columns */
  grid-template-rows: 100px auto; /* 2 rows */
  gap: 10px; /* Space between cells */
}
```

📌 **Explanation:**

- `grid-template-columns` → width of each column.
- `grid-template-rows` → height of each row.
- `auto` → size adapts to content.
- `gap` → space between columns and rows.

**HTML + CSS Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Grid</title>
<style>
  .container {
    display: grid;
    grid-template-columns: 100px 200px auto;
    grid-template-rows: 100px auto;
    gap: 10px;
    background: #eee;
    padding: 10px;
  }
  .item {
    background: #4f46e5;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
```

---

## 📏 Useful units in CSS Grid

- `px` → fixed size.
- `%` → relative to container.
- `fr` → fraction of available space (very common).
- `auto` → adjusts to content.
- `minmax(min, max)` → defines a range.
- `repeat(n, value)` → avoids repeating code.

**Example:**

```css
grid-template-columns: repeat(3, 1fr);
/* Creates 3 equal columns without writing 1fr 1fr 1fr */
```

---

## 🎯 Placing elements in the grid

```css
.item1 {
  grid-column: 1 / 3; /* From line 1 to 3 (2 columns) */
  grid-row: 1 / 2;    /* Only the first row */
}
```

📌 You can also use names:

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar main";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
```

**HTML + CSS Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid with Areas</title>
<style>
  .container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar main";
    grid-template-columns: 200px 1fr;
    gap: 10px;
  }
  .header { grid-area: header; background: #6366f1; color: white; padding: 10px; }
  .sidebar { grid-area: sidebar; background: #93c5fd; padding: 10px; }
  .main { grid-area: main; background: #d1fae5; padding: 10px; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
  </div>
</body>
</html>
```

---

## 📱 Responsive Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

📌 This creates columns that automatically adjust so each is at least 200px and shares the remaining space.

---

## 🧠 Quick summary

- Enable Grid:  
  `display: grid;`
- Define columns and rows:  
  `grid-template-columns;`  
  `grid-template-rows;`
- Adjust spacing:  
  `gap;`
- Place elements:  
  `grid-column`, `grid-row`, `grid-template-areas`
- Make it responsive:  
  Use `fr`, `minmax`, and `auto-fit` / `auto-fill`.

---

## ⚛️ Difference between useMemo and useCallback in React

| Hook        | Purpose                                                                 | Returns         | Use Case Example                |
|-------------|------------------------------------------------------------------------|-----------------|---------------------------------|
| `useMemo`   | Memoizes the **result** of a function (value)                          | Value           | Expensive calculations          |
| `useCallback`| Memoizes the **function itself** (function reference)                  | Function        | Passing stable callbacks to children |

**Example:**

```js
// useMemo: caches a computed value
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback: caches a function reference
const handleClick = useCallback(() => {
  doSomething();
}, [dependency]);
```

- Use `useMemo` when you want to avoid recalculating a value unless its dependencies change.
- Use `useCallback` when you want to avoid recreating a function unless its dependencies change (useful for passing callbacks to child components).