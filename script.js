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

//counter-section code
const counters = document.querySelectorAll('.counter');
let started = false; // To make sure counting happens only once

const startCounting = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounting();
        started = true;
        observer.unobserve(entry.target); // stop observing after triggered
      }
    });
  }, { threshold: 0.5 });

observer.observe(document.getElementById('counter-section'));

// Scroll button logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
  // Show button after 50% scroll
  if (window.scrollY > (document.body.scrollHeight / 2)) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top smoothly
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});