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

const cards3 = document.querySelector('.cards3');
const card3Count = document.querySelectorAll('.card3').length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let card3Index = 0;
let card3Width = document.querySelector('.card3').offsetWidth;
let gap = 20; // Hapësira midis kartave
let interval;

// Llogaritja e distancës për të lëvizur kartat
function updateCard3Width() {
    card3Width = document.querySelector('.card3').offsetWidth + gap;
}

// Funksioni për të lëvizur kartat djathtas
// Funksioni për të shfaqur përshkrimin pas 1 sekonde
function showDescription() {
  // Hiq përshkrimin nga të gjitha kartat
  document.querySelectorAll('.description').forEach(desc => {
      desc.style.opacity = 0;
  });

  // Shfaq përshkrimin vetëm për kartën aktive pas 1 sekonde
  setTimeout(() => {
      const activeCard = document.querySelectorAll('.card3')[card3Index];
      const description = activeCard.querySelector('.description');
      description.style.opacity = 1; // Shfaq përshkrimin
  }, 1000); // 1 sekondë vonesë
}

// Funksioni për të lëvizur kartat djathtas
function slideCard3Right() {
  if (card3Index < card3Count - 2) {
      card3Index++;
  } else {
      card3Index = 0;
  }
  const translateX = -(card3Index * card3Width);
  cards3.style.transform = `translateX(${translateX}px)`;
  showDescription(); // Shfaq përshkrimin pas ndërrimit të kartës
}

// Funksioni për të lëvizur kartat majtas
function slideCard3Left() {
  if (card3Index > 0) {
      card3Index--;
  } else {
      card3Index = card3Count - 2;
  }
  const translateX = -(card3Index * card3Width);
  cards3.style.transform = `translateX(${translateX}px)`;
  showDescription(); // Shfaq përshkrimin pas ndërrimit të kartës
}

// Nise me shfaqjen e përshkrimit për kartën e parë në fillim
showDescription();


// Event listeners për shigjetat
rightArrow.addEventListener('click', slideCard3Right);
leftArrow.addEventListener('click', slideCard3Left);

// Kur dritarja ridimensionohet, përditëso gjerësinë e kartës
window.addEventListener('resize', updateCard3Width);

// Slider automatik (ndryshon kartën çdo 2 sekonda)
function startAutoSlide() {
    interval = setInterval(slideCard3Right, 4000);
}

// Ndal slider-in automatik kur është në hover
function stopAutoSlide() {
    clearInterval(interval);
}

// Event listeners për të ndaluar/slidere automatik kur përdoruesi kalon mbi slider-in
cards3.addEventListener('mouseenter', stopAutoSlide);
cards3.addEventListener('mouseleave', startAutoSlide);

// Fillo slider-in automatik kur ngarkohet faqja
startAutoSlide();



