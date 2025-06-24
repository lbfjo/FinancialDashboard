# Shell App – Financial Dashboard

This is the **Shell App** for the Microfrontend-based Financial Dashboard project.

## 🏗️ Tech Stack
- **Vite** + **React** + **TypeScript**
- **shadcn/ui** (Radix UI + Tailwind CSS)
- **Module Federation** via `@module-federation/vite`
- **React Router** for navigation
- **Zustand** (to be used for auth state)

## 📁 Structure
- `src/` – Main source code
- `vite.config.ts` – Vite + Module Federation config
- `components.json` – shadcn/ui config

## 🚀 Features Implemented
- Basic dashboard layout with Navbar and navigation links
- shadcn/ui Button component
- React Router for navigation between placeholder microfrontend routes
- Module Federation plugin configured (ready to consume remotes)

## 🟡 Next Steps (for tomorrow)
1. **Add OAuth Logic**
   - Create a Zustand store for authentication state (`src/lib/authStore.ts`)
   - Update Navbar to show Login/Logout and user info
   - Simulate OAuth login/logout (real provider can be added later)
2. **Protect routes** (optional)
3. **Prepare to load remote microfrontends**

## 🛠️ Local Development
```sh
npm install
npm run dev
```

## 📝 How to Continue
- Start by creating `src/lib/authStore.ts` for Zustand auth logic
- Update `src/App.tsx` and Navbar to use the auth store
- (See the assistant chat for detailed code snippets and guidance)

---

**Happy coding!**
