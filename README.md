# GradRight Summer Immersion Landing

Full-bleed hero carousel variant of the GradRight summer immersion landing page.

## Run locally

```bash
npm install
npm run dev
```

Opens at [http://127.0.0.1:43129](http://127.0.0.1:43129).

## Deploy / restore safety net

This landing variant was promoted to `main` on **2026-10-12**. The previous `main` tip is frozen so you can roll back if needed.

| Ref | Purpose |
| --- | --- |
| `main` | Current live landing variant |
| `backup/main-pre-landing-variant` | Branch pointing at pre-variant `main` |
| `restore/main-pre-landing-variant` | Annotated tag (same commit) — preferred restore target |
| `cursor/hero-caption-blur-ff67` | Feature branch with the variant work |

### Restore the previous main

```bash
git fetch origin --tags
git checkout main
git reset --hard restore/main-pre-landing-variant
git push --force-with-lease origin main
```

Safer alternative (keeps history, no force-push): create a revert of the merge commit that landed the variant, then push.

### Re-apply this variant later

```bash
git checkout main
git merge --ff-only cursor/hero-caption-blur-ff67
git push origin main
```
