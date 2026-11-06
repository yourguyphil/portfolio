# Philips Nguyen — Portfolio

Personal portfolio built with Next.js (App Router) + React + TypeScript. It exports to plain static files, so it can run on any free static host instead of Azure containers.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to ./out
npm run start    # preview ./out locally
```

Requires Node 20.9+.

## Editing content

- Text, skills, links and **projects** all live in `lib/content.ts`. Add a project by appending an entry to `projects` (set `featured: true` for the highlighted card).
- Project images are in `public/projects/`, the profile photo in `public/images/`, and the resume at `public/PhilipsNguyenResume.pdf`.
- Styles are in `app/globals.css`.

## Analytics (Plausible)

The self-hosted Plausible script (`plausible.philipsnguyen.com`) is configured in `components/Plausible.tsx`. It loads only in production builds, so `npm run dev` isn't tracked. Set `NEXT_PUBLIC_PLAUSIBLE_SRC` to swap in a different script URL.

Custom events use tagged-event classes (`plausible-event-name=...`): `Resume Download`, `Contact Submit`, and one `Project ...` event per project link. Enable the matching custom events or features in your Plausible site settings so they are recorded.

## Contact form

Posts to Formspree (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`, defaulting to the previous endpoint). It submits via fetch and falls back to a normal form POST if JavaScript is unavailable.

## Deploying cheaply

`next build` outputs a static `out/` folder with no server needed. Good free options:

- **Vercel / Cloudflare Pages / Netlify**: connect the repo, build command `npm run build`, output directory `out`.
- **Azure Static Web Apps (free tier)**: app location `/`, output location `out`.

Set `NEXT_PUBLIC_SITE_URL` to the production URL so canonical and social metadata are correct.
