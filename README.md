# Hellsafe | Performance Engineering

A high-performance, technical product showcase website for **Hellsafe**, an advanced active cooling technology built for motorcycle riders by Loar Panghal Private Limited.

## 🚀 Overview

The Hellsafe website is designed to communicate the value of the company's advanced thermal management gear. The design emphasizes a dark, modern, "technical HUD" aesthetic with smooth scroll animations, a responsive product grid, and an interactive gallery.

### Key Features
- **Technical Aesthetic**: A custom dark-mode interface utilizing zinc, yellow (primary), and green (secondary) accents.
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices.
- **Scroll Animations**: Smooth reveal animations as the user scrolls down the page.
- **Product Showcase**: Detailed breakdown of the AeroVest Prime and Vortex Intake components.
- **Interactive Gallery**: A 5-image masonry-style gallery layout.
- **Contact Integration**: Fully functional contact form connected to Formspree.

## 🛠️ Technology Stack
- **HTML5**: Semantic structure.
- **Tailwind CSS (via CDN)**: Rapid, utility-first styling with custom configuration for brand colors and fonts.
- **Vanilla JavaScript**: Lightweight script handling scroll animations, navigation interactions, and gallery functionality.
- **Google Fonts**: Space Grotesk (display headers) and Inter (body copy).
- **Google Material Symbols**: Iconography.

## 📁 Directory Structure
```text
lppl check/
├── website/
│   ├── index.html       # Main HTML file
│   ├── style.css        # Custom CSS and animations
│   └── script.js        # Interactivity and scroll reveals
├── png/                 # Directory containing all high-res assets and images
└── README.md
```
*(Note: For seamless deployment on platforms like Vercel, it is recommended to either move the `png` folder inside the `website` directory or move the code files out to the root directory to fix relative image paths.)*

## 🌐 Deployment (Vercel)

To deploy this website live using Vercel:

1. **Pre-deployment Fix**: Ensure your `index.html` and `png` folder share the correct root relationship. If you deploy the `website/` folder as your root directory, you must move the `png/` folder inside it and update your image paths from `../png/image.png` to `./png/image.png`.
2. Push your code to a GitHub repository.
3. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
4. Import your GitHub repository.
5. If your HTML is inside the `website` folder, set the **Root Directory** to `website` in the Vercel project settings.
6. Click **Deploy**.

## 🤝 The Collective (Team)
- **Aman Loar** - Director
- **Kunal Singh Panghal** - Co Director
- **Dr. Sampath Kumar** - Mentor
- **Dr. Kulwant Singh** - Mentor

## ©️ License
© 2026 Loar Panghal Private limited. All Rights Reserved.
