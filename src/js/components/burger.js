export const useBurger = () => {
    const burgerIcon = document.querySelector('.burger');
    const burgerOverlay = document.querySelector('.body');
    burgerIcon.addEventListener('click', () => { 
        burgerIcon.classList.toggle('burger--active');
        burgerOverlay.classList.toggle('body-menu--opened');
    })
}