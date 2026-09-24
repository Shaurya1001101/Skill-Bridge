# SkillBridge by Code Hustlers

Welcome to SkillBridge, an open project created by team Code Hustlers for Build For Bharat 2.0.

If you have ever tried switching careers, picking up a new tech stack, or preparing for job interviews, you know how frustrating the process can be. You open five different job descriptions, compare them to your resume, get overwhelmed by buzzwords, and end up staring at a bookmark folder filled with seventy hour video playlists you will probably never finish.

On the other flip side, most skill assessment tools are expensive enterprise software built strictly for corporate HR managers to evaluate employees. Regular students, self taught programmers, and career changers rarely get access to useful, practical tools to diagnose their own skills and bridge their gaps.

We built SkillBridge to change that. It is completely free, open to the public, runs directly in your browser, and focuses on helping you figure out three simple things:
1. Where your skills stand right now.
2. Exactly what you need to learn next for your dream role.
3. How to practice those missing skills hands on without paying for expensive courses or setting up complex local software.

---

## What Can You Do on SkillBridge?

Here is a simple walkthrough of everything you can do on the platform.

### 1. Skill Gap Diagnostic
Instead of guessing whether your resume matches a job, you can paste your background, project notes, or current resume directly into the analyzer.
* Select your target role from the dropdown: Machine Learning Engineer, Data Scientist, MLOps Engineer, Data Engineer, or AI Researcher.
* If you do not have a resume ready or just want to try the platform out, we included five sample profiles (Self Taught Python Learner, Junior Data Analyst, CS Student, Web Developer switching to ML, and Experienced Backend Engineer). Click any sample profile to fill the analyzer instantly.
* Click "Run Skill Diagnostic".
* Within seconds, SkillBridge highlights your confirmed competencies in green, flags your critical missing skills in red, and calculates an honest readiness score so you know where you stand.

### 2. In-Browser LaTeX and Overleaf Studio
Writing your resume and research projects in LaTeX is one of the best ways to produce clean, professional, ATS friendly documents. But setting up TeX environments locally can be a pain.
* We built an interactive LaTeX studio right into the platform.
* Choose from three pre-built starter templates:
  * ATS Friendly Resume: A clean, single column technical CV format that parses reliably in job application systems.
  * ML Research Paper: A formatted academic paper layout with abstract, sections, and mathematical equations.
  * Technical Project Report: A clean document format for capstone projects, benchmarks, and project documentation.
* Edit the LaTeX code on the left, click "Compile Preview", and immediately see a formatted document preview on the right.
* If you prefer working in Overleaf, click "Open in Overleaf" to send the code straight to your Overleaf workspace with a single click.
* You can also click "Download .tex" to save the source code to your computer.
* A built-in LaTeX syntax reference is always accessible right below the editor, helping you remember common commands for math formulas, code blocks, lists, and document styling.

### 3. Interactive Code Labs (Python and SQL)
Reading about code is never enough to truly learn it. You need to write it, run it, and see what happens.
* **Python and Machine Learning Sandbox:** Practice real coding drills covering the core machine learning stack. We included preloaded exercises for Pandas data manipulation, PyTorch tensor matrix math and activation functions, and Scikit-learn train test splits and classification metrics. Type or edit your Python code, hit "Run Code", and check your output in the interactive console with automatic pass fail verification.
* **SQL Query Playground:** Tech interviews and everyday data roles depend heavily on database skills. Our playground lets you write and execute queries against a simulated tech job database. Run queries to filter salary benchmarks, analyze hiring demand growth, and see your query results rendered in clean, readable tables.

### 4. Six-Stage Learning Waypoints Flowchart
One of the biggest reasons people abandon online courses is feeling overwhelmed by massive unstructured lists. We organized the learning journey into a visual 6-stage waypoint flowchart:
* **Waypoint 01: Baseline Diagnostic:** Audit your current skills and establish your baseline score.
* **Waypoint 02: Foundational Code and LaTeX CV:** Polish your Python basics and write an ATS compliant resume.
* **Waypoint 03: Core Competency Bridge:** Master neural network math, PyTorch fundamentals, and model evaluation.
* **Waypoint 04: Lab Sandboxes and CI/CD:** Learn containerization with Docker and serve your models through FastAPI endpoints.
* **Waypoint 05: Masterclass Deep Dives:** Build deep conceptual intuition through visual math and university lectures.
* **Waypoint 06: Capstone and Role Mastery:** Build, test, and document an end to end portfolio project ready to show hiring managers.

Clicking on any waypoint in the flowchart opens a detailed breakdown with specific goals, recommended drills, and linked video lessons. You can mark waypoints as completed as you progress, and the visual progress bar will update automatically.

