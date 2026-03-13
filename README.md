# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








# Clone repository
git clone <repo-url>
cd <repo-folder>

# Install dependencies
npm install

# Run the app
npm run dev




### 🔹 Features Checklist

- [x] Create, edit, and delete goals
- [x] Dashboard showing active & completed goals
- [x] Goals page with search & filter
- [x] Light & Dark mode toggle
- [x] Language toggle: English ↔ Farsi
- [x] RTL layout for Farsi, LTR for English
- [x] XP calculation for completed progress
- [x] Streak tracking (daily completed goals)
- [x] Responsive layout (desktop + mobile)





###  XP Rules

- Each time the user logs progress on a goal, they earn **1 XP**.
- XP represents the total progress made across all goals.
- XP is calculated by summing the progress of all goals.

Example:
- Goal target: 10
- Current progress: 3
- XP earned from this goal: **3 XP**

---

###  Streak Rules

- A streak represents the number of **consecutive days the user completes at least one goal**.
- When a goal reaches its target (`progress >= target`), it is marked as **completed**.
- If the user completes a goal every day, the **streak increases**.
- If a day passes without completing any goal, the **streak resets to 0**.





#screen-shots 

![Dashboard](./src/assets/English.png)
![Dashboard](./src/assets/Farsi.png)



## 🌐 RTL / LTR Language Support

This application supports **two languages: English and Farsi**, and automatically changes the layout direction depending on the selected language.

### LTR (Left-to-Right)
- Used for **English (en)**.
- Text, buttons, and layout flow from **left to right**.
- This is the default layout for most Western languages.

### RTL (Right-to-Left)
- Used for **Farsi (fa)**.
- The entire interface switches to **right to left**.
- Navigation, text alignment, and components mirror the layout to match RTL reading patterns.

### How it Works in React

The application uses **React Context and Material-UI theme direction** to dynamically switch between LTR and RTL.

When the language changes:
- The `dir` attribute of the document is updated.
- Material-UI theme direction changes between `ltr` and `rtl`.
- `stylis-plugin-rtl` is used to correctly mirror styles.

Example logic used in the project:

```javascript
const dir = language === "fa" ? "rtl" : "ltr";
document.documentElement.setAttribute("dir", dir);

