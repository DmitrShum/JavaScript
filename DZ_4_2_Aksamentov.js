const goods = [
    {
    name: 'Брюки',
    price: 2000,
    quantity: 3
    },
    {
    name: 'Рубашка',
    price: 2900,
    quantity: 5
    },
    {
    name: 'Туфли',
    price: 3000,
    quantity: 2
    }
];

function countBasketPrice (arr) {
    return arr.reduce(function(sum, current) {
        return sum + (current.price * current.quantity); }, 0);
}

alert( countBasketPrice(goods));