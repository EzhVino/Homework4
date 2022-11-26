
// Задание 1
// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     }
//     else if (i % 2) {
//         console.log(`${i} - нечетное число`);
//     }
//     else {
//         console.log(`${i} - четное число`);
//     }
// }

// // Задание 2
// const myArray = [1, 2, 3, 4, 5, 6, 7];
// const newArray = myArray.splice(3, 2);
// console.log(myArray);

// Или так
// const newArray = myArray.slice(0, 3);
// newArray.push(6, 7)
// console.log(newArray);


// Задание 3
// const testArray = [];
// for (let i = 0; i <= 5; i++) {
//     testArray[i] = Math.round(Math.random() * 10);
// }
// console.log(testArray);

// let sum = 0;
// for (let i = 0; i < testArray.length; i++) {
//     sum += testArray[i];
// }

// console.log(sum);

// let minimum = testArray[0];
// for (let i = 0; i < testArray.length; i++) {
//     if (testArray[i] < minimum) minimum = testArray[i];
// }
// console.log(minimum);

// let count = 0;
// for (let i = 0; i < testArray.length; i++) {
//     if (testArray[i] === 3) count++;
// }
// console.log(`Число 3 в массиве присутствует ${count} раз`);

// Задание 4
// const oneMoreArray = [];
// for (let i = 0; i < 10; i++) {
//     oneMoreArray[i] = Math.round(Math.random() * 10);
// }
// console.log(oneMoreArray);

// for (let i = 0; i < oneMoreArray.length; i++) {
//     if (!(oneMoreArray[i] % 2)) console.log(oneMoreArray[i] ** 2);
//     else if (!(oneMoreArray[i] % 3)) console.log(oneMoreArray[i] ** 3);
// }

// Задание 5
// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) count++;
// }
// console.log(arr);
// console.log(`Число 3 в массиве присутствует ${count} раз`);

// Задание 6
// const collection = [1, 2, 3, 4, 5];
// const newCollection = collection.splice(1, 2);
// console.log(collection);

// Задание 7

let output = 'x';
for (let index = 0; index < 20; index++) {
    console.log(output);
    output += 'х';
}