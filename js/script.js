$(document).ready(function() {
    // Smooth scrolling for navigation
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60
            }, 1000);
        }
    });

    // Typed.js for dynamic text
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-name', {
            strings: ['Engineering Student', 'Tech Enthusiast', 'Future Innovator'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

        new Typed('#typed-description', {
            strings: [
                'Passionate about AI, Machine Learning, and Blockchain',
                'Collaborative problem-solver with a love for technology',
                'Continuous learner exploring cutting-edge tech domains'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Contact Form Submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = $(this).find('input[type="text"]').val();
        const email = $(this).find('input[type="email"]').val();
        const message = $(this).find('textarea').val();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the form data to a backend service
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
});