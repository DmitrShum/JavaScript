  const products = {
goods: [
      {
        id_product: 100,
        name: 'Брюки',
        price: 2000
      },
      {
        id_product: 110,
        name: 'Рубашка',
        price: 2900
      },
      {
        id_product: 120,
        name: 'Туфли',
        price: 3000
      }
    ],
    writeSite() {
      const myDivProducts = document.createElement('div');
      const p = document.createElement('p');
       
      p.innerHTML = products.goods[0].name + '\n' + products.goods[1].name + '\n' + products.goods[2].name;
      myDivProducts.appendChild(p);

      document.body.appendChild(myDivProducts);      
    }
  };


  const Basket = {
    goods: [
      {
        id_product: 100,
        name: 'Брюки',
        price: 2000,
        quantity: 1
      },
      {
        id_product: 110,
        name: 'Рубашка',
        price: 2900,
        quantity: 1
      },
      {
        id_product: 120,
        name: 'Туфли',
        price: 3000,
        quantity: 1
      }
    ],
    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quantity, 0);
    },
    countBasketQuantity() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.quantity, 0);
    },
    workSite() {
      if (this.countBasketQuantity() > 0) {
        const myDivgoods = document.createElement('div');
        const pgoods = document.createElement('p');
         
        pgoods.innerHTML = 'В корзине ' + this.countBasketQuantity() + ' товара(ов)' + ' на сумму ' + this.countBasketPrice() + ' рубля(ей)' ;
        myDivgoods.appendChild(pgoods);

        document.body.appendChild(myDivgoods);      
      }
      else {
        const myDivgoods = document.createElement('div');
        const pgoods = document.createElement('p');
         
        pgoods.innerHTML = 'Корзина пуста' ;
        myDivgoods.appendChild(pgoods);

        document.body.appendChild(myDivgoods); 
      }
    }
  };
  
  products.writeSite();
  Basket.workSite();
  console.log(Basket.countBasketPrice());