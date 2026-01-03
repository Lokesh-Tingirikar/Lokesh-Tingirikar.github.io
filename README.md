# Lokesh-Tingirikar.github.io

Personal Portfolio Website

## 🚀 Project Overview

A modern, responsive portfolio website showcasing projects, skills, and contact information. Built with clean HTML, CSS, and JavaScript using a modular architecture for easy maintenance.

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── script.js               # Main JavaScript entry point
├── styles.css              # Main CSS file (imports all modules)
│
├── js/                     # JavaScript modules
│   ├── navigation.js       # Navigation and menu functionality
│   ├── scroll.js           # Scroll handling and scroll-to-top button
│   ├── animations.js       # Fade-in and typing animations
│   ├── form.js             # Contact form handling
│   └── utils.js            # Utility functions
│
└── css/                    # CSS modules
    ├── variables.css       # CSS custom properties (colors, spacing)
    ├── base.css            # Global styles and resets
    ├── navigation.css      # Navigation bar styles
    ├── sections.css        # Section-specific styles (Home, About, Skills, etc.)
    ├── components.css      # Reusable component styles (buttons, cards)
    └── responsive.css      # Media queries for mobile/tablet
```

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Animated Elements**: Fade-in animations for cards and typing effect for hero text
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Interactive contact form with validation
- **Scroll-to-Top Button**: Easy navigation back to the top
- **Modular Code**: Organized into logical modules for easy maintenance

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Custom Properties)
- JavaScript (ES6 Modules)
- Font Awesome Icons

## 📦 Modular Architecture

### JavaScript Modules

- **navigation.js**: Handles all navigation-related functionality including mobile menu toggle and smooth scrolling
- **scroll.js**: Manages scroll events, active section tracking, and scroll-to-top button
- **animations.js**: Contains intersection observer for fade-in effects and typing animation
- **form.js**: Handles contact form submission and success messages
- **utils.js**: Utility functions that can be reused across modules

### CSS Modules

- **variables.css**: Centralized design tokens (colors, shadows, transitions)
- **base.css**: Global resets and foundational styles
- **navigation.css**: All navbar and menu styles
- **sections.css**: Styles for each page section (Home, About, Skills, Projects, Contact, Footer)
- **components.css**: Reusable components like buttons
- **responsive.css**: All media queries for responsive design

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Lokesh-Tingirikar/Lokesh-Tingirikar.github.io.git
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 🔧 Customization

### Changing Colors

Edit `css/variables.css` to change the color scheme:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### Modifying Content

- Edit `index.html` to change text content, sections, and structure
- Modify individual CSS files in the `css/` directory for specific styling changes
- Update JavaScript modules in the `js/` directory for functionality changes

## 🐛 Bug Fixes

- Fixed JavaScript error where `scrollBtn` was referenced before creation
- Organized code into modular files for better maintainability
- Added proper module structure with ES6 imports/exports

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Lokesh Tingirikar**

- GitHub: [@Lokesh-Tingirikar](https://github.com/Lokesh-Tingirikar)

---

Made with ❤️ by Lokesh Tingirikar