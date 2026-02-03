const titles = document.querySelectorAll('.title');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    if(scrollY >= 700) {
        titles[1]. classList.add('active');
    }
});