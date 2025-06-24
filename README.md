# Financial Dashboard – Microfrontend Monorepo

A modern, modular financial management dashboard built with React, Vite, shadcn/ui, and Module Federation. Each major feature is a separate microfrontend for maximum scalability and independent deployment.

## 🏗️ Architecture
- **Monorepo**: All microfrontends and the shell app live in this repository
- **Microfrontends**: Each feature is a standalone app (see below)
- **Module Federation**: Powered by Vite and @module-federation/vite
- **UI**: shadcn/ui (Radix UI + Tailwind CSS)
- **State Management**: Zustand (recommended)
- **Routing**: React Router

## 📦 Packages / Apps
- `shell-app/` – The main shell/container app (navigation, layout, auth, loads remotes)
- `accounts-app/` – (Planned) Account overview microfrontend
- `transactions-app/` – (Planned) Transactions microfrontend
- `investments-app/` – (Planned) Investments microfrontend
- `budget-app/` – (Planned) Budget microfrontend
- `shared/` – (Optional) Shared UI or utilities

## 🚀 Getting Started
1. Clone the repo:
   ```sh
   git clone https://github.com/lbfjo/financialDashboard.git
   cd financialDashboard
   ```
2. Install dependencies for each app (start with `shell-app/`):
   ```sh
   cd shell-app
   npm install
   npm run dev
   ```
3. Repeat for other microfrontends as you add them.

## 🗺️ Roadmap
- [x] Scaffold shell app with layout, shadcn/ui, module federation
- [ ] Add OAuth logic and auth state (Zustand)
- [ ] Scaffold and federate `accounts-app`
- [ ] Scaffold and federate `transactions-app`
- [ ] Scaffold and federate `investments-app`
- [ ] Scaffold and federate `budget-app`
- [ ] Add shared UI/utilities package (optional)

## 🤝 Contributing
- Open to PRs and suggestions!
- See each app's README for details on local development

---

**Built by Francisco Bruno ([lbfjo](https://github.com/lbfjo))** 