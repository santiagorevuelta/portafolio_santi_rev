
import react, {useEffect, useState} from 'react'
export default function AnimationReveal(){
    useEffect( () => {
        const modalViews = document.querySelectorAll('.work__modal'),
        modalBtns = document.querySelectorAll('.work__button'),
        modalClose = document.querySelectorAll('.work__modal-close')
  
        let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal')
        }
        
        modalBtns.forEach((mb, i) =>{
            mb.addEventListener('click', () => {
                modal(i)
            })
        })
        
        modalClose.forEach((mc) =>{
            mc.addEventListener('click', () =>{
                modalViews.forEach((mv) =>{
                    mv.classList.remove('active-modal')
                })
            })
        })
      }, [])
}