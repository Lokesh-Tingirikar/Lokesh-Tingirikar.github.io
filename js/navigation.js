/**
 * Navigation Module
 * Handles navigation menu interactions including mobile menu toggle and smooth scrolling
 */

/**
 * Initialize navigation functionality
 */
export function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    console.log('Navigation initialized ✓');
}

/**
 * Initialize smooth scrolling for navigation links
 */
export function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                const hamburger = document.getElementById('hamburger');
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    console.log('Smooth scrolling initialized ✓');
}

/**
 * Update active navigation link based on current section
 * @param {string} currentSectionId - The ID of the current section
 */
export function updateActiveNavLink(currentSectionId) {
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active');
        }
    });
}
