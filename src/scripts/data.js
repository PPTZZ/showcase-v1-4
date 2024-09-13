import data from "../../assets/data/data.json"

// Populate Gallery
export const gallery = document.querySelector('#display__canvas');

export const createCards = ()=>{
    data.forEach(({imgUrl})=>{
 
        const card = `<div class="card">
                        <img src="${imgUrl}" loading="lazy">
                      </div>`
        
        gallery.insertAdjacentHTML('beforeend', card);
    })
}

// Modal