document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
    

/*   ky kode sherben per hamburger menun te jet aktive dhe te mshefet */

  function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


/*   // Shënjestroni ikonën hamburger dhe menunë
const hamburger = document.getElementById('hamburgermenu');
const navMenu = document.getElementById('nav');

// Shto një event listener për klikimin në ikonën hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ndrysho klasën 'active' për të hapur/mbyllur menunë
}); */