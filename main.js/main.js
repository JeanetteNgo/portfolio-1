const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('navLink');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('.navActive')
    });
}
navSlide();