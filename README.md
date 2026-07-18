# Maria Asad — Portfolio

A professional single-page portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

## 🚀 Deploy to GitHub Pages (Free)

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top-right) → **New repository**
3. Name it: `maria-asad` (or anything you like)
4. Keep it **Public**
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

### Step 2: Push This Code
Run these commands in this folder (`projects/portfolio/`):

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Branch**, select `main` and folder `/ (root)`
4. Click **Save**
5. Wait ~1 minute — your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Optional: Add a Profile Photo
Replace the placeholder in the About section by adding your photo:
1. Save your photo as `profile.jpg` inside `assets/images/`
2. In `index.html`, find the `<div class="about__image-placeholder">` block
3. Replace it with:
   ```html
   <img src="assets/images/profile.jpg" alt="Maria Asad" class="about__image">
   ```
4. Add this CSS to `style.css`:
   ```css
   .about__image {
       width: 200px;
       height: 200px;
       border-radius: 50%;
       object-fit: cover;
       box-shadow: 0 8px 30px rgba(200, 150, 102, 0.3);
   }
   ```

## 📁 Folder Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactive features
├── assets/
│   └── images/         # Images (profile photo, etc.)
└── README.md           # This file
```

## 🛠️ Local Development

Just open `index.html` in your browser — no server needed.

Or use any static server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve .
```

## ✨ Features

- Clean, modern design
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Scroll-reveal animations
- Mobile hamburger menu
- Print-friendly styles
- No external dependencies
