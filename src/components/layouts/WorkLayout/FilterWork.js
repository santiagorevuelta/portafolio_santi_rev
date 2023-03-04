import mixitup from 'mixitup';
import {useEffect, useState} from 'react'
export default function FilterWork(){

    useEffect( () => {
        const linkWork = document.querySelectorAll('.work__item')

        function activeWork(){
            linkWork.forEach(l=> l.classList.remove('active-work'))
            this.classList.add('active-work')
        }
        linkWork.forEach(l=> l.addEventListener('click', activeWork))
    }, [])
}
