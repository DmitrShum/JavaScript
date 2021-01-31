var transfNumber = {
    'единицы': 0,
    'десятки': 0,
    'сотни': 0,
}
number = +prompt("Введите число от 0 до 999:");
function transformation(number) {
    var obj = {...transfNumber}
    obj['единицы'] = number % 10;
    obj['десятки'] = (number - obj['единицы']) / 10 % 10;
    obj['сотни'] = (number - obj['единицы'] - obj['десятки']*10) / 100;
    return obj;
}

var transfNumber_1 = transformation(number);
for (num in transfNumber_1) {
    alert(num +' ' + transfNumber_1[String(num)]);
}
//alert(transfNumber_1['единицы'] + 'единицы');
//alert('десятки', transfNumber_1['десятки']);
//alert('сотни', transfNumber_1['сотни']);