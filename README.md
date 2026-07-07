# 🕹️ Rock Paper Scissors — Interactive Web Automation System

Welcome to the premium implementation of the classic **Rock, Paper, Scissors** game. This project demonstrates high-fidelity frontend execution using pure vanilla technologies. It serves as a showcase of semantic DOM architecture, robust structural styling using modern layout modules, and optimal asynchronous execution engines.

---

## 🎨 Visual Identity & UI/UX Design

The application emphasizes advanced user experience paradigms without introducing performance overhead:
- **Tactile Affordance Matrix:** Interactive elements utilize structural CSS transforms, scaling animations, and clear cursor mutations (`cursor: pointer`) to visually communicate click mechanics instantly.
- **Dynamic State-Driven Theming:** The user interface changes its environmental scheme based on evaluation metrics. The primary state monitor shifts dynamically between strict contextual alert behaviors:
  - 🟢 **Victory State:** Interactive color shifts to rich `green`.
  - 🔴 **Defeat State:** UI micro-mutations trigger context warnings in `red`.
  - 🔵 **Draw State:** Neutralizes back to professional midnight navy slate (`#081b31`).
- **Aspect Fluid Centering:** Completely layout-driven via the **CSS3 Flexible Box Module (Flexbox)**. Avoids legacy absolute position properties, enforcing mathematically centered components regardless of screen real estate or layout scales.

---

## ⚡ Technical Core Architecture & Features

### 1. Document Object Model (DOM) Design (`index.html`)
The structural layer maps semantic targets uniquely, avoiding loose variable dependencies:
- Elements are neatly grouped inside semantic structural nodes like `.choices` for actionable controllers, `.score-bored` for continuous metric outputs, and `.msg-container` for micro-copy alerts.
- Image assets utilize strict normalization filters (`object-fit: cover` and circular `border-radius: 50%`) preventing structural graphic breakage during aggressive view scaling.

### 2. Core JavaScript Automation Engine (`game.js`)
The programmatic logic is structured around automated loop iterations and efficient code streams:
- **Asynchronous Staging:** Event triggers are bound to element matrices cleanly via `.forEach()` iteration loops, extracting dynamic identification payloads directly using `.getAttribute("id")`.
- **Pseudorandom Generation Processing:** The computer's decision-making algorithm works via independent statistical ranges rather than static values:
  ```javascript
  const gencompChoice = () => {
      const option = ["Rock", "paper", "scissor"];
      const randInd = Math.floor(Math.random() * 3);
      return option[randInd];
  }

## 📂 Structural Overview

```bash
.
├── index.html        # Semantic layout nodes and structural components
├── game.css          # Flexbox structures, keyframe states, dynamic style layers
├── game.js           # Event listening loops, randomized engines, and DOM mutation modules
├── Rock.jpeg         # High-resolution asset for Rock selection
├── paper.png         # Transparent layout asset for Paper selection
└── scissor.png       # Transparent layout asset for Scissors selection
