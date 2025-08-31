var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');

cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));

let productList = [];
// card show
const showCards = () => {
  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.innerHTML = `
              <div class="card-image">
              <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class="btn card-btn">Add to Cart</a>
           `;

    cardList.appendChild(orderCard);
    const cardBtn = orderCard.querySelector('.card-btn');
    cardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    });
  });
}

const addToCart = (product) => {
  const cartItem = document.createElement('div');
  cartItem.classList.add('item');
  cartItem.innerHTML = `
<div class="item-image">
                <img src="${product.image}">
              </div>
              <div>
                <h4>${product.name}</h4>
                <h4 class="item-total">${product.price}</h4>
              </div>
              <div class="flex">
                <a href="#" class="quantity-btn">
                  <i class="fa-solid fa-minus"></i>
                </a>
                <h4 class="quantity-value">1</h4>
                <a href="#" class="quantity-btn">
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
`;
cartList.appendChild(cartItem);
}
const initApp = () => {
  fetch('products.json').then
    (response => response.json()).then
    (data => {
      productList = data;
      showCards();
    })
}
initApp();