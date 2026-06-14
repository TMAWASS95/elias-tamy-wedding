# GitHub Pages Deployment Plan

## Steps

- [ ] 1. Update `vite.config.ts` with `base: '/'`
- [ ] 2. Update `src/App.tsx` to use `import.meta.env.BASE_URL` for image paths
- [ ] 3. Update `src/main.tsx` to use `HashRouter` instead of `BrowserRouter`
- [ ] 4. Update `package.json` with `homepage` field
- [ ] 5. Create `.github/workflows/deploy.yml` for automated deployment
- [ ] 6. Follow-up: Push to GitHub and enable GitHub Actions Pages source
