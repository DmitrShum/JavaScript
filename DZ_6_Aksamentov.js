const cartCatalog = {
    render(product) {
        return `<div class="product">
                    <div><b>Наименование</b>: ${product.product_name}</div>
                    <div><b>Цена за шт.</b>: ${product.price}</div>
                    <button class="addCart" data-id_product="${product.id_product}">В корзину</button>
                </div>`;
    },

};

const catalog = {
    cartCatalog,
    cart: null,
    products: [
    {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 0,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 0,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 0,
        },
    ],

    init(cart) {
        this.catalogListBlock = document.querySelector('.catalog');
        this.cart = cart;

        this.render();
        this.addEventHandlers();                                                     //Кнопка!!!!!!!!!!!
    },
    render() {
            this.catalogListBlock.insertAdjacentHTML('beforeend', '');
            this.products.forEach(product => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.cartCatalog.render(product));
            });
    },

    addEventHandlers() {                                                                 //Кнопка!!!!!!!!!!!
        this.catalogListBlock.addEventListener('click', event => this.addToBasket(event)); 
    },

    addToBasket(event) {
        if (!event.target.classList.contains('addCart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToBasket(id_product);
    },

};

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
};

const cart = {
    cartListBlock: null,
    cartItem,
    catalogList: [],
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 0,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 0,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 0,
        },
    ],
    init(catalogList) {
        this.cartListBlock = document.querySelector('.cart-list');

        this.catalogList = catalogList

        this.render();
    },
    render() {
        this.cartListBlock.innerHTML = '';
        this.cartListBlock.insertAdjacentHTML('beforeend', '<h1>Корзина</h1>');
        this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
        if (this.countBasketQuantity() > 0) {
            
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.countBasketQuantity()} товара(ов) стоимостью ${this.countBasketPrice()}`);
        } else {
            
            this.cartListBlock.insertAdjacentHTML('beforeend', 'Корзина пуста');
        }
    },

    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quantity, 0);
    },
    countBasketQuantity() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.quantity, 0);
    },

    addToBasket(id_product) {
        const product = this.findProductInCatalog(id_product);
        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            findInBasket.quantity++;
            
            this.render();
        }
    },
    findProductInCatalog(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },
};

catalog.init(cart);
cart.init(catalog.products);
