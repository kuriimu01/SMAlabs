//1. Створення об'єкту з іменами днів тижня:
let weekDays = {
    1: 'Понеділок',
    2: 'Вівторок',
    3: 'Середа',
    4: 'Четвер',
    5: 'П\'ятниця',
    6: 'Субота',
    7: 'Неділя'
};

for (let key in weekDays) {
    console.log(weekDays[key]);
}
//2. Створення об'єкту з назвами місяців:
let months = {
  1: 'Січень',
  2: 'Лютий',
  3: 'Березень',
  4: 'Квітень',
  5: 'Травень',
  6: 'Червень',
  7: 'Липень',
  8: 'Серпень',
  9: 'Вересень',
  10: 'Жовтень',
  11: 'Листопад',
  12: 'Грудень'
};
for (let key in months) {
  console.log(months[key]);
}
//3. Об'єкт користувача та виведення прізвища, ім'я та по батькові:
let user = {
  name: 'Даниїл',
  patronymic: 'Романович',
  surname: 'Бут',
};

console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);
//4. Створення об'єкту з поточною датою:
let currentDate = new Date();
let date = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate()
};

console.log(`${date.year}-${date.month}-${date.day}`);
//5-6. Лапки обов'язкові для ключів, які містять спеціальні символи, пробіли або починаються з цифри. 
//У даному випадку, ключі 1a, с-с, d 4 вимагають лапок.
let obj = {
  '1a': 1,
  'b2': 2,
  'с-с': 3,
  'd 4': 4,
  'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['с-с']);
console.log(obj['d 4']);
console.log(obj.e5);
//7. Піднесення до квадрату кожного елемента об'єкта:
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] * obj[key];
}

console.log(obj);
//8-9. Створіть об'єкт і переконайтеся, що порядок ключів у ньому не має значення.
// Порядок ключів у JavaScript об'єкті не гарантується.
// Отримайте масив ключів наступного об'єкта: 
let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);
//10. Знаходження кількості елементів у об'єкті:
let obj = {x: 1, y: 2, z: 3};
let count = Object.keys(obj).length;
console.log(count);
//11. Виведення елемента об'єкта за допомогою ключа, який зберігається у змінній:
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);
//12. Виправлення помилки:
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);
//13. Виправлення помилки:
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);
//14. Виправлення помилки:
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);
//15. Виправлення помилки:
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);
//16. У наступному коді ключ повинен був взятися зі змінної. Виправте помилку:
let key = 'x';
let obj = {
    [key]: 1,
    y: 2,
    z: 3
};
//17. Звернення до ключів об'єкта через змінні:
let obj = {
  x: 1,
  y: 2,
  z: 3
};
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

console.log(obj[key1]);
console.log(obj[key2]);
console.log(obj[key3]);
//18. Що виведеться в консоль у результаті виконання наступного коду:
let obj = {x: 1, y: 2, z: 3};
console.log('x' in obj); //true
console.log('w' in obj); //false
//19. Що виведеться в консоль у результаті виконання наступного коду: 
let obj = {x: 1, y: 2, z: 3};
delete obj.x;
console.log('x' in obj); // false
//20. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( typeof {x: 1, y: 2, z: 3} ); //object
//21. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( typeof {} ); // object
//22. Не запускаючи код, визначте, що виведеться в консоль: 
let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj ); // object
//23. Не запускаючи код, визначте, що виведеться в консоль: 
let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] ); // number
//24. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( typeof {x: 1, y: 2, z: 3} ); // object
//25. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( typeof [1, 2, 3] ); // object
//26. Не запускаючи код, визначте, що виведеться в консоль: 
let arr = [1, 2, 3];
console.log( typeof arr ); // object
//27. Не запускаючи код, визначте, що виведеться в консоль: 
let arr = [1, 2, 3];
console.log( typeof arr[0] ); // number
//28. Не запускаючи код, визначте, що виведеться в консоль: 
let arr = ['1', '2', '3']; 
console.log( typeof arr[0] ); // string
//29. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( Array.isArray([1, 2, 3]) ); // true
//30. Не запускаючи код, визначте, що виведеться в консоль: 
console.log( Array.isArray({x: 1, y: 2, z: 3}) ); // false
//31. Даний наступний код:
let test = {x: 1, y: 2, z: 3};
console.log(test);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт?  - object
//32. Даний наступний код:
let test = {x: 1, y: 2, z: 3};
console.log(test.x);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт? - примітив
//33. Даний наступний код:
let test = [1, 2, 3];
console.log(test);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт? - object
//34. Даний наступний код:
let test = [1, 2, 3];
console.log(test[1]);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт? - примітив
//35. Даний наступний код:
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт? - object
//36. Даний наступний код:
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1[test2]);
//Який тип даних виведеться в консоль? Це примітив чи об'єкт? - примітив
//37. Перерахуйте всі примітивні типи даних JavaScript.
/*String
Number
Boolean
Undefined
Null */
//38. Не запускаючи код, визначте, що виведеться в консоль:
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
console.log(arr2); // ['a', 2, 3]

//39. Не запускаючи код, визначте, що виведеться в консоль:
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
arr2[1] = 'b';
console.log(arr1); // ['a', 'b', 3]
//40. Не запускаючи код, визначте, що виведеться в консоль:
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
arr2[0] = 'b';
console.log(arr2); // ['b', 2, 3]
//41. Що виведеться в результаті виконання наступного коду:
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // ['a', '!', 'c']
//42. Що виведеться в результаті виконання наступного коду:
const arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr); // Помилка. Константу arr не можна перезначати
//43. Що виведеться в результаті виконання наступного коду:
const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr); // Помилка. Константу arr не можна перезначати
//44. Пошук помилок у коді з об'єктами JavaScript
let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]); // Правильно: Виведення елемента об'єкта

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]); // Помилка: виправлено виведення елемента по ключу

let obj = {x: 1, y: 2, z: 3};
let sum = obj.x + obj.y + obj.z;
console.log(sum); // Помилка: виправлено виведення суми елементів

let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length); // Помилка: виправлено виведення довжини
//45. Перевірка наявності ключа age у об'єкті:
let user = {
  name: "John",
  age: 30
};

if (Object.keys(user).length !== 0 && user.hasOwnProperty('age')) {
  console.log('Об\'єкт не є порожнім і містить ключ age.');
} else {
  console.log('Об\'єкт порожній або не містить ключ age.');
}
//46. Отримання об'єкта з ім'ям "Bob":
let user = [
  {
      name: "John",
      age: 30
  },
  {
      name: "Bob",
      age: 21
  },
  {
      name: "Anna",
      age: 19
  }
];

let bobObject = user.find(item => item.name === "Bob");
//47. Видалення об'єкта з ім'ям "Anna":
user = user.filter(item => item.name !== "Anna");
//48. Сортування масиву об'єктів за зростанням віку:
user.sort((a, b) => a.age - b.age);
//49. Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
const obj = {
  id: 5,
  token: 12343423
};

const { id } = obj;
console.log(id);
//50. Отримайте з об'єкта obj значення id та розмістіть його у константі user Id.
const obj = {
  id: 5,
  token: 12343423
};

const userId = obj.id;
console.log(userId);
