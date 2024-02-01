// function son(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// son(3);

// const son = (number) => {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }

// }

// son(3);
// const son = function son(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }

// son(5);
// function son(num1, num2) {
//     if (num1 >= num2) {
//         return num1;

// }
// return num2;
// }
// console.log(son(3, 5));
// const son = function (num1, num2) {
//     if (num1 >= num2) {
//         return num1;

// }
// return num2;
// }

// console.log(son(3, 5));

// const son = (num1,num2) => {
//     if (num1 >= num2) {
//         return num1;
//     }
//     return num2;
// }

// console.log(son(3, 5));

// function raqam(son) {
//     const sonStr=String(son);
//     const raqamStr=sonStr.split('').reverse().join('');
//     return Number(raqamStr);

// }
// console.log(raqam(3135415135465431));

// const hello= ['h', 'e', 'l', 'l', 'o'];
// const delhello=hello.shift();

// console.log(delhello);

// let a = confirm('Are you sure you want')

// console.log(a);

// let a = prompt('Are you sure you want');

// console.log(a);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// } while(i<10);

// let i=0;
// while(i<10) {
//     console.log(i);
//     i++;
// }

// let answers=[];
// let questions=[
//     'what is your name?',
//     'what is your age?',
//     'what is your favorite color?',

// ];

// for (let i=0; i<questions.length; i++) {
//     answers[i]=prompt(questions[i]);
// }

// console.log(answers);

// let i=0;

// do{
//     answers[i]=prompt(questions[i]);
//     console.log(answers);
//     i++;

// }

// while(i<questions.length);

// let i=0;
// while(i<questions.length) {
//     answers[i]=prompt(questions[i]);
//     console.log(answers);
//     i++;
// }

// let arr=[1,2,3,4,5,6,7,8,9,1];
// let arr1=[1,2,3,4,5,6,7,];
// let result=arr.concat(arr1);

// console.log(arr.concat(arr1));

// const son = number => number ===5;
// const son1= result.find(son);
// console.log(son1);

// const son = number => number1-number2;
// result.sort();
// console.log(result);

// let age = +prompt('yoshingiz nechida')

// // if (age < 18 ) {
// //     alert('xali vohli')
// // } else if (age>80){
// //     alert('endi kechov')
// // } else {
// //     alert('xush kelibsiz')
// // }

// switch (age) {
//     case 18:
//         alert('xali vohli')
//         break;
//     case 80:
//         alert('endi kechov')
//         break;
//     default:
//         alert('xush kelibsiz')
//         break;
// }

// Foydalanuvchidan son olish
// let kiritilganSonMatn = prompt("Istalgan sonni kiriting:");
// let kiritilganSon = parseInt(kiritilganSonMatn);

// Kiritilgan sonni kavadratini hisoblash
// var kavadrati = kiritilganSon * kiritilganSon;

// // Natijani konsolga chiqarish
// console.log("Siz kiritgan sonning kavadrati: " + kavadrati);
// if (kiritilganSon < 0) {
//     console.log('kiritilgan son manfiy');
// } else if (kiritilganSon === 0) {
//     alert('kiritilgan son nolga teng');
// } else if (kiritilganSon > 0) {
//     alert('kiritilgan son musbat')
// } else {
//     alert('nomalum');
// }

// function checknumber(number1, number2) {
//     if (number1 === number2) {
//         console.log('sonlar teng');
// } else if (number1 > number2) {
//     console.log(number1 + ' katta '+ number2 + 'dan');
// } else  {
//     console.log(number1 + ' kichik '+ number2 + 'dan');
// }
// }

// checknumber(100, 100);

// function tekshiriliyotganharf(harf) {
//     const unli =['a','e','i','o','u'];
//     if (unli.includes(harf.toLowerCase())) {
//         console.log(harf + ' unli');
// } else {
//     console.log(harf + ' unli emas');
// }
// }
//  tekshiriliyotganharf('a')

// function oyraqami(oynomi) {
//     switch (oynomi) {
//         case 1:
//             console.log('1-oy yanvar');
//             break;
//         case 2:
//             console.log('2-oy fevral');
//             break;
//         case 3:
//         console.log('3-oy mart');
//         break;
//         case 4:
//             console.log('4-oy april');
//             break;
//         case 5:
//             console.log('5-oy may');
//             break;
//         case 6:
//             console.log('6-oy iyun');
//             break;
//         case 7:
//             console.log('7-oy iyun');
//             break;
//         case 8:
//             console.log('8-oy august');
//             break;
//         case 9:
//             console.log('9-oy sentabr');
//             break;
//             case 10:
//                 console.log('10-oy oktobr');
//                 break;
//                 case 11:
//                     console.log('11-oy noyabr');
//                     break;
//                     case 12:
//                         console.log('12-oy deyabr');
//                         break;

//     }
// }

// oyraqami(1);
// oyraqami(2);
// oyraqami(3);
// oyraqami(4);

// function yonalish(yonalishnomi) {
//     switch (yonalishnomi) {
//         case 'shimol':
//             console.log('janub');

//             break;
//             case 'janub':
//             console.log('shimol');
//             break;
//             case 'garb':
//                 console.log('sharq');
//                 break;
//                 case 'sharq':
//                     console.log('garb');
//                     break;

//     }
// }

// yonalish('janub');
// yonalish('shimol');

// const inRange= (number, min, max) => {
//     if (number >= min && number <= max) {
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida`);
//     }else {
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida emas`);
//     }
// }

// const minRange = 10;

// const maxRange = 30;
// const givenNumber = 20;

// inRange(givenNumber, minRange, maxRange);

