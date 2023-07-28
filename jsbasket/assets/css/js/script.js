const products = [
    { id: 1, name: 'Товар 1', category: 'Категория 1', price: 100 },
    { id: 2, name: 'Товар 2', category: 'Категория 2', price: 200 },
    // Добавьте остальные товары...
  ];
  
  function renderProducts(category) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      if (!category || product.category === category) {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>${product.name} - ${product.price} руб.</p>`;
        productsContainer.appendChild(productElement);
      }
    });
  }

  const basket = {
    items: [],
    total: 0,
  
    addToBasket: function (product) {
      this.items.push(product);
      this.total += product.price;
    },
  
    removeFromBasket: function (product) {
      const index = this.items.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.items.splice(index, 1);
        this.total -= product.price;
      }
    },
  
    updateBasketUI: function () {
      const basketItems = document.querySelector('.basket-items');
      basketItems.innerHTML = '';
      this.items.forEach(item => {
        const basketItemElement = document.createElement('li');
        basketItemElement.textContent = `${item.name} - ${item.price} руб.`;
        basketItems.appendChild(basketItemElement);
      });
  
      const totalPriceElement = document.querySelector('.total-price');
      totalPriceElement.textContent = this.total;
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Добавляем обработчик для фильтров
    const filterItems = document.querySelectorAll('.filter input[type="checkbox"]');
    filterItems.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        const selectedCategory = this.value;
        renderProducts(selectedCategory);
      });
    });
  
    // Добавляем обработчик для кнопок добавления в корзину
    const productsContainer = document.querySelector('.products');
    productsContainer.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const productId = parseInt(event.target.dataset.productId);
        const product = products.find(item => item.id === productId);
        if (product) {
          basket.addToBasket(product);
          basket.updateBasketUI();
        }
      }
    });
  
    // Добавляем обработчик для кнопок удаления из корзины
    const basketItems = document.querySelector('.basket-items');
    basketItems.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const productId = parseInt(event.target.dataset.productId);
        const product = products.find(item => item.id === productId);
        if (product) {
          basket.removeFromBasket(product);
          basket.updateBasketUI();
        }
      }
    });
  });
  
  // Начальное отображение всех товаров
  renderProducts();
  
   