/**
 * Form Module
 * Handles contact form submission and validation
 */

/**
 * Initialize contact form handler
 */
export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.warn('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create and show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `<i class="fas fa-check-circle"></i> Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`;
        
        // Insert message after the form
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
    
    // Add CSS for success message
    addFormSuccessStyles();
    
    console.log('Contact form initialized ✓');
}

/**
 * Add CSS styles for form success message
 */
function addFormSuccessStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-success-message {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideIn 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}
