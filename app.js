// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Download button click analytics/log
document.querySelector('.download-btn').addEventListener('click', function(){
  alert('Redirecting to Pop!_OS download...');
  // window.location.href = 'https://pop.system76.com/';
});