### 5. Curated Free Video and Platform Hub
You should never have to pay hundreds of dollars for learning materials when incredible open resources already exist. We curated the best zero-paywall learning content on the web and mapped it directly into SkillBridge:
* **3Blue1Brown:** Visual intuition for linear algebra, calculus, and neural networks.
* **DeepLearning.AI and Andrew Ng:** Practical machine learning and deep learning foundations.
* **freeCodeCamp and Daniel Bourke:** Comprehensive deep learning and PyTorch bootcamps.
* **Harvard CS50 and MIT OpenCourseWare:** World class computer science and algorithm lectures.
* **StatQuest with Josh Starmer:** Step by step explanations of statistics and machine learning algorithms.
* **TechWorld with Nana:** Beginner friendly guides to Docker, Kubernetes, and modern DevOps workflows.
* **Kaggle Learn and Overleaf Guides:** Quick interactive micro courses and LaTeX documentation.

You can filter all videos by category (AI, LaTeX, Python, Math, SQL, and DevOps) with a single click to find exactly what you need for your current gap.

### 6. Job Market Intelligence (LinkedIn and Stack Overflow)
To keep your learning grounded in reality, SkillBridge brings together hiring patterns from public LinkedIn tech postings and Stack Overflow developer survey data:
* View median salary bands, annual demand growth, and the most requested skills for roles like Machine Learning Engineer, Data Engineer, MLOps Specialist, and AI Researcher.
* Browse sample job listings from real tech hubs like Bengaluru, Hyderabad, Pune, and remote teams.
* Click the "Match With Profile" button on any job card to instantly compare your profile against that specific job. SkillBridge will tell you which requirements you already meet and highlight the exact missing skills you should focus on next.

### 7. Clean, Lightweight Authentication
SkillBridge keeps things simple and friction free:
* Log in as User with the pre-filled demo account (`user@skillbridge.io` / `User@2024`).
* Or sign up with any email and password you choose.
* Your session is saved locally in your browser storage so your progress stays intact while you explore.
* The header displays your profile as User with an easy one-click sign out button whenever you want to reset.

---

## Design and Accessibility

We deliberately avoided distracting visual gimmicks:
* **Clean Dark Slate Theme:** Built with deep slate grays and crisp royal blue accents for comfortable reading during late night study sessions.
* **No AI Visual Fluff:** No rainbow gradients, no neon glow text, and no floating background blobs.
* **Simple, Clear Language:** Written in everyday human English. No corporate HR jargon, no robotic phrasing, and no confusing punctuation like dashes or emojis.
* **Pure Web Standards:** Built using clean HTML, modern CSS, and vanilla JavaScript. It loads quickly, does not require running heavy node build pipelines, and works smoothly on any device.

---

## File Overview

```text
Skill bridge/
├── index.html     Main application dashboard, skill diagnostic, compilers studio, waypoints, and video hub
├── login.html     Clean authentication and sign-in page with demo credentials
├── app.js         Application logic, skill analysis engine, interactive compilers, and dataset registry
├── styles.css     Design system, dark slate color palette, split pane layout, and responsive styles
└── README.md      Human friendly documentation and feature guide
```

---

## Cloud Deployment and Live Access

Because SkillBridge is engineered entirely with clean, modern web standards (HTML5, Vanilla CSS, and JavaScript), it is static, lightweight, and cloud ready out of the box. There are no heavy server backends, database containers, or complex build pipelines required to host it.

You can host it on any modern cloud platform or content delivery network in minutes.

### Deploying to the Cloud

Here is how you can deploy SkillBridge to popular cloud platforms:

* **Vercel or Netlify:** Connect your Git repository, set the root directory to your project folder, and deploy. Because all files are native static assets, no build command or output directory configuration is needed. It goes live in seconds.
* **GitHub Pages:** Push the code to a GitHub repository, go to Repository Settings, head to the Pages section, and choose the main branch root. GitHub will host it at your public pages URL immediately.
* **Cloudflare Pages or AWS S3 and CloudFront:** Upload the project files directly to your cloud storage bucket or Git connected pages project for global, fast edge delivery.
* **Any Cloud Web Server (Nginx or Apache):** Copy the directory contents to your web server root (such as `/var/www/html`), and your domain will serve the application instantly.

### Accessing the Live Platform

Once deployed to your cloud URL, anyone can use the platform directly in their browser without installing anything:
* Simply open your deployed URL to land on the login page or main dashboard.
* The application runs client-side, meaning all skill diagnostics, LaTeX previews, code sandboxes, and waypoint trackers run smoothly without putting load on your server.

Preloaded demo credentials for evaluating the live cloud deployment:
* **Email:** `user@skillbridge.io`
* **Password:** `User@2024`

### Testing Locally Before Deploying

If you are developing or testing updates before pushing changes to the cloud, you can preview the site locally on your computer:
1. Open your terminal or command prompt in the project folder.
2. Start a simple preview server:
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080/login.html` in your browser to test your changes before deploying to production.

---

## About the Project

SkillBridge was designed and developed by **Code Hustlers** as part of the **Build For Bharat 2.0** initiative. Our mission is to make skill discovery and technical learning accessible, practical, and clear for everyone.
