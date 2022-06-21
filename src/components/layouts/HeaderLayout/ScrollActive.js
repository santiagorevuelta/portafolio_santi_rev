import {useEffect, useState} from 'react'
export default function scrollActive(){
    const scrollY = window.pageYOffset
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
    
}
window.addEventListener('scroll', scrollActive)