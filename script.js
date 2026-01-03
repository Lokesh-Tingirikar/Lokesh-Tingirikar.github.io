/**
 * Main Application Entry Point
 * Coordinates all modules and initializes the portfolio website
 */

import { initNavigation, initSmoothScrolling } from './js/navigation.js';
import { initScrollToTopButton, initScrollHandler } from './js/scroll.js';
import { initFadeInAnimations, initTypingEffect } from './js/animations.js';
import { initContactForm } from './js/form.js';
import { logWelcomeMessage } from './js/utils.js';

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    initSmoothScrolling();
    
    // Initialize scroll functionality
    initScrollToTopButton();
    initScrollHandler();
    
    // Initialize animations
    initFadeInAnimations();
    initTypingEffect();
    
    // Initialize form
    initContactForm();
    
    // Log welcome message
    logWelcomeMessage();
});
