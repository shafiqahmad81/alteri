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
