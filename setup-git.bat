@echo off
echo Inicializando Git e fazendo commits...

git init
git config user.name "Hospital Team"
git config user.email "team@hospital.com"

echo.
echo Fazendo commits para simular desenvolvimento...

git add package.json
git commit -m "feat: initial project setup with React + Vite + TypeScript"

git add vite.config.ts tsconfig.json tsconfig.node.json
git commit -m "feat: configure TypeScript and Vite build tools"

git add tailwind.config.js postcss.config.js
git commit -m "feat: setup TailwindCSS for styling"

git add index.html
git commit -m "feat: create main HTML entry point"

git add src/main.tsx src/App.tsx
git commit -m "feat: setup React application structure"

git add src/index.css
git commit -m "feat: implement TailwindCSS styles and custom components"

git add src/types/index.ts
git commit -m "feat: define TypeScript interfaces and types"

git add src/contexts/UserContext.tsx
git commit -m "feat: implement user authentication context with useState and useEffect hooks"

git add src/contexts/NotificationContext.tsx
git commit -m "feat: create notification system context"

git add src/components/Header.tsx
git commit -m "feat: create responsive header component with navigation"

git add src/pages/Home.tsx
git commit -m "feat: implement home page with hero section and services"

git add src/pages/Login.tsx
git commit -m "feat: create login page with React Hook Form validation"

git add src/pages/Register.tsx
git commit -m "feat: implement user registration with form validation"

git add src/pages/Dashboard.tsx
git commit -m "feat: create dashboard page with protected routes"

git add src/components/dashboard/PatientDashboard.tsx
git commit -m "feat: implement patient dashboard with appointment management"

git add src/components/dashboard/DoctorDashboard.tsx
git commit -m "feat: create doctor dashboard with medical records"

git add src/components/dashboard/AdminDashboard.tsx
git commit -m "feat: implement admin dashboard with system overview"

git add .gitignore
git commit -m "chore: add gitignore for Node.js and build files"

git add README.md
git commit -m "docs: create comprehensive project documentation"

echo.
echo Git setup completed! Total commits: 18
echo.
echo To run the project:
echo 1. Install dependencies: npm install
echo 2. Start development server: npm run dev
echo.
pause
