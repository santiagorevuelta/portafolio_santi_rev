
import react, {useEffect, useState} from 'react'
import scrollreveal from 'scrollreveal'
export default function AnimationReveal(){
      useEffect( () => {
        const sr = scrollreveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true,
        })

        sr.reveal('.home__data')
        sr.reveal('.home__handle', {delay: 700})
        sr.reveal('.home__social, .home__scroll', {origin: 'bottom', delay: 900})
        sr.reveal('.about__data, .skills__container, .experience__container, .services__container, .contact__container')
        sr.reveal('.about__img', {origin: 'left'})
        sr.reveal('.skills__content:nth-child(1), .experience__card:nth-child(odd)', {origin: 'left'})
        sr.reveal('.skills__content:nth-child(2), .experience__card:nth-child(even)', {origin: 'right'})
      }, [])
}
