// হিরো ইমেজ স্লাইডার

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// মোবাইল ভার্সন ন্যাভিগেশন বার
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('toggle-menu')
const closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})
// link-1

const navMenus = document.getElementById('nav-menu-1')
const toggleMenus = document.getElementById('toggle-menu-1')
const closeMenus = document.getElementById('close-menu-1')

toggleMenus.addEventListener('click', () => {
    navMenus.classList.toggle('show_menu_1')
})
closeMenus.addEventListener('click', () => {
    navMenus.classList.remove('show_menu_1')
})
// link-2
const navMenua = document.getElementById('nav-menu-2')
const toggleMenua = document.getElementById('toggle-menu-2')
const closeMenua = document.getElementById('close-menu-2')

toggleMenua.addEventListener('click', () => {
    navMenua.classList.toggle('show_menu_2')
})
closeMenua.addEventListener('click', () => {
    navMenua.classList.remove('show_menu_2')
})
// link-3
const navMenub = document.getElementById('nav-menu-3')
const toggleMenub = document.getElementById('toggle-menu-3')
const closeMenub = document.getElementById('close-menu-3')

toggleMenub.addEventListener('click', () => {
    navMenub.classList.toggle('show_menu_3')
})
closeMenub.addEventListener('click', () => {
    navMenub.classList.remove('show_menu_3')
})

// link-4
const navMenuc = document.getElementById('nav-menu-4')
const toggleMenuc = document.getElementById('toggle-menu-4')
const closeMenuc = document.getElementById('close-menu-4')

toggleMenuc.addEventListener('click', () => {
    navMenuc.classList.toggle('show_menu_4')
})
closeMenuc.addEventListener('click', () => {
    navMenuc.classList.remove('show_menu_4')
})

// link-5
const navMenud = document.getElementById('nav-menu-5')
const toggleMenud = document.getElementById('toggle-menu-5')
const closeMenud = document.getElementById('close-menu-5')

toggleMenud.addEventListener('click', () => {
    navMenud.classList.toggle('show_menu_5')
})
closeMenud.addEventListener('click', () => {
    navMenud.classList.remove('show_menu_5')
})

// link-6
const navMenue = document.getElementById('nav-menu-6')
const toggleMenue = document.getElementById('toggle-menu-6')
const closeMenue = document.getElementById('close-menu-6')

toggleMenue.addEventListener('click', () => {
    navMenue.classList.toggle('show_menu_6')
})
closeMenue.addEventListener('click', () => {
    navMenue.classList.remove('show_menu_6')
})

// link-7
const navMenuf = document.getElementById('nav-menu-7')
const toggleMenuf = document.getElementById('toggle-menu-7')
const closeMenuf = document.getElementById('close-menu-7')

toggleMenuf.addEventListener('click', () => {
    navMenuf.classList.toggle('show_menu_7')
})
closeMenuf.addEventListener('click', () => {
    navMenuf.classList.remove('show_menu_7')
})

// link-8
const navMenug = document.getElementById('nav-menu-8')
const toggleMenug = document.getElementById('toggle-menu-8')
const closeMenug = document.getElementById('close-menu-8')

toggleMenug.addEventListener('click', () => {
    navMenug.classList.toggle('show_menu_8')
})
closeMenug.addEventListener('click', () => {
    navMenug.classList.remove('show_menu_8')
})

// link-9
const navMenuh = document.getElementById('nav-menu-9')
const toggleMenuh = document.getElementById('toggle-menu-9')
const closeMenuh = document.getElementById('close-menu-9')

toggleMenuh.addEventListener('click', () => {
    navMenuh.classList.toggle('show_menu_9')
})
closeMenuh.addEventListener('click', () => {
    navMenuh.classList.remove('show_menu_9')
})

// link-10
const navMenuj = document.getElementById('nav-menu-10')
const toggleMenuj = document.getElementById('toggle-menu-10')
const closeMenuj = document.getElementById('close-menu-10')

toggleMenuj.addEventListener('click', () => {
    navMenuj.classList.toggle('show_menu_10')
})
closeMenuj.addEventListener('click', () => {
    navMenuj.classList.remove('show_menu_10')
})

// link-11
const navMenui = document.getElementById('nav-menu-11')
const toggleMenui = document.getElementById('toggle-menu-11')
const closeMenui = document.getElementById('close-menu-11')

toggleMenui.addEventListener('click', () => {
    navMenui.classList.toggle('show_menu_11')
})
closeMenui.addEventListener('click', () => {
    navMenui.classList.remove('show_menu_11')
})

// মোবাইল ভার্সন ন্যাভিগেশন বার শেষ এখানে