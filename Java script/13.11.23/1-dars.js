// let num1 = 57;
// let num2 = 10;
// let add = num1 + num2;
// // console.log(add);
// let dic = num1 - num2;
// // console.log(dic);
// let bolish = num1 / num2;
// // console.log(bolish);
// let kop = num1 * num2;
// kop++;
// // console.log(kop);
// let modul = num1 % num2;
// // console.log(modul);
// modul--;
// // console.log(modul);

// let ism = "Xayrullo";
// let familiya = "Ergashev";
// let fullName = ism + " " + familiya;
// console.log(fullName);

// let a = 5;
// let b = 6;

// console.log(a > b);

// let car = {
//   title: "Ferrari",
//   color: "red",
//   balon: true,
//   year: 2024,
// };
// console.log(car);

const yosh = 10 ;
const a = yosh > 18;
const b = yosh < 20;
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);

const htmlPassed = false;
const cssPassed = false;
let massage = '';


if (htmlPassed && cssPassed) {
  massage = 'siz javascript kursini boshlashingiz mumkin!';
} else if (htmlPassed || cssPassed) {
  massage = 'iltimos 2- kursni ham tugating!';
} else {
  massage = 'ikkala kursini ham tugating!';
}

console.log(massage);
