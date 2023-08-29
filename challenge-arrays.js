//1
let array = [1, 2, 3, 4, 5];
let x;
array.push(6);
array.unshift(0);
array.reverse();
console.log(array);

//2
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];
let arr3;

arr3 = arr1.concat(arr2);
//arr3.splice(4, 1)

arr3 = arr3.filter((element, index) => arr3.indexOf(element) === index);

console.log(arr3);

