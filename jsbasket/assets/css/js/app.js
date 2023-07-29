let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
      id: 1,
      name: 'PRODUCT NAME 1',
      Image: '1.PNG',
      price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 130000
      },
      {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.png',
        price: 220000
      },
      {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 125000
      },
      {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 150000
      },
      {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 160000
      },

];
let listCards = [];
function initApp(){
products.forEach(function (value, key) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
    <img src="image/${value.image}"/>
    <div class ="titile">${value.name}</div>
    <div class ='price'>${value.price.toLocaleString()}</div>
    <button oneclick="addToCard(${key})">Add To Card</button>
  `;
    list.appendChild(newDiv);

})
}
initApp();
