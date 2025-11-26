# Financial Goal Visualizer (Investment Calculator)

## Overview
A client-side web application designed to simulate investment growth and determine the capital required to reach a specific target annual income (Financial Independence). It calculates the time to reach the goal based on initial capital, monthly contributions, recurring incomes, and expected returns, accounting for inflation and taxes.

[Demo](https://nitzap.github.io/financial-simulator/)

## Technology Stack
- **HTML5**: Semantic structure (`index.html`).
- **CSS3**: Custom styling with a dark theme, responsive design (`style.css`).
- **JavaScript (ES6+)**: Core logic, DOM manipulation, and state management (`script.js`).
- **Chart.js**: External library for rendering interactive data visualizations (loaded via CDN).
- **LocalStorage API**: Used for persisting user inputs and language preferences.

## Project Structure
The codebase follows a standard separation of concerns:
- `index.html`: Entry point. Contains the DOM structure, language selector, and imports styles/scripts.
- `style.css`: Contains all visual styles, including the dark mode theme, grid layouts, and responsive adjustments.
- `script.js`: Contains:
    - **State Management**: `loadState()` and `saveState()` handling `localStorage`.
    - **Internationalization (i18n)**: `translations` object and `setLanguage()`/`t()` functions.
    - **Simulation Logic**: `simulateYearsToTarget()` performs the year-by-year and month-by-month compound interest calculation.
    - **UI Updates**: `recalculate()` triggers the simulation and updates the DOM and charts.

## Key Features & Logic

### 1. Simulation Engine (`simulateYearsToTarget`)
- **Inputs**: Initial capital, monthly contribution, recurring incomes (arrays), one-time incomes (map), annual return, inflation rate, target capital (derived from target income / withdrawal rate).
- **Process**: Iterates monthly, applying investment returns and inflation adjustments.
- **Phases**:
    1.  **Accumulation**: Capital grows via returns + contributions.
    2.  **Financial Freedom**: Once `capital >= target`, contributions stop. The simulation continues for 5 years (post-target) to visualize withdrawals.
- **Inflation**: All future values (contributions, target capital) are adjusted monthly by the inflation rate to maintain purchasing power parity in the simulation logic, though results are often displayed in nominal terms or "today's equivalent".

### 2. Internationalization (i18n)
- **System**: Custom client-side implementation.
- **Data**: `const translations` object in `script.js` holds 'en' and 'es' strings.
- **Mechanism**: Elements with `data-i18n` attributes are updated dynamically when the language changes.
- **Detection**: Auto-detects browser language, defaults to English, persists user choice in `app_lang`.

### 3. Data Persistence
- **Key**: `investmentCalcState` in `localStorage`.
- **Data**: JSON object containing all input field values and dynamic arrays for recurring/one-time incomes.

## LLM Context & Developer Notes
- **No Build Step**: This is a raw static site. No bundlers (Webpack/Vite) are required. Open `index.html` directly in a browser.
- **Dependencies**: Only `Chart.js` (via CDN).
- **Extensibility**:
    - To add a language: Update the `translations` object in `script.js` and add a button in `index.html`.
    - To modify logic: Focus on `simulateYearsToTarget` in `script.js`.
    - To change UI: Modify `index.html` for structure and `style.css` for appearance.

---
*Generated for clarity and ease of understanding by AI agents and developers.*
