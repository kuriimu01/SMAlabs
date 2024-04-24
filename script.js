/*Task 1 */

// Створення масиву трикутних чисел
let treag = [];
for (let n = 1; n <= 10; n++) {
    treag.push(n * (n + 1) / 2);
}
// Створення масиву квадратів натуральних чисел від 1 до 10
let kvd = [];
for (let i = 1; i <= 10; i++) {
    kvd.push(i * i);
}
// Об'єднання двох масивів у масив rez
let rez = treag.concat(kvd);

//Вивід
let outputDiv1 = document.getElementById('output1');
outputDiv1.innerHTML += `
  <p>Трикутні числа: ${treag.join(" ")}</p>
  <p>Квадрати натуральних чисел: ${kvd.join(" ")}</p>
  <p>Об'єднані масиви: ${rez.join(" ")}</p>
  <p>У зворотньому порядку: ${rez.sort((a, b) => b - a).join(" ")}</p>`;

/*Task 2 */

// Функція для генерації масиву із випадковими числами
function generateRandomArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 50)+1);
  }
  return array;
}

// Функція для знаходження максимального елемента у масиві та його індексу
function findMaxElement(array) {
  let maxElementIndex = 0;
  let maxElement = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > maxElement) {
          maxElement = array[i];
          maxElementIndex = i;
      }
  }
  return { maxElementIndex, maxElement };
}

// Функція для знаходження мінімального елемента у масиві та його індексу
function findMinElement(array) {
  let minElementIndex = 0;
  let minElement = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] < minElement) {
          minElement = array[i];
          minElementIndex = i;
      }
  }
  return { minElementIndex, minElement };
}

