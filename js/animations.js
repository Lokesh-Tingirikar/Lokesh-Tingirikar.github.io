/**
 * Animations Module
 * Handles visual animations and effects including fade-in animations and typing effects
 */

/**
 * Initialize intersection observer for fade-in animations on cards
 */
export function initFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log('Fade-in animations initialized ✓');
}

/**
 * Initialize typing effect for the home section headline
 */
export function initTypingEffect() {
    const typingText = document.querySelector('.animate-text');
    if (!typingText) return;
    
    const originalText = typingText.innerHTML;
    typingText.innerHTML = '';
    let charIndex = 0;
    
    function type() {
        if (charIndex < originalText.length) {
            typingText.innerHTML += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(type, 500);
    
    console.log('Typing effect initialized ✓');
}
