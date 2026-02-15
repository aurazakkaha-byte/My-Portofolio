// Toggle Dark Mode Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = document.getElementById('toggle-icon');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Persistence: Keep theme on reload
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.innerText = '☀️';
    }
};
