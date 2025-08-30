window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-section');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


const hamburgerIcon = document.getElementById("hamburger");
const mainMenu = document.getElementById("menu");
const path = hamburgerIcon.querySelector("svg path");

// Hamburger click: toggle menu
hamburgerIcon.addEventListener("click", function() {
  mainMenu.classList.toggle("show");
});

// Scroll event
// window.addEventListener("scroll", updateHamburgerColor);





const swiper = new Swiper('.mySwiper', {
  spaceBetween: 20,          // Slide এর মাঝে gap
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {                     // Mobile
      slidesPerView: 1.5,    // 1.5 slide দেখাবে
    },
    768: {                   // Tablet or bigger
      slidesPerView: 3,      // 3 slide দেখাবে
    }
  }
});



const swiper2 = new Swiper('.alteri-swiper', {
  slidesPerView: 1.30,   // এক slide + পরের slide এর 0.2 অংশ দেখাবে
  spaceBetween: 16,     // slide এর মধ্যে gap
  centeredSlides: false, // false রাখলে বাম দিক থেকে শুরু হবে
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { // Tablet and above
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: { // Desktop and above
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// Location js

const tabs = document.querySelectorAll(".tab-item");

const circleMap = [
  ["circle-1-outer", "circle-1-inner"],  // All
  ["circle-2-outer", "circle-2-inner"],  // Texas
  ["circle-3-outer", "circle-3-inner"],  // Florida
  ["circle-4-outer", "circle-4-inner"]   // California
];

// original radius
const circleOriginalR = {
  "circle-1-inner": 7.5,
  "circle-1-outer": 14.5,
  "circle-2-inner": 7.5,
  "circle-2-outer": 14.5,
  "circle-3-inner": 7.5,
  "circle-3-outer": 14.5,
  "circle-4-inner": 7.5,
  "circle-4-outer": 14.5
};

// active radius (enlarged)
const circleActiveR = {
  "circle-1-inner": 10,
  "circle-1-outer": 18,
  "circle-2-inner": 10,
  "circle-2-outer": 18,
  "circle-3-inner": 10,
  "circle-3-outer": 18,
  "circle-4-inner": 10,
  "circle-4-outer": 18
};

// প্রথম tab ডিফল্ট active
setActiveCircle(0);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // সব tab active সরানো
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    // circle update
    setActiveCircle(index);
  });
});

function setActiveCircle(index) {
  // সব circle reset
  circleMap.flat().forEach(id => {
    const el = document.getElementById(id);
    if(el) {
      el.setAttribute("fill", "#0020C3");
      el.setAttribute("r", circleOriginalR[id]);
    }
  });

  // active circle update
  circleMap[index].forEach(id => {
    const el = document.getElementById(id);
    if(el) {
      el.setAttribute("fill", "#44CC3B");
      el.setAttribute("r", circleActiveR[id]);
    }
  });
}

// tab-item

document.addEventListener("DOMContentLoaded", () => {
  const tab = document.querySelectorAll(".tab-item");
  const areas = document.querySelectorAll(".location-area");

  // প্রথম tab active
  areas.forEach(area => area.classList.remove("active"));
  document.querySelector(".all-area").classList.add("active");

  tab.forEach(tab => {
    tab.addEventListener("click", () => {
      // সব tab থেকে active সরানো
      tab.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // সব location-area hide
      areas.forEach(area => area.classList.remove("active"));

      // data-target অনুযায়ী show
      const targetClass = tab.getAttribute("data-target");
      const targetArea = document.querySelector(`.${targetClass}`);
      if(targetArea) targetArea.classList.add("active");
    });
  });
});


// tab

document.querySelectorAll('.tab-item').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // remove active from all buttons
    document.querySelectorAll('.tab-item').forEach(btn => btn.classList.remove('active'));
    // remove active from all panels + hide them
    document.querySelectorAll('.location-area').forEach(panel => {
      panel.classList.remove('active');
      panel.classList.add('hidden');
    });

    // add active to clicked button
    button.classList.add('active');

    // show target panel and add active class
    const panel = document.querySelector('.' + target);
    if (panel) {
      panel.classList.remove('hidden');
      panel.classList.add('active');
    }
  });
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    document.getElementById("hamburger").classList.add("scrolled");
  } else {
    document.getElementById("hamburger").classList.remove("scrolled");
  }
});




document.addEventListener("DOMContentLoaded", function() {
  // যেকোনো .main-menu li .icon কে target করা
  const icons = document.querySelectorAll(".main-menu li span.icon");

  icons.forEach(icon => {
    icon.addEventListener("click", function(e) {
      if(window.innerWidth < 992){ // Mobile only
        e.preventDefault();
        const li = icon.closest("li"); // icon থেকে closest li
        
        if(!li) return; // safety check

        // অন্য খোলা dropdown বন্ধ করা
        document.querySelectorAll(".main-menu li.open").forEach(openLi => {
          if(openLi !== li) openLi.classList.remove("open");
        });

        // Current li toggle
        li.classList.toggle("open");
      }
    });
  });
});

// video control

// document.getElementById("playBtn").addEventListener("click", function () {
//   document.getElementById("banarIfram").style.opacity = "1";
//   document.getElementById("playBtn").style.opacity = "0";
// });