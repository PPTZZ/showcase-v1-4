import { createCards, modalDisplay, gallery, data } from './scripts/data';

const modal = document.querySelector('.modal__container'),
    closeBtn = document.querySelector('.modal__close-btn');
    

createCards();

gallery.addEventListener('click', e => {
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const selectedImg = e.target.src;
    modal.classList.toggle('hidden');
    modalDisplay(selectedImg);
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});
