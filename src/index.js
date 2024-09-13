import { createCards, gallery } from './scripts/data'

createCards()

gallery.addEventListener('click',(e)=>{
    if(e.target.nodeName !== "IMG"){
        return
    }
})
