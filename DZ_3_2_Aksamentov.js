const goods = [
['Брюки', 2000, 3],
['Рубашка', 2900, 5],
['Туфли', 3000, 2]
]; // [наименование, цена, количество]

function countBasketPrice (arr) {
    return arr.reduce(function(sum, current) {
        return sum + (current[1] * current[2]); }, 0);
}

alert( countBasketPrice(goods));
