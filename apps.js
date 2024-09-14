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
 
  
/* card slider*/

  
  let cardContainer = document.querySelector('.card-container');
let cardIndex = 0;
const totalCards = document.querySelectorAll('.card3').length;

function updateCardsInView() {
    // Përditëso numrin e kartave që shfaqen bazuar në madhësinë e ekranit
    return window.innerWidth <= 585 ? 1 : 2; // Në mobile shfaqet 1 kartë, në desktop 2
}

function updateCardWidth() {
    // Përcakto gjerësinë e kartës bazuar në madhësinë e ekranit
    return window.innerWidth <= 585 ? window.innerWidth - 40 : 300; // Në mobile, gjerësia e kartës është e plotë
}

function slideLeft() {
    cardIndex--;
    const cardsInView = updateCardsInView();
    const cardWidth = updateCardWidth();
    const gap = 20;
    const maxIndex = totalCards - cardsInView;

    if (cardIndex < 0) {
        cardIndex = maxIndex;
    }
    
    let translateX = -(card3Index * (card3Width + gap));
    cardContainer.style.transform = `translateX(${translateX}px)`;
}

function slideRight() {
    cardIndex++;
    const cardsInView = updateCardsInView();
    const cardWidth = updateCardWidth();
    const gap = 20;
    const maxIndex = totalCards - cardsInView;

    if (cardIndex > maxIndex) {
        cardIndex = 0;
    }
    
    let translateX = -(cardIndex * (cardWidth + gap));
    cardContainer.style.transform = `translateX(${translateX}px)`;
}

// Event listeners për shigjetat
document.querySelector('.left-arrow').addEventListener('click', slideLeft);
document.querySelector('.right-arrow').addEventListener('click', slideRight);

// Përditëso layout-in kur ndryshohet madhësia e dritares
window.addEventListener('resize', () => {
    const cardWidth = updateCardWidth();
    const gap = 20;
    let translateX = -(cardIndex * (cardWidth + gap));
    cardContainer.style.transform = `translateX(${translateX}px)`;
});



/*Përmirësimet:
Shigjetat majtas dhe djathtas janë shtuar në HTML me klasat left-arrow dhe right-arrow. Këto shigjeta përdoren për të lëvizur kartat përkatësisht majtas dhe djathtas.
CSS është përditësuar për të vendosur shigjetat në pozicionet e duhura (left dhe right) në krahasim me kontejnerin e kartave.
JavaScript tani përfshin funksione të reja slideLeft dhe slideRight për të menaxhuar lëvizjen e kartave kur klikohen shigjetat.
Funksionimi:
Klikimi në shigjetën majtas lëviz kartat për një pozicion majtas.
Klikimi në shigjetën djathtas lëviz kartat për një pozicion djathtas.
Hover mbi kartat vazhdon të aktivizojë animacionin automatik të lëvizjes djathtas, i cili ndalon kur largohet miu.
Tani ke shigjeta të funksionueshme për të lëvizur kartat në të dy drejtimet, si dhe funksionin e mëparshëm të animacionit automatik me hover.*/ 







 let card3 = document.querySelector('.card3');
  let position = 0;  // Kjo do të mbajë pozicionin aktual të lëvizjes së card3
  
  // Funksioni për të lëvizur card3 djathtas
  function slideCard3Right() {
      position += 100; // Shto 100 pikselë në pozicion
      card3.style.transform = `translateX(${position}px)`;
  }
  
  // Funksioni për të lëvizur card3 majtas
  function slideCard3Left() {
      position -= 100; // Zbrit 100 pikselë nga pozicioni
      card3.style.transform = `translateX(${position}px)`;
  }
  
  // Funksion për të ndryshuar përshkrimin e card3 kur klikon
  function updateCard3Description() {
      const description = card3.querySelector('.description p');
      description.textContent = 'This is the updated description for Card 3!';
  }
  
  // Ngjarjet për klikimet e shigjetave për të lëvizur card3
  document.querySelector('.left-arrow').addEventListener('click', slideCard3Left);
  document.querySelector('.right-arrow').addEventListener('click', slideCard3Right);
  
  // Event për klikim te card3 për të ndryshuar përshkrimin
  card3.addEventListener('click', updateCard3Description); 