// function soz(harf) {
//    const Harfstr=String(harf);
//    const sozstr= Harfstr.split('').reverse().join('');
//    return sozstr;
// }

// console.log(soz('Dunyo'));

// function arifmetikprogressiya(a1,an,d) {
//     const n= (an-a1)/d+1;
//     const n2= (a1+an)/2;
//     const sum= n*n2;
//     return sum;
// }

// const a1 = 1;

// const an = 97;

// const d = 4;

// const sum = arifmetikprogressiya(a1,an,d);

// console.log( "1+5+9+...+93+97 = "+sum);

// let arr= [1,3,5,43,843,24,5,17,0,414,4,6,8,3,56,8,34,67,85,644];
// let arrlegth=arr.length;
// console.log("arraydagi sonlar miqdori = " + arrlegth);

// let sumarr = arr.reduce((total, current) => total + current, 0);
// console.log("arraydagi sonlar yigindisi = " + sumarr);

// let array =[1,6,9,12,24,27,46,59,63,80] ;
// let juftarr= array.filter(num => num%2===0).reduce((total, current) => total + current, 0);
// console.log("juft sonlar yigi'ndisi = " + juftarr);

// let arr1= [1,3,5,43,843,24,5,17,0,414,4,6,8,3,56,8,34,67,85,644];

// let yigindi=0;

// for (let i = 0; i < arr1.length; i++) {
//     yigindi+=arr1[i];
// }
// console.log(yigindi);

// let array1 =[1,6,9,12,24,27,46,59,63,80];
// yigindi1=0  ;
// let juftarr1= array1.filter(num => num%2===0);
// for (let i = 0; i < juftarr1.length; i++) {
// yigindi1+=juftarr1[i];
// }

// console.log(yigindi1);

// let soz = "Dunyo";
// let  teskarisoz = "";

// for (let i = soz.length - 1; i >= 0; i--) {
//   teskarisoz += soz[i];
// }

// console.log("1."+teskarisoz);

// 1+5+9+...+93+97

// let a1=1;
// let an=97;
// let d=4;
//  const n= (an-a1)/d+1;
//  const n2= (a1+an)/2;
//  const sum= n*n2;
//  console.log( "2."+"1+5+9+...+93+97 = "+sum);
// let sum=0;

// for ( let i=1; i<97; i++ ) {
// sum+=ar[i]
// }

//  const array= [1,3,5,43,843,24,5,17,0,414,4,6,8,3,56,8,34,67,85,644] ;
//  let length=array.length;
//  let sum1=0;
//  console.log("3.1."+"arraydagi sonlar miqdori = " + length);

//  for (let i = 0; i < array.length; i++) {
//     sum1+= array[i];

//  }
//  console.log("3.2."+"arraydagi sonlar yigindisi = " + sum1);

//  const array1 = [1,6,9,12,24,27,46,59,63,80] ;
//  let sum2=0;
//  for (let i = 0; i < array1.length; i++) {
//     if (array1[i]%2===0){
//      sum2+=array1[i];
//     }
//  }
//  console.log("4.1."+"arraydagi juft sonlar yigi'ndisi = " + sum2);

// a=[5 ,6, 7];
// b=[3,6,10];
// let sum=0;
// let sum1=0;

// for (let i = 0; i < a.length; i++) {
//     if(a[i]>b[i]){
//         sum++;
//     }else if(a[i]<b[i]){
//         sum1++;
//     }
// }
// console.log(sum);
// console.log(sum1);

// let arr=[-1,-2,5,6,8,0,1,2,3,]

// function diagonalDifference(arr) {
//         // Write your code here
//         let sum=0;
//         let sum1=0;
//         for(let i=0;i<arr.length;i+=4){
//             sum+=arr[i];

//         }
//         for(let j=2;j<arr.length-1;j+=2){
//             sum1+=arr[j];

//         }
//         return Math.abs(sum-sum1)

//     }
//     console.log(diagonalDifference(arr));

// let musbat=arr.filter(num=>num>0);

// let manfiy=arr.filter(num=>num<0);

// let nol=arr.filter(num=>num===0);

// let musbatsonlar=musbat.length;

// let manfiysonlar=manfiy.length;

// let nolsonlar=nol.length;

// let musbatson=musbatsonlar/arr.length;

// let manfiyson=manfiysonlar/arr.length;

// let nolson=nolsonlar/arr.length;

// console.log(musbatson);

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     let step = '';
//     // Add spaces to the beginning of the line, equal to the number of lines remaining
//     for (let j = n - i; j > 0; j--) {
//       step += ' ';
//     }
//     // Add # symbols to the line, equal to the line number
//     for (let j = 1; j <= i; j++) {
//       step += '#';
//     }
//     console.log(step);
//   }
// }

// // Example usage:
// staircase(5);

// // Output:
// //    #
// //    ##
// //   ###
// //  ####
// // #####

// function staircase1(n) {
//     for (let i = 1; i <= n; i++) {
//       let step = '';
//       // Add spaces to the beginning of the line, equal to the number of lines remaining
//       for (let j = n - i; j > 0; j--) {
//         step += ' ';

//       }

//       // Add # symbols to the line, equal to the line number
//       for (let j = 1; j <= i; j++) {
//         step += '#';
//       }
//       for (let j = 1; j > n; j++) {
//         step += ' ';
//       }
//       for (let j = 1; j <= i; j++) {
//         step += '#';
//       }

//       console.log(step);
//     }
//   }

//   // Example usage:
//   staircase1(5);

//   Output:
//      #
//      ##
//     ###
//    ####
//   #####

// let ism = 'Dilyorbek';
// console.log(ism.toUpperCase());

// let raqam ='+9989498640204'

// console.log(raqam.replace('9498640204','901234567'));

// let myColor = ["Red", "Green", "White", "Black"];
// let myColorstr=myColor.toString();

// console.log(myColorstr);

// let numbers = [4,5,9];
// let numjoin = numbers.join('');
// console.log(numbers[0], numbers[1], numbers[2]);

// let sports=["Football", "Baseball", "Basketball"];
// sports.splice(2,1);

// console.log(sports);
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  let c = [];

  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1] && !c.includes(ar[i])) {
      c.push(ar[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (c.includes(ar[i])) {
      count++;
    }
  }
  return count;
}

// Test qilish
let n = 9;
let k = [10, 20];
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let result = divisibleSumPairs(n, k, ar);
console.log(result); // Natija: 5
