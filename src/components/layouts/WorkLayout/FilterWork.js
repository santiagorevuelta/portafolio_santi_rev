import mixitup from 'mixitup';
import {useEffect, useState} from 'react'
export default function FilterWork(){

    useEffect( () => {
        let mixerPortafolio = mixitup('.work__container', {
            selectors:{
                target: '.work__card'
            },
            animation:{
                duration: 300
            }
        })
    
        const linkWork = document.querySelectorAll('.work__item')
    
        function activeWork(){
            linkWork.forEach(l=> l.classList.remove('active-work'))
            this.classList.add('active-work')
        }
        linkWork.forEach(l=> l.addEventListener('click', activeWork))
    }, [])
}