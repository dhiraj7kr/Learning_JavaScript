// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add an event listener for the button click
themeToggleButton.addEventListener('click', function() {
    // Toggle the 'night-theme' class on the body element
    document.body.classList.toggle('night-theme');
    
    // Check if 'night-theme' class is applied and change the button text accordingly
    if (document.body.classList.contains('night-theme')) {
        this.textContent = 'Switch to Day Mode';
    } else {
        this.textContent = 'Switch to Night Mode';
    }
});