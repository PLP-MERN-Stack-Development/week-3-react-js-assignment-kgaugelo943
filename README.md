# My App

A responsive React application with reusable UI components, dark mode support, task management, and data fetching functionality.

---

## Features

✅ Reusable Button, Card, Navbar, Footer components
✅ Responsive design for mobile, tablet, and desktop
✅ Dark mode toggle with Tailwind CSS `dark` mode
✅ Task Manager with add, complete, delete, filter functionality
✅ Persistent tasks using `useLocalStorage`
✅ Data fetching from JSONPlaceholder API with search and pagination
✅ Smooth animations and transitions for interactive elements

---

## Tech Stack

* React 19
* React Router
* Tailwind CSS 4
* Vite 7

---

## Installation

```bash
npm install
```

---

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # ThemeContext for dark mode
├── hooks/          # Custom hooks (e.g., useLocalStorage)
├── pages/          # Page components (e.g., Home, About)
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

---

## Available Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build
* `npm run build:css` - Compile Tailwind CSS

---

## Notes

* Tailwind CSS configured via `tailwind.config.js`
* Dark mode enabled via class strategy (`dark` class on `<html>`)
* Uses JSONPlaceholder as a mock API for data fetching

---

## License

[MIT](LICENSE)
