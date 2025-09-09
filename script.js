// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide navigation on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile navigation
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    mobileNav.classList.remove('active');
});

function closeMobileNav() {
    mobileNav.classList.remove('active');
}

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Video functionality
function openVideoModal(videoUrl, title) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    const titleElement = document.getElementById('videoModalTitle');
    
    // Set the video URL and title
    iframe.src = videoUrl + '?autoplay=1&rel=0';
    titleElement.textContent = title;
    
    // Show the modal
    modal.classList.add('active');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    // Hide the modal
    modal.classList.remove('active');
    
    // Stop the video by clearing the src
    iframe.src = '';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

// Listen Here button functionality
document.addEventListener('DOMContentLoaded', function() {
    const listenButton = document.querySelector('.listen-button-alt');
    if (listenButton) {
        listenButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.open("https://bandcamp.com/private/NZD7SQ62", "_blank");
        });
    }
});

// // Optional: Add analytics or tracking for social media clicks
// document.addEventListener('DOMContentLoaded', function() {
//     // Track social media clicks (optional)
//     document.querySelectorAll('.social-icon, .footer-social-icon').forEach(icon => {
//         icon.addEventListener('click', function() {
//             const platform = this.getAttribute('title');
//             console.log(`User clicked on ${platform} link`);
//             // You can add analytics tracking here if needed
//             // Example: gtag('event', 'social_click', { platform: platform });
//         });
//     });
// });