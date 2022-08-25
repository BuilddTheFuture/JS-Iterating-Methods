'use strict';

// Метод 'map' принимает параметром функцию-коллбэк и применяет ее для каждого элементамассива, 
// а затем возвращает измененный массив.
// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) { 
// 	return elem * elem;
// });
// console.log(result); // выведет [1, 4, 9, 16, 25]

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) {
// 	return 0;
// });
// console.log(result); // выведет [0, 0, 0, 0, 0]

// let arr = [2, 4, 6, 1, 3, 5];
// let result = arr.map(function(elem){
//     return Number(Math.sqrt(elem).toFixed(2));
// })
// console.log(result) // [1.41, 2, 2.45, 1, 1.73, 2.24]

// let arr = ['a', 'b', 'c', 'd'];
// let result = arr.map(function(elem){
//     return elem + '!';
// })
// console.log(result) // ['a!', 'b!', 'c!', 'd!']

// let arr = ['at', 'bt', 'ct', 'dt'];
// let result = arr.map(function(elem){
//     return (elem.split('').reverse().join(''));
// })
// console.log(result) // ['ta', 'tb', 'tc', 'td']

// let arr = ['123', '456', '789'];
// let result = arr.map (function(elem){
//     elem = elem.split('');
//     return elem.map (function(num){
//         return Number(num);
//     })
// })
// console.log(result) //  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr.map(function(elem, index){
//     return elem * index;
// })
// console.log(result) // [0, 2, 6, 12, 20, 30, 42, 56]

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });
// console.log(result); // 

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem) { // как map, только массив не видоизменяет
// 	document.write(elem + '<br>', arr + '<br>');
// });

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem, index) {
// 	document.write(index + '. ' + elem + '<br>'); вывели индекс элемента и сам элемент
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem;
// });
// console.log(sum); // 15

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem){
//     sum += elem ** 2;
// })
// console.log(sum); // 55

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) { // выводит значения которые true
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result); // выведет [2, 4]

// Упростим:
// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result); // выведет [2, 4]

// Упростим с помощью стрелочной ф-и:
// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(elem => elem % 2 == 0);
// console.log(result); // выведет [2, 4]

// Поместим в console.log()
// let arr = [1, 2, 3, 4, 5];
// console.log( arr.filter(elem => elem % 2 == 0) );

// let arr = [-3, 2, 4, 6, -3, -1, 9, -4];
// let result = arr.filter (elem => elem > 0);
// console.log(result); // [2, 4, 6, 9] - положительніе числа

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let result = arr.filter (elem => typeof elem !== 'object');
// console.log(result); // вівели обічные єлементы, не массивы

// количество четных элементов:
// let arr = [1, 2, 4, 5, 6, 7, 8];
// console.log(arr.filter(elem => elem % 2 == 0).length);

// Метод every выводит true, если все єлементы выполняют условие
// let arr = [2, 4, 6, 8];
// let result = arr.every(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);

// let arr = [2, 4, 6, 8];
// let result = arr.every(elem => elem % 2 == 0);
// console.log(result); // true

// let arr = [2, 4, 6, 8, 9];
// let result = arr.every(elem => elem % 2 == 0);
// console.log(result); // false

// let arr = [1, 3, 6, 5, 9];
// let result = arr.every(elem => elem > 0);
// console.log(result); // true

// let arr = [1, 3, 6, 5, 9, -1];
// let result = arr.every(elem => elem > 0);
// console.log(result); // false

// Метод Every возвращает true, если хотя бы один элемент выполняет условие
// let arr = [1, 4, 5, 3];
// let result = arr.some(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result); // true

// let arr = [1, 4, 5, 3];
// console.log(arr.some(elem => elem % 2 == 0)); // true

// let arr = [1, 9, 5, 3];
// console.log(arr.some(elem => elem % 2 == 0)); // false

// let arr = [-1, -4, 0, 8, -4];
// console.log(arr.some(elem => elem > 0)) // true
























