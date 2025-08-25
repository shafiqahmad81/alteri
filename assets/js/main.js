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

hamburgerIcon.addEventListener("click", function(){
  mainMenu.classList.toggle("show");
})

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".main-menu > li");

  menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth < 1024) {
        const dropdown = this.querySelector(".dropdown-wrap");
        const plusIcon = this.querySelector("span .plus");
        const minusIcon = this.querySelector("span .minus");

        if (dropdown) {
          e.preventDefault();

          // আগের সব li রিসেট করো
          document.querySelectorAll(".main-menu > li").forEach(li => {
            const d = li.querySelector(".dropdown-wrap");
            const p = li.querySelector("span .plus");
            const m = li.querySelector("span .minus");

            if (d) d.classList.remove("open");
            if (p) {
              p.style.opacity = "1";
              p.style.width = "10px";
            }
            if (m) {
              m.style.opacity = "0";
              m.style.width = "0";
            }
          });

          // বর্তমান li toggle করো
          dropdown.classList.toggle("open");

          if (dropdown.classList.contains("open")) {
            if (plusIcon) {
              plusIcon.style.opacity = "0";
              plusIcon.style.width = "0";
            }
            if (minusIcon) {
              minusIcon.style.opacity = "1";
              minusIcon.style.width = "10px";
              minusIcon.style.height = "6px";
            }
          } else {
            if (plusIcon) {
              plusIcon.style.opacity = "1";
              plusIcon.style.width = "10px";
            }
            if (minusIcon) {
              minusIcon.style.opacity = "0";
              minusIcon.style.width = "0";
            }
          }
        }
      }
    });
  });
});




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