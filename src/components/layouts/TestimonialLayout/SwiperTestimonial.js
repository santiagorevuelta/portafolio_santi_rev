
import react, {useEffect, useState} from 'react'
import Swiper from 'swiper'
export default function SwiperTestimonial(){
    useEffect( () => {
        let swiperTestimonial = new Swiper(".testimonial__container",{
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
        
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            },
        });
      }, [])
}