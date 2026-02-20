// --- 1. Custom Cursor Logic ---
const cursor = document.querySelector('.custom_cursor'); 

if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; 
    });
}

// --- 2. Mobile Menu Toggle Logic ---
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active'); 
  menuLinks.classList.toggle('active'); 
};

// Add an event listener to the mobile menu icon
if (menu) {
    menu.addEventListener('click', mobileMenu);
}


// --- 3. Navbar Scrolling Animation Logic ---
const navbar = document.querySelector('.navbar'); 
const scrollThreshold = 36; 

if (navbar) {
    // We attach the listener to the window object to track scrolling
    window.addEventListener("scroll", () => {
        // window.scrollY tracks the vertical scroll position
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add("scrolling");
        } else {
            navbar.classList.remove("scrolling");
        }
    });
}