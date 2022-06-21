
import react, {useEffect, useState} from 'react'
import scrollreveal from 'scrollreveal'
export default function AnimationReveal(){
    useEffect( () => {
        scrollreveal().reveal('.home__data',
        {
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            reset: true,
        })
      }, [])

      useEffect( () => {
        scrollreveal().reveal('.home__handle',
        {
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 700,
            reset: true,
        })
      }, [])

      useEffect( () => {
        scrollreveal().reveal('.home__social',
        {
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
            delay: 900,
            reset: true,
        })
      }, [])
}