// const getLargestElement = (arr) => {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }

// }
// return largest;
// };

// const nums = [26,44,84,5165,];
// const result = getLargestElement(nums);
// console.log(`Eng katta element: ${result}`);

// const headingchange = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent= 'Yangi sarlavha';
// }

// const btn = document.getElementById('changeheading');
// btn.addEventListener('click', headingchange);
// // Function to calculate the sum of an arithmetic series
// function sumArithmeticSeries(firstTerm, lastTerm, commonDifference) {
//     const numberOfTerms = (lastTerm - firstTerm) / commonDifference + 1;
//     const average = (firstTerm + lastTerm) / 2;
//     const sum = numberOfTerms * average;
//     return sum;
//   }

//   // Calculate the sum of the series 1+5+9+...+93+97
//   const firstTerm = 1;
//   const lastTerm = 97;
//   const commonDifference = 4;
//   const sum = sumArithmeticSeries(firstTerm, lastTerm, commonDifference);
//   console.log("The sum of the series 1+5+9+...+93+97 is:", sum);
// function birthday(s, d, m) {
//     let count = 0;

//     for (let i = 0; i <= s.length - m; i++) {
//         let subarray = s.slice(i, i + m);
//         let sum = subarray.reduce((acc, curr) => acc + curr, 0);

//         if (sum === d) {
//             count++;
//         }
//     }

//     return count;
// }

// // Test qilish
// let array = [1, 1, 1, 3, 2,2];
// let month = 2;
// let day = 3;
// let result = birthday(array, day, month);
// console.log(result);  // Natija: 2
// let a =819945;
// let reversedNumber = parseInt(a.toString().split('').reverse().join(''));
// let s=a-reversedNumber

// console.log(s);  // Natija: 321
// let m=997634055;
// let n=984873585;
// let s= 103050157
// ;

//  ;  // Nati
//  function saveThePrisoner(n, m, s) {
//     // Write your code here
//     let qoldiq=m%n-1;
//     let a=s+qoldiq
// return a
// }
// saveThePrisoner(n, m, s)
// console.log(saveThePrisoner(n, m, s))
// let a= " bu so'z polindirom"
// let b=" bu so'z polindirom emas";
// let kiyik='kiyik'
// function polindirom(kiyik) {

// reversepolindirom=kiyik.split('').reverse().join('');
// for (let i = 0; i < reversepolindirom.length; i++) {
//     if (reversepolindirom[i] === kiyik[i]) {
//         return a
//     }else{
//         return b
//     }
// }
// }
// polindirom(kiyik);
// console.log(polindirom(kiyik))

// // 1.
// function number(son) {
//     if(son>0){
//         return +1
//     }else{
//         return -1
//     }
// }
// number(-1);
// console.log(number(-1));
// //--------------------------------//
// //2.
// function number1(a,b) {
//     if(a>b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }
// number1(5,8);
// //------------------------//
// //3.
// function son(a) {
//     if(a>0&&a%2===0){
//         console.log(a**(1/2));
//     }else{
//         console.log(a**2);
//     }
// }
// son(4);
// //--------------------------//
// //4.
// function ekran(a) {
//     if(576<a<720){
//         return
//     }else if(720<a<940){
//         return md
//     }else if(940<a){
//         return lg
//     }
// }
// ekran(1000);
const handleClick = ()=> {
let a=document.getElementsByName('username')[0];
console.log(a.value);

}
// let teg = document.getElementsByClassName('h2'); //
// let teh = document.getElementById('heading');

// console.log(teg[0]);
// console.log(heading);

// function handleClick(){
//     let teg = document.getElementById('root');
//     let elem= document.createElement('div');
//     elem.style.background='red';
//     elem.style.width='300px';
//     elem.style.height='300px';
//     elem.style.margin='10px';

//     teg.appendChild(elem);
// }

// function add(){
//     let inp=document.getElementById('inp').value;

//     let items=document.getElementById('root').childNodes;
//     let status=false;

//     for(let i=0; i<items.length;i++){
//         if(inp==items[i].innerHTML){
//             status=true;
//             document.getElementById('error').style.display='block';
//             break
//         }
//     }

//     if(!status){
//         document.getElementById('error').style.display='none';
//         let elem=document.createElement('p');

//         elem.innerHTML=inp;
//     document.getElementById('root').appendChild(elem);
    
//     document.getElementById('inp').value='';

//     }

   

// }

function add(){
    let inp=document.getElementById('inp').value;

    let items=document.getElementById('root').childNodes;
    let status=false;

    for(let i=0; i<items.length;i++){
        if(inp==items[i].innerHTML){
            status=true;
            document.getElementById('error').style.display='block';
            break
        }
    }

    if(!status){
        document.getElementById('error').style.display='none';
        let elem=document.createElement('p');

        elem.innerHTML=inp;
        document.getElementById('root').appendChild(elem);
    
        document.getElementById('inp').value='';

        // Tahrirlash va o'chirish tugmalarini qo'shish
        let editButton = document.createElement('button');
        editButton.innerHTML = 'Tahrirlash';
        editButton.onclick = function() {
            let editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = inp;
            editInput.onchange = function() {
                elem.innerHTML = editInput.value;
                elem.appendChild(editButton);
                elem.appendChild(deleteButton);
            };
            elem.innerHTML = '';
            elem.appendChild(editInput);
            editInput.focus();
        };
        elem.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'O\'chirish';
        deleteButton.onclick = function() {
            document.getElementById('root').removeChild(elem);
        };
        elem.appendChild(deleteButton);
    }
}

  
 



