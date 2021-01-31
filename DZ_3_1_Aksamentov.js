// Задание № 1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const arr = [];
const arr_prost = [1];
let it = 0;
let it_in = 1;
let count_it = 0;

for (i = 1; i <= 100; i++) { // Создаю спсиок от 1 до 100
arr.push(i);
}

while (it < 100) {    // Цикл для нахождения простых чисел от 1 до 100
    it++;
    while (it_in < it) {
        if (arr[it] % arr[it_in] == 0) count_it++;
        if (count_it > 0) break;
        it_in++;
    }
    if (count_it == 0) arr_prost.push(arr[it]);
    count_it = 0;
    it_in = 1;
}
alert(arr_prost);