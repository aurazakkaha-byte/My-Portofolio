// Function for Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = document.getElementById('toggle-icon');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change icon based on mode
    if (body.classList.contains('dark-mode')) {
        icon.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved user preference on load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.innerText = '☀️';
    }
};
