
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const useInsightSwiper = () => {
    new Swiper('.insight__slider',  {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        modules: [Pagination],
        pagination: {
            el: '.insight__pagination',
            type: 'fraction',
        },
        breakpoints: {
            993: {
                centeredSlides: false,
            }
        }
    });
}
export const useTestimSwiper = () => {
    new Swiper('.testimonials__slider', {
        slidesPerView: 'auto',
        autoplay: 1000,
        modules: [Navigation],
        navigation: {
            nextEl: '.testimonials__slider-next',
            prevEl: '.testimonials__slider-prev',
        }
    })
}