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









  







// Marrim elementin që përmban të gjitha kartat dhe numrin total të kartave
const cards3 = document.querySelector('.cards3'); 
const card3Count = document.querySelectorAll('.card3').length; 

// Marrim shigjetat për të lëvizur kartat majtas dhe djathtas
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Vendosim indeksin fillestar të kartës aktive dhe gjerësinë e kartës
let card3Index = 0; // Karta që është aktualisht në fokus
let card3Width = document.querySelector('.card3').offsetWidth; // Gjerësia e kartës
let gap = 20; // Hapësira ndërmjet kartave
let interval; // Do të ruajmë intervalin për ndërrimin automatik

// Funksioni për të përditësuar gjerësinë e kartës kur ndryshohet madhësia e ekranit
function updateCard3Width() {
    card3Width = document.querySelector('.card3').offsetWidth + gap; 
}
// Ky funksion thirret për të siguruar që slider-i do të funksionojë siç duhet në madhësi të ndryshme të ekranit, duke përfshirë "responsive" për mobile dhe desktop.

// Funksioni që do të shfaqë përshkrimin e kartës aktive pas një sekonde
function showDescription() {
    // Fshih përshkrimin nga të gjitha kartat
    document.querySelectorAll('.description').forEach(desc => {
        desc.style.opacity = 0;
    });

    // Pas 1 sekonde, shfaq përshkrimin e kartës që është aktualisht aktive (card3Index)
    setTimeout(() => {
        const activeCard = document.querySelectorAll('.card3')[card3Index]; 
        const description = activeCard.querySelector('.description'); 
        description.style.opacity = 1; // Shfaq përshkrimin
    }, 1000); // Ky setTimeout vonon shfaqjen e përshkrimit për 1 sekondë.
}

// Funksioni për të lëvizur kartat djathtas
function slideCard3Right() {
    if (card3Index < card3Count - 2) {
        card3Index++; // Nëse nuk jemi në fund të kartave, shto indeksin për të lëvizur djathtas
    } else {
        card3Index = 0; // Nëse jemi në fund, kthehu në fillim
    }
    const translateX = -(card3Index * card3Width); 
    cards3.style.transform = `translateX(${translateX}px)`; // Lëviz kartat
    showDescription(); // Thirr funksionin që shfaq përshkrimin pas lëvizjes
}

// Funksioni për të lëvizur kartat majtas
function slideCard3Left() {
    if (card3Index > 0) {
        card3Index--; // Nëse nuk jemi në fillim, zvogëlo indeksin për të lëvizur majtas
    } else {
        card3Index = card3Count - 2; // Nëse jemi në fillim, kthehu në fund
    }
    const translateX = -(card3Index * card3Width); 
    cards3.style.transform = `translateX(${translateX}px)`; // Lëviz kartat majtas
    showDescription(); // Thirr funksionin që shfaq përshkrimin pas lëvizjes
}

// Event listeners për butonat (majtas dhe djathtas)
rightArrow.addEventListener('click', slideCard3Right); // Kur klikohet shigjeta djathtas, thirret funksioni për të lëvizur kartat djathtas
leftArrow.addEventListener('click', slideCard3Left); // Kur klikohet shigjeta majtas, thirret funksioni për të lëvizur kartat majtas

// Kur dritarja ridimensionohet (p.sh., nga desktop në mobile), përditëso gjerësinë e kartës
window.addEventListener('resize', updateCard3Width);

// Slider automatik (ndërron kartën çdo 2 sekonda)
function startAutoSlide() {
    interval = setInterval(slideCard3Right, 2000); 
    // Ky funksion fillon një interval, i cili thërret funksionin `slideCard3Right` çdo 2 sekonda.
}

// Ndal slider-in automatik kur përdoruesi kalon mbi slider-in (mouseenter)
function stopAutoSlide() {
    clearInterval(interval); // Ky funksion ndalon intervalin e ndërrimit automatik kur përdoruesi kalon mbi slider-in.
}

// Event listeners për të ndaluar dhe rifilluar slider-in automatik
cards3.addEventListener('mouseenter', stopAutoSlide); // Ndal slider-in kur përdoruesi vendos kursorin mbi të
cards3.addEventListener('mouseleave', startAutoSlide); // Rifillo slider-in automatik kur përdoruesi largon kursorin

// Fillo slider-in automatik kur faqja ngarkohet
startAutoSlide();

// Nise me shfaqjen e përshkrimit për kartën e parë në fillim
showDescription(); 
// Ky funksion siguron që përshkrimi i kartës së parë të shfaqet menjëherë pasi të ngarkohet faqja.
