/**
 * Utilities Module
 * Contains utility functions used across the application
 */

/**
 * Log a welcome message to the console
 */
export function logWelcomeMessage() {
    console.log('%c Portfolio Website Loaded Successfully! 🚀', 
                'font-size: 16px; font-weight: bold; color: #667eea;');
    console.log('%c All modules initialized and ready', 
                'font-size: 12px; color: #764ba2;');
}

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if element is in viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
