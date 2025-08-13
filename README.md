# 📚 Tailwind CSS & CSS Grid — Guía práctica

## 🎨 ¿Qué es Tailwind CSS?
**Tailwind CSS** es un framework CSS basado en utilidades.  

A diferencia de **Bootstrap**, donde una sola clase puede contener varias propiedades CSS, en Tailwind CSS **cada clase corresponde a una propiedad específica** con un nombre descriptivo.

### ✅ Ventajas de Tailwind CSS
- Escribes el CSS directamente en tus componentes (no necesitas hojas externas).
- No te preocupas por la herencia de CSS.
- El naming de clases deja de ser un problema.
- Extensión de **VSCode** con autocompletado excelente.
- Ideal para maquetar rápido con clases utilitarias.

---

## 🧩 ¿Qué es CSS Grid?
**CSS Grid** es un sistema de diseño **bidimensional** que permite crear layouts en filas y columnas con mucha precisión y flexibilidad.

📌 **Diferencia con Flexbox:**  
- Flexbox → diseño **unidimensional** (fila **o** columna).  
- Grid → diseño **bidimensional** (fila **y** columna).

💡 **Ejemplo mental:**  
Piensa en una hoja cuadriculada: cada celda es un espacio donde puedes colocar un elemento, definir cuántas filas y columnas habrá y cómo se acomodan los elementos.

---

## 🧱 Conceptos clave en CSS Grid

| Concepto         | Explicación simple |
|------------------|-------------------|
| **Grid container** | Elemento padre con `display: grid`. |
| **Grid items**    | Hijos directos del container. |
| **Grid lines**    | Líneas que dividen filas y columnas (numeradas desde 1). |
| **Grid tracks**   | Filas y columnas completas. |
| **Grid cell**     | Una sola celda de la cuadrícula. |
| **Grid area**     | Un bloque de celdas que un elemento puede ocupar. |

---

## 🛠 Crear un grid básico
```css
.container {
  display: grid; /* Activar grid */
  grid-template-columns: 100px 200px auto; /* 3 columnas */
  grid-template-rows: 100px auto; /* 2 filas */
  gap: 10px; /* Espacio entre celdas */
}


📌 Explicación:

grid-template-columns → ancho de cada columna.

grid-template-rows → alto de cada fila.

auto → tamaño se adapta al contenido.

gap → espacio entre columnas y filas.

Ejemplo HTML + CSS

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid básico</title>
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


📏 Unidades útiles en CSS Grid
px → tamaño fijo.

% → relativo al contenedor.

fr → fracción del espacio disponible (muy usado).

auto → ajusta al contenido.

minmax(min, max) → define un rango.

repeat(n, valor) → evita repetir código.

Ejemplo:

grid-template-columns: repeat(3, 1fr);
/* Crea 3 columnas iguales sin escribir 1fr 1fr 1fr */

🎯 Colocar elementos en el grid

.item1 {
  grid-column: 1 / 3; /* De la línea 1 a la 3 (2 columnas) */
  grid-row: 1 / 2;    /* Solo la primera fila */
}

📌 También puedes usar nombres:

.container {
  grid-template-areas:
    "header header"
    "sidebar main";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }

Ejemplo HTML + CSS

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grid con áreas</title>
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
    <div class="header">Encabezado</div>
    <div class="sidebar">Barra lateral</div>
    <div class="main">Contenido principal</div>
  </div>
</body>
</html>

📱 Grid responsive

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

📌 Esto crea columnas que se ajustan automáticamente para que cada una tenga mínimo 200px y se reparta el espacio restante.

🧠 Resumen rápido

Activa Grid:
display: grid;

Define columnas y filas:
grid-template-columns;
grid-template-rows;

Ajusta espacio:
gap;

Coloca elementos:
grid-column, grid-row, grid-template-areas.

Hazlo responsive:
Usa fr, minmax y auto-fit / auto-fill.