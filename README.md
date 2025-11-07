# KHANS TRADING LTD — Website

Live demo: https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Otigef/
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen?logo=github)](https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Otigef/)
[![Netlify](https://img.shields.io/badge/Netlify-ready-blue?logo=netlify)](https://app.netlify.com/start/deploy?repository=<YOUR_REPO_URL>)
[![Vercel](https://img.shields.io/badge/Vercel-ready-black?logo=vercel)](https://vercel.com/import/project?template=<YOUR_REPO_URL>)

> Tip: replace <YOUR_REPO_URL> in the Netlify/Vercel links above with your repository URL when using deploy buttons.

## Overview

This repository contains a responsive, multi-page static website for KHANS TRADING LTD — a premium used car dealership based in Mombasa. The site demonstrates HTML, CSS and vanilla JavaScript interactivity and includes pages for Home, Inventory, About and Contact.

The project was created as a Final Project for a web development module and is deployed to GitHub Pages (link above).

## Features

- Responsive layout and navigation (desktop + mobile burger menu)
- Hero slider with typing effect
- Featured vehicles and full inventory pages with filters/search UI (static, markup-driven)
- Contact form with client-side validation and success messaging
- Testimonials slider
- Theme toggle (light/dark) and other small UI interactions
- Uses Font Awesome for icons and external images hosted via URLs

## Tech Stack

- HTML5
- CSS3 (custom styles, CSS variables)
- JavaScript (vanilla)
- Font Awesome (icons)

No backend is included — the site is purely static. Form submissions are client-side only and do not persist or send emails.

## Project structure

- `index.html` — Home page: hero, featured cars, services, testimonials
- `inventory.html` — Inventory listing UI (search, filters, grid of vehicles)
- `about.html` — Company background, team and location (embedded Google Map)
- `contact.html` — Contact form and company contact details
- `styles.css` — Main stylesheet (CSS variables at the top for easy theming)
- `script.js` — All client-side interactivity (navigation, sliders, form validation, theme toggle)
- `README.md` — This document

## How to run locally

Because this is a static site you can open `index.html` directly in a browser. For a better local experience (and to avoid some browser restrictions for local files), start a simple HTTP server.

Using Python 3 (works on Windows PowerShell):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use VS Code Live Server extension (recommended for quick iteration):
- Install Live Server in VS Code and click "Go Live" while the project folder is open.

Notes:
- The site uses external images and Font Awesome CDN. Make sure you have internet access for those assets to load.

## Customization / Developer notes

- Inventory data: currently hard-coded in the HTML markup. To add or edit vehicles, update the relevant markup in `inventory.html` and `index.html` (featured vehicles).
- Styling: change color variables at the top of `styles.css` (`:root`) to adjust primary/secondary colors and theming defaults.
- JS behavior: `script.js` contains navigation toggles, sliders, typing effect and the contact form validation. If adding features, keep the DOM query selectors in sync with any new markup.
- Contact form: validation and success message are client-side only. To enable real submissions, wire the form to a backend endpoint or a service like Formspree, Netlify Forms, or similar.

## Deployment

The project is already deployed to GitHub Pages (see Live demo link). To redeploy or use another host:

- GitHub Pages: push the repo to a GitHub repository and enable Pages from the repository settings (use `main` branch / root). The current deployment is from this repository.
- Netlify / Vercel: connect your repo and deploy. These services will also auto-deploy from your Git branch.

### Deploy to Netlify (step-by-step)

1. Create a GitHub repository and push this project to it (if not already pushed).
2. Go to https://app.netlify.com and sign up / log in.
3. Click "New site from Git" → choose GitHub and authorize if prompted.
4. Select your repository from the list.
5. For a static site with no build step, leave Build command empty and set Publish directory to `/` (or leave default if using root). If you use a build tool later, set the correct build command (e.g., `npm run build`) and publish folder (e.g., `dist`).
6. Click "Deploy site". Netlify will build and deploy your site and give you a live URL.
7. (Optional) Configure a custom domain and HTTPS in the site settings.

> Note: You can add a Netlify deploy button to this README using the Netlify button SVG and repository URL — replace `<YOUR_REPO_URL>` in the badge link above with your repo URL.

### Deploy to Vercel (step-by-step)

1. Create a GitHub repository and push this project to it.
2. Go to https://vercel.com and sign up / log in.
3. Click "New Project" → import from GitHub and authorize access if needed.
4. Select your repository and follow the import flow. For a static HTML site you can leave the Build & Output settings blank — Vercel will detect it's static.
5. Click "Deploy". Vercel will give you a generated URL and automatically redeploy on pushes.
6. (Optional) Configure a custom domain and set up SSL in Vercel dashboard.

> Tip: When using the deploy buttons above, replace `<YOUR_REPO_URL>` with your repo's full HTTPS URL (for example: `https://github.com/username/repo`).

## Accessibility & responsiveness

- The layout uses semantic HTML elements and is responsive via CSS grid/flex. Further accessibility hardening (aria attributes, form aria-describedby for errors, keyboard traps check) can be added if required.

## Troubleshooting

- If icons or images do not load, check network access (CDN URLs) or replace with local assets.
- If `script.js` throws `null` errors, ensure the elements exist on the page (some pages reuse the script; some selectors may be missing on certain pages). See `script.js` — it already guards some selectors but there are console logs and duplicated code to tidy up if desired.

## Contribution

This is a school/final project — contributions are welcome by forking the repo and opening a PR. Small improvements that add value:

- move inventory items into a JSON file and render them dynamically
- add a lightweight backend or serverless function for contact form submission
- refactor `script.js` to remove duplicate code and improve structure

## License

This project is provided under the MIT License. Feel free to reuse and adapt the code for learning and non-commercial projects.

---

If you want, I can also:
- extract static inventory data into a JSON file and add simple client-side rendering
- add a README badge, screenshots, or example deployment steps for Netlify/Vercel
- run a quick cleanup pass on `script.js` to remove duplicate code and console logs

Tell me which of the above you'd like next and I will implement it.

---
© KHANS TRADING LTD — Final Project
