/**
 * Scroll Module
 * Handles scroll-related functionality including scroll-to-top button and section tracking
 */

import { updateActiveNavLink } from './navigation.js';

let ticking = false;
let lastScrollY = 0;
let scrollBtn = null;

/**
 * Create and initialize scroll-to-top button
 */
export function initScrollToTopButton() {
    // Create scroll-to-top button
    scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Add CSS for scroll-to-top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
    `;
    document.head.appendChild(style);
    
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('Scroll-to-top button initialized ✓');
}

/**
 * Handle scroll events with optimized performance using requestAnimationFrame
 */
function handleScroll() {
    lastScrollY = window.pageYOffset;
    
    // Active navigation link
    const sections = document.querySelectorAll('section');
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (lastScrollY >= sectionTop && lastScrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active nav link
    updateActiveNavLink(current);
    
    // Show/hide scroll-to-top button
    if (lastScrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
    
    // Parallax effect for home section
    const homeSection = document.querySelector('.home-section');
    if (homeSection && lastScrollY < homeSection.offsetHeight) {
        homeSection.style.transform = `translateY(${lastScrollY * 0.5}px)`;
    }
    
    ticking = false;
}

/**
 * Initialize scroll event listener with performance optimization
 */
export function initScrollHandler() {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
    
    console.log('Scroll handler initialized ✓');
}
