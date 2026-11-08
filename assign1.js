import config from './data-minifed.json' with { type: 'json' };
const grid = document.querySelector("#product-grid");
const twentyproducts = config.products.slice(0,20);




function createProductCard(product){


const box = document.createElement('div'); 
box.classList.add('product-card');    

const thumb = document.createElement('img');
thumb.classList.add('product-thumb')
box.append(thumb);
thumb.alt = product.title;
thumb.src = product.thumbnail;

thumb.addEventListener('click', () => {
    alert(product.id);
});

const info = document.createElement('div');
info.classList.add('product-info');
box.append(info);

const title = document.createElement('h2');
title.classList.add('product-title');
title.textContent = product.title
info.append(title);

const p = document.createElement('p');
p.classList.add('product-price');
p.textContent = '$' + product.price;
info.append(p);

const addBtn = document.createElement('button');
addBtn.classList.add('add-btn');
addBtn.textContent = ' + '
info.append(addBtn);
addBtn.addEventListener('click', () => {
    alert(product.id) + alert(product.title);
});

return box;

}

for (const product of twentyproducts) {
    const card = createProductCard(product);
    grid.append(card);
}



