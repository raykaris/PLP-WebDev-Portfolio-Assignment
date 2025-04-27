// Theme Change code
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const body = document.body;


function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        body.style.backgroundColor = 'var(--bg-dark)';
        body.style.color = 'var(--text-dark)';
        icon.className = 'bx bx-sun'; // Change to sun icon
    } else {
        body.classList.remove('dark');
        body.style.backgroundColor = 'var(--bg-light)';
        body.style.color = 'var(--text-light)';
        icon.className = 'bx bx-moon'; // Change back to moon icon
    }
      localStorage.setItem('darkMode', isDark);
    }

    toggleBtn.addEventListener('click', () => {
      const isDark = body.classList.contains('dark');
      setTheme(!isDark);
    });

    window.addEventListener('DOMContentLoaded', () => {
      const isDark = JSON.parse(localStorage.getItem('darkMode'));
      setTheme(isDark);
    });

//typed js
const typed = new Typed('.multi-text', {
    strings: ['Web Developer', 'App Developer', 'Photographer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });