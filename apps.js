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
      





/* kodi qe kam provuar per te bere scrollUp buttonin te shkoj lart dhe te mshefet */






window.onscroll = function() {
  scrollFunction();
 };


  function scrollFunction() {
    const scrollUp =document.getElementById("scrollUp");

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollUp.style.display = "inline";
    } else {
      scrollUp.style.display = "none";
    }
  }

  function scrollToTop() {
    console.log("scrolling function called");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
  }