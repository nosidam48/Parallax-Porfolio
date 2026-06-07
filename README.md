# Parallax Portfolio

Personal portfolio website for **Madison Tift**, a full stack web developer based in Hamburg, Germany.

A single-page site with parallax scrolling, an about section, a showcase of bootcamp and personal projects, and contact details. Built as a lightweight static site with no build step or backend.

## About

Madison is a full stack developer specializing in React, TypeScript, Node.js, and AWS. Professional experience includes migrating legacy PHP applications to modern React/TypeScript stacks, building component libraries, and deploying full-stack systems on AWS with robust testing (Jest, Cypress). Also experienced with Chakra UI, Next.js, Java, and Go.

Graduate of the University of Central Florida Full Stack Bootcamp. This site highlights earlier portfolio projects alongside current professional background.

**Contact**

- Email: madison.tift68@gmail.com
- GitHub: [nosidam48](https://github.com/nosidam48)
- LinkedIn: [madison-tift-281843170](https://www.linkedin.com/in/madison-tift-281843170/)
- Resume: [assets/Resume.pdf](assets/Resume.pdf)

## Features

- Parallax scrolling sections using Materialize CSS
- About Me section with profile photo and bio
- Portfolio grid with links to live demos and GitHub repos
- Bilingual toggle (English / German) via flag icons in the nav bar
- Resume download linked from the nav and footer
- Responsive layout with Materialize grid utilities

## Featured Projects

| Project | Description |
| --- | --- |
| [Firefly Scramble](https://firefly-scramble.herokuapp.com/) | Word scramble game |
| [Simpsons Trivia Time](https://nosidam48.github.io/Simpsons-Trivia-Time/) | Trivia quiz |
| [NBA GIFs All Day](https://nosidam48.github.io/NBA-GIFS-ALL-DAY/) | GIF search app |
| [DBZ Battle Zone](https://nosidam48.github.io/DBZ-Battle-Zone/) | Browser-based RPG |

## Tech Stack

- HTML5
- CSS3 ([style2.css](style2.css))
- JavaScript ([portfolio.js](portfolio.js))
- [jQuery](https://jquery.com/)
- [Materialize CSS](https://materializecss.com/) (parallax, grid, cards, nav)
- [Google Fonts](https://fonts.google.com/) (Ubuntu)

## Project Structure

```
Parallax-Porfolio/
├── index.html          # Main page
├── style2.css          # Custom styles
├── portfolio.js        # Parallax init and language toggle
├── assets/
│   ├── Resume.pdf      # CV
│   ├── site.webmanifest
│   └── images/         # Photos, parallax art, project thumbnails, icons
└── README.md
```

## Running Locally

No install or build required. Clone the repo and open `index.html` in a browser, or serve the folder with any static file server:

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Testing

A small Jest 30 suite covers language switching and important links. Requires Node 18+.

```bash
npm install
npm test
```

Tests live in `tests/portfolio.test.js` and verify:

- Default English content on page load
- German translations when the German flag is clicked
- Switching back to English with the US flag
- Resume, social, professional, and personal project links

## Deployment

The site is static and can be hosted on GitHub Pages, Netlify, Vercel, or any static hosting provider. Point the host at the repository root so `index.html` is served as the entry point.
