# GitHub Pages Mirror Task State (2026-08-12)

## Current blocker
- Workflow `GitHub Pages Mirror` runs on push to main. **build job always SUCCEEDS** (pnpm conflict fixed; vite build works; 404.html copied; artifact uploaded).
- **deploy job FAILS** for every run including the latest (run 31605117987, sha 911c9fd). `actions/deploy-pages@v4` returns failure; no descriptive annotation available.
- Earlier runs (before user enabled Pages) failed with clear 404 "Ensure GitHub Pages has been enabled" — but user DID enable Pages afterwards (`gh api .../pages` returns build_type=workflow, url https://ashflexhosting.github.io/ashflex-hosting/).
- Deployment records exist in env github-pages (ids 5870565738, 5870704491); statuses show failure/waiting without description.
- Hypothesis: deploy-pages action requires the github-pages environment + Pages site to be enabled BEFORE the workflow_run event; runs triggered by the same push that enabled it (or workflow file changes) may see stale state. Also possible the Pages site was enabled but default deployment is blocked until a *new* push AFTER enablement with fresh token.
- Another hypothesis: the deploy-pages action's OIDC/token may lack permission because the workflow file was added before Pages enablement — a push touching workflow files may reset checks. GitHub may require re-approval of workflow permissions on the repo (Actions > Workflow permissions or a pending approval).

## Next steps
1. Check repo actions permissions: `gh api repos/Ashflexhosting/ashflex-hosting/actions/permissions` — if workflow_permissions=read_only, deploy-pages needs id-token write (we have id-token: write in workflow; fine).
2. Check for pending approvals: `gh api repos/Ashflexhosting/ashflex-hosting/actions/runs/31605117987/approvals` or workflow_runs pending_deployment.
3. If workflow permissions are 'read' only for GITHUB_TOKEN on PRs from forks — irrelevant (push on default branch).
4. If still failing, simplest robust alternative: skip actions/deploy-pages and instead push the built artifact to a `gh-pages` branch ourselves and point Pages at "Deploy from a branch" (gh-pages root). This is self-contained and doesn't depend on the Pages API. Change workflow: build, then git push dist/public contents to gh-pages branch with github_token. Requires Pages source set to branch gh-pages root OR keep workflow source but use custom deploy-pages-like step (pages deploy via API 404 blocks this).

## Project facts
- Repo Ashflexhosting/ashflex-hosting branch main; local /home/ubuntu/ashflex-agency; `github` remote with x-access-token auth; post-commit hook auto-pushes.
- Vite build: `npx vite build` -> dist/public (index.html, assets, __manus__); 404.html cp for SPA routes.
- Use gh5 session; gh api output has ANSI escapes (strip with re).
- Mirror URL target: https://ashflexhosting.github.io/ashflex-hosting/
- Manus canonical site: ashflexweb-pzcsotak.manus.space. Contact form + client portal backend features won't work on static mirror.
- TODO: "GitHub Pages Mirror (user-requested)" section — workflow added (done), static fallbacks (frontend degrades gracefully), verify+push (in progress).
- Earlier user messages: user said "done" after enabling Pages at settings/pages.
