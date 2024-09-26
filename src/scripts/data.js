import data from '../../assets/data/data.json';

// Populate Gallery
const gallery = document.querySelector('#display__canvas');

const createCards = () => {
    data.forEach(({ imgUrl }) => {
        const card = `<div class="card">
                        <img src="${imgUrl}" class="display__img" loading="lazy">
                      </div>`;

        gallery.insertAdjacentHTML('beforeend', card);
    });
};

// display correct data in modal
const modalImg = document.querySelector('.modal__img'),
    title = document.querySelector('.modal__title'),
    modalDescr = document.querySelector('.modal__descr'),
    modalLink = document.querySelector('.modal__link'),
    modalTech = document.querySelector('.modal__tech');

const modalDisplay = (selectedImg) => {
    const myItem = data.filter(item => item.imgUrl === selectedImg);
    const [{ name, descr, imgUrl, tech, link, id }] = myItem;
    modalImg.src = imgUrl;
    title.textContent = name;
    modalDescr.textContent = descr;
    modalLink.href = link;
    modalLink.textContent = name;
    modalTech.textContent = tech;
}

export { data, gallery, createCards, modalDisplay };