function task1(array) {
  let { maxElementIndex, maxElement } = findMaxElement(array);
  let temp = array[array.length - 1];
  array[array.length - 1] = maxElement;
  array[maxElementIndex] = temp;
  return array
}
function task2(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[minElementIndex - 1];
  array[minElementIndex - 1] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task3(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[minElementIndex + 1];
  array[minElementIndex + 1] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task4(array) {
  let { maxElementIndex, maxElement } = findMaxElement(array);
  let temp = array[5];
  array[5] = maxElement;
  array[maxElementIndex] = temp;
  return array
}
function task5(array) {
  let { maxElementIndex, maxElement } = findMaxElement(array);
  array[array.length - 1] = maxElement;
  array[maxElementIndex] = -1;
  return array
}
function task6(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  array[0] = minElement;
  array[minElementIndex] = 9999;
  return array
}
function task7(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[2];
  array[2] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task8(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  array[minElementIndex] = array[0] + array[array.length - 1];
  return array
}
function task9(array) {
  let { maxElementIndex, maxElement } = findMaxElement(array);
  let temp = array[array.length - 2];
  array[array.length - 2] = maxElement;
  array[maxElementIndex] = temp;
  return array
}
function task10(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  array[array.length - 1] = minElement;
  array[minElementIndex] = "3N";
  return array
}
function task11(array, elementIndex) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[elementIndex];
  array[elementIndex] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task12(array) {
  let { maxElementIndex, maxElement } = findMaxElement(array);
  let temp = array[1];
  array[1] = maxElement;
  array[maxElementIndex] = temp;
  return array
}
function task13(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[array.length - 1];
  array[array.length - 1] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task14(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[array.length - 2];
  array[array.length - 2] = minElement;
  array[minElementIndex] = temp;
  return array
}
function task15(array) {
  let { minElementIndex, minElement } = findMinElement(array);
  let temp = array[2];
  array[2] = minElement;
  array[minElementIndex] = temp;
  return array
}

let array = generateRandomArray(15);
document.getElementById('output2').innerHTML = `
  <p>Початковий: ${array.join(" ")}</p>
  <p>Завдання 1: ${task1(array).join(" ")}</p>
  <p>Завдання 2: ${task2(array).join(" ")}</p>
  <p>Завдання 3: ${task3(array).join(" ")}</p>
  <p>Завдання 4: ${task4(array).join(" ")}</p>
  <p>Завдання 5: ${task5(array).join(" ")}</p>
  <p>Завдання 6: ${task6(array).join(" ")}</p>
  <p>Завдання 7: ${task7(array).join(" ")}</p>
  <p>Завдання 8: ${task8(array).join(" ")}</p>
  <p>Завдання 9: ${task9(array).join(" ")}</p>
  <p>Завдання 10: ${task10(array).join(" ")}</p>
  <p>Завдання 11: ${task11(array, 5).join(" ")}</p>
  <p>Завдання 12: ${task12(array).join(" ")}</p>
  <p>Завдання 13: ${task13(array).join(" ")}</p>
  <p>Завдання 14: ${task14(array).join(" ")}</p>
  <p>Завдання 15: ${task15(array).join(" ")}</p>
`;


/*Task 3 */

let array2 = generateRandomArray(15);
// Завдання 1: Знайти кількість чисел, що належать проміжку [a,b], 
// та суму чисел, що стоять на місцях, кратних 3.
function task2_1(array, a, b) {
  let countInRange = array.filter(num => num >= a && num <= b).length;
  let sumOfMultiplesOf3 = array.filter((num, index) => index % 3 === 0).reduce((acc, num) => acc + num, 0);
  return [countInRange.toFixed(1), sumOfMultiplesOf3.toFixed(1)];
}

// Завдання 2: Знайти суму чисел, менших за задане D, і кількість чисел, що стоять на парних місцях
// і більших за задане C.
function task2_2(array, c, d) {
  let sumLessThanD = array.filter(num => num < d).reduce((acc, num) => acc + num, 0);
  let countEvenGreaterThanC = array.filter((num, index) => index % 2 === 0 && num > c).length;
  return [sumLessThanD.toFixed(1), countEvenGreaterThanC.toFixed(1)];
}

// Завдання 3: Знайти добуток усіх чисел, що стоять на місцях, кратних 4, та кількість чисел, не
// більше за задане A.
function task2_3(array, a) {
  let productOfMultiplesOf4 = array.filter((num, index) => index % 4 === 0).reduce((acc, num) => acc * num, 1);
  let countNotGreaterThanA = array.filter(num => num <= a).length;
  return [productOfMultiplesOf4.toFixed(1), countNotGreaterThanA.toFixed(1)];
}

// Завдання 4: Знайти кількість чисел, менших за задане X, і добуток усіх від’ємних чисел, що
// знаходяться на непарних місцях.
function task2_4(array, x) {
  let countLessThanX = array.filter(num => num < x).length;
  let productOfNegativeOdd = array.filter((num, index) => index % 2 === 1 && num < 0).reduce((acc, num) => acc * num, 1);
  return [countLessThanX.toFixed(1), productOfNegativeOdd.toFixed(1)];
}

// Завдання 5: Знайти кількість чисел, що не належать до проміжку (X,Y], та суму від’ємних чисел,
// що знаходяться на парних місцях.
function task2_5(array, x, y) {
  let countNotInRange = array.filter(num => !(num > x && num <= y)).length;
  let sumOfNegativeEven = array.filter((num, index) => index % 2 === 0 && num < 0).reduce((acc, num) => acc + num, 0);
  return [countNotInRange.toFixed(1), sumOfNegativeEven.toFixed(1)];
}

// Завдання 6: Знайти кількість невід'ємних чисел і визначити суму чисел, що знаходяться на місцях,
// кратних 3 і нерівних заданому F.
function task2_6(array, f) {
  let countNonNegative = array.filter(num => num >= 0).length;
  let sumOfMultiplesOf3NotEqualToF = array.filter((num, index) => index % 3 === 0 && num !== f).reduce((acc, num) => acc + num, 0);
  return [countNonNegative.toFixed(1), sumOfMultiplesOf3NotEqualToF.toFixed(1)];
}

// Завдання 7: Знайти середнє арифметичне від'ємних чисел і визначити кількість чисел, що за
// величиною великих А і стоять на парних місцях.
function task2_7(array, a) {
  let negativeNumbers = array.filter(num => num < 0);
  let averageNegativeNumbers = negativeNumbers.length > 0 ? negativeNumbers.reduce((acc, num) => acc + num, 0) / negativeNumbers.length : 0;
  let countGreaterThanAAndEven = array.filter((num, index) => num > a && index % 2 === 0).length;
  return [averageNegativeNumbers.toFixed(1), countGreaterThanAAndEven.toFixed(1)];
}

// Завдання 8: Знайти середнє арифметичне додатних чисел, що стоять на непарних місцях, та
// кількість чисел, менших за задане B.
function task2_8(array, b) {
  let positiveNumbersOnOddPlaces = array.filter((num, index) => num > 0 && index % 2 === 1);
  let averagePositiveNumbers = positiveNumbersOnOddPlaces.length > 0 ? positiveNumbersOnOddPlaces.reduce((acc, num) => acc + num, 0) / positiveNumbersOnOddPlaces.length : 0;
  let countLessThanB = array.filter(num => num < b).length;
  return [averagePositiveNumbers.toFixed(1), countLessThanB.toFixed(1)];
}

// Завдання 9: Знайти середнє арифметичне чисел, що належать проміжку [A,B), та кількість
// додатних чисел, що стоять на місцях, кратних 4.
function task2_9(array, a, b) {
  let numbersInRange = array.filter(num => num >= a && num < b);
  let averageNumbersInRange = numbersInRange.length > 0 ? numbersInRange.reduce((acc, num) => acc + num, 0) / numbersInRange.length : 0;
  let countPositiveMultiplesOf4 = array.filter((num, index) => num > 0 && index % 4 === 0).length;
  return [averageNumbersInRange.toFixed(1), countPositiveMultiplesOf4.toFixed(1)];
}

// Завдання 10: Знайти середнє арифметичні чисел, нерівних заданому С, і добуток недодатних чисел,
// що стоять на парних місцях.
function task2_10(array, c) {
  let numbersNotEqualToC = array.filter(num => num !== c);
  let averageNumbersNotEqualToC = numbersNotEqualToC.length > 0 ? numbersNotEqualToC.reduce((acc, num) => acc + num, 0) / numbersNotEqualToC.length : 0;
  let productOfNonPositiveNumbersOnEvenPlaces = array.filter((num, index) => num <= 0 && index % 2 === 0).reduce((acc, num) => acc * num, 1);
  return [averageNumbersNotEqualToC.toFixed(1), productOfNonPositiveNumbersOnEvenPlaces.toFixed(1)];
}

// Завдання 11: Знайти середнє арифметичне чисел, більших за задане D і які стоять на непарних
// місцях, і визначити кількість чисел, не більших за задане F.
function task2_11(array, d, f) {
  let numbersGreaterThanDOnOddPlaces = array.filter((num, index) => num > d && index % 2 === 1);
  let averageNumbersGreaterThanDOnOddPlaces = numbersGreaterThanDOnOddPlaces.length > 0 ? numbersGreaterThanDOnOddPlaces.reduce((acc, num) => acc + num, 0) / numbersGreaterThanDOnOddPlaces.length : 0;
  let countNotGreaterThanF = array.filter(num => num <= f).length;
  return [averageNumbersGreaterThanDOnOddPlaces.toFixed(1), countNotGreaterThanF.toFixed(1)];
}

// Завдання 12: Знайти середнє арифметичне чисел, що не потрапляють у проміжок [A,B], та кількість
// додатних чисел, що стоять на місцях, кратних 3.
function task2_12(array, a, b) {
  let numbersNotInRange = array.filter(num => num < a || num >= b);
  let averageNumbersNotInRange = numbersNotInRange.length > 0 ? numbersNotInRange.reduce((acc, num) => acc + num, 0) / numbersNotInRange.length : 0;
  let countPositiveMultiplesOf3 = array.filter((num, index) => num > 0 && index % 3 === 0).length;
  return [averageNumbersNotInRange.toFixed(1), countPositiveMultiplesOf3.toFixed(1)];
}

// Завдання 13: Знайти середнє арифметичне ненульових чисел і кількість чисел, що за величиною не
// більше A і що стоять на парних місцях.
function task2_13(array, a) {
  let nonZeroNumbers = array.filter(num => num !== 0);
  let averageNonZeroNumbers = nonZeroNumbers.length > 0 ? nonZeroNumbers.reduce((acc, num) => acc + num, 0) / nonZeroNumbers.length : 0;
  let countNotGreaterThanAAndEven = array.filter((num, index) => num <= a && index % 2 === 0).length;
  return [averageNonZeroNumbers.toFixed(1), countNotGreaterThanAAndEven.toFixed(1)];
}

// Завдання 14: Обчислити добуток чисел, що належать проміжку (A,B], та кількість від’ємних чисел,
// що стоять на місцях, кратних 3.
function task2_14(array, a, b) {
  let numbersInRange = array.filter(num => num > a && num <= b);
  let productOfNumbersInRange = numbersInRange.reduce((acc, num) => acc * num, 1);
  let countOfNegativeMultiplesOf3 = array.filter((num, index) => num < 0 && index % 3 === 0).length;
  return [productOfNumbersInRange.toFixed(1), countOfNegativeMultiplesOf3.toFixed(1)];
}

// Завдання 15: Знайти середнє арифметичне додатних чисел, що стоять на непарних місцях, і
// добуток чисел, менших за задане С.
function task2_15(array, c) {
  let positiveNumbersOnOddPlaces = array.filter((num, index) => num > 0 && index % 2 === 1);
  let averagePositiveNumbersOnOddPlaces = positiveNumbersOnOddPlaces.length > 0 ? positiveNumbersOnOddPlaces.reduce((acc, num) => acc + num, 0) / positiveNumbersOnOddPlaces.length : 0;
  let productOfNumbersLessThanC = array.filter(num => num < c).reduce((acc, num) => acc * num, 1);
  return [averagePositiveNumbersOnOddPlaces.toFixed(1), productOfNumbersLessThanC.toFixed(1)];
}

document.getElementById('output3').innerHTML = `
  <p>Початковий: ${array2.join(" ")}</p>
  <p>Завдання 1: ${task2_1(array2, 3, 8).join(" ")}</p>
  <p>Завдання 2: ${task2_2(array2, 5, 7).join(" ")}</p>
  <p>Завдання 3: ${task2_3(array2, 3).join(" ")}</p>
  <p>Завдання 4: ${task2_4(array2, 4).join(" ")}</p>
  <p>Завдання 5: ${task2_5(array2, 4, 9).join(" ")}</p>
  <p>Завдання 6: ${task2_6(array2, 2).join(" ")}</p>
  <p>Завдання 7: ${task2_7(array2, 3).join(" ")}</p>
  <p>Завдання 8: ${task2_8(array2, 8).join(" ")}</p>
  <p>Завдання 9: ${task2_9(array2, 3, 8).join(" ")}</p>
  <p>Завдання 10: ${task2_10(array2, 5).join(" ")}</p>
  <p>Завдання 11: ${task2_11(array2, 7, 2).join(" ")}</p>
  <p>Завдання 12: ${task2_12(array2, 3, 8).join(" ")}</p>
  <p>Завдання 13: ${task2_13(array2, 3).join(" ")}</p>
  <p>Завдання 14: ${task2_14(array2, 3, 8).join(" ")}</p>
  <p>Завдання 15: ${task2_15(array2, 5).join(" ")}</p>
`;

// Task 4

// Масиви
let fruits = ['apple', 'pineapple', 'mango', 'melon', 'grape'];
let citrus = ['orange', 'lemon', 'lime'];

// Виведення масивів
document.getElementById('output4').innerHTML = `
  <p>Масив fruits: ${fruits.join(", ")}</p>
  <p>Масив citrus: ${citrus.join(", ")}</p>
  <p>Об'єднаний масив: ${fruits.concat(citrus).join(", ")}</p>
  <p>Після вставки: ${fruits.slice(0, 3).concat(['pear', 'cherry', 'plum', 'raspberry', 'strawberry']).concat(fruits.slice(3)).join(", ")}</p>
  <p>Видалення останніх 3 елементів: ${fruits.slice(0, -3).join(", ")}</p>
  <p>В алфавітному порядку: ${fruits.slice().sort().join(", ")}</p>
  <p>В зворотному алфавітному порядку: ${fruits.slice().sort().reverse().join(", ")}</p>
  <p>Відсортований за довжиною слів: ${fruits.slice().sort(function(a, b){ return a.length - b.length; }).join(", ")}</p>
`;
