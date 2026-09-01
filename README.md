# Sanjana Vasanth — Personal Portfolio

A responsive personal portfolio website built for **Sanjana Vasanth**, Computer Science undergraduate and full stack developer, using plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step, no npm required.

## Description

The site is a single-page portfolio generated from Sanjana's resume, featuring a dark indigo-navy theme with amber/teal accents and a "stack" signature visual in the hero (literal frontend/backend/database layers, echoing "full stack developer"). Every fact on the page — name, education, skills, projects, certifications, and contact details — comes directly from the uploaded resume; nothing is invented.

## Features

- Fully responsive layout (320px → 1920px)
- Sticky navbar with scroll-aware background and active-link highlighting
- Mobile hamburger menu with slide-in navigation
- Smooth scrolling between sections
- Scroll-triggered reveal animations (`IntersectionObserver`)
- Signature hero "stack" visual (Frontend / Backend / Database layers)
- Categorized skills grid (Programming Languages, Frontend, Backend, Database, Tools, Concepts)
- Project cards with tech tags and feature bullet points
- Education and certifications sections
- Contact section with real email/phone and a client-side validated contact form
- Back-to-top button
- Downloadable resume (original uploaded PDF, in `assets/`)
- Respects `prefers-reduced-motion` and includes visible keyboard focus states

## Technologies

- HTML5
- CSS3 (custom properties, CSS Grid & Flexbox, no framework)
- Vanilla JavaScript (ES6+)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Folder Structure

```
portfolio-task-1/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── assets/
    └── Sanjana_Vasanth_Resume.pdf
```

## How to Open in VS Code

1. Extract the ZIP file.
2. Open VS Code.
3. `File → Open Folder…` and select the extracted `portfolio-task-1` folder.
4. All files (`index.html`, `css/style.css`, `js/script.js`) will appear in the Explorer panel.

## How to Open in Antigravity

1. Extract the ZIP file.
2. Open Antigravity.
3. Open the extracted `portfolio-task-1` folder as your project workspace.
4. Edit or run the project directly — no additional configuration or dependencies are required.

## How to Run

This project is pure static HTML/CSS/JS — **no npm install is required**.

### Option 1: Python's built-in server

From inside the `portfolio-task-1` folder, run:

```bash
python -m http.server 5500
```

Then open your browser at:

```
http://localhost:5500
```

### Option 2: VS Code Live Server

1. Install the **Live Server** extension in VS Code (by Ritwick Dey).
2. Right-click `index.html` in the Explorer panel.
3. Select **"Open with Live Server"**.
4. Your default browser will open the site automatically (typically at `http://127.0.0.1:5500`).

## Testing Instructions

1. Start the site using either run method above.
2. Verify the navbar links scroll smoothly to each section: Home, About, Skills, Projects, Education, Certifications, Contact.
3. Resize the browser (or use DevTools device toolbar) at 320px, 375px, 480px, 768px, 1024px, 1440px, and 1920px to confirm the responsive layout holds.
4. Below 768px, click the hamburger icon to confirm the mobile menu opens/closes and links close it after navigating.
5. Scroll down to confirm section reveal animations trigger and the "Back to top" button appears after ~480px of scroll.
6. In the Contact section, submit the form with empty/invalid fields to confirm validation messages appear; then submit valid data to confirm the success message displays.
7. Click **Download Resume** (navbar and hero) to confirm the original PDF downloads correctly.
8. Open the browser console and confirm there are no JavaScript errors.

## Notes

- No GitHub or LinkedIn URLs were present in the source resume, so those links/buttons were intentionally omitted rather than invented.
- No prior work experience/internship data was present in the resume, so no separate "Experience" section was created — academic projects and education cover that ground instead.
