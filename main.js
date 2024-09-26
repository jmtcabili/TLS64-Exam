let lastScrollTop = 0;
const navbar = document.getElementById("navbar");


window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        navbar.classList.add('visible');
        console.log("yes")
    } else {
        navbar.classList.remove('visible');
    }
  lastScrollTop = scrollTop;
});