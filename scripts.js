document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to the clicked menu item
            this.classList.add('active');
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
    });
});


const slider = document.querySelector('.projects-slider');

document.querySelector('.scroll-left').addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.scroll-right').addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});