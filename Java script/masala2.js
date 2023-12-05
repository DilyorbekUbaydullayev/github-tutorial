// function qavat(n) {
//     for (let i = 0; i <=n; i++) {
//         let qadam = '';
//         for (let j=n-i; j>0; j--) {
//             qadam+=' ';
//     }   
//     for (let j=1; j<=i; j++) {
//         qadam+='#';
    
// }
// for (let j=1;j>n;j++) {
//     qadam+=' ';
// }
//     for (let j=1; j<=i; j++) {
//         qadam+='#';
//     }
// console.log(qadam);
// }
// }
// qavat(6);

// let sonlar = [5, 2, 8, 1, 7, 3, 9, 4, 6];
// let sonlar2 =sonlar.sort((a, b) => a - b);
// let minson=0;
// let maxson=0;

// console.log(sonlar2); // Natija: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i <4; i++){
//     minson+=sonlar2[i];
// }

// for (let i = sonlar2.length-4; i <sonlar2.length; i++) {
// maxson+=sonlar2[i];
// }

// console.log(minson);

// console.log(maxson);

// function maximalSonVaSoniTopish(array) {
//     if (array.length === 0) {
//         console.log("Array bo'sh");
//         return;
//     }

//     let maximalSon =0;
//     let sonlarSoni = 1;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maximalSon) {
//             maximalSon = array[i];
           
//         } else if (array[i] === maximalSon) {
//             sonlarSoni++;
//         }
//     }

//     console.log("Maximal son:", maximalSon);
//     console.log("Uning nechta ekanligi:", sonlarSoni);
// }

// // Test qilish
// let testArray = [3, 5, 2, 8, 5, 7, 5, 3];
// let s = testArray.sort((a, b) => a - b);
// // maximalSonVaSoniTopish(testArray);
// let max = s.length-1
// console.log(max);


// let a=[2,4];
// let b=[12,32,96];
// function name(a,b) {
//     let sum=0;
//     let s=a.sort((a, b) => a - b);
    
//     for (let i = 0; i < a.length; i++){
//         if(s[s.length-1]%a[i]===0){
//              max=s[s.length-1]
//         }
//         for(let j=0;j<b.length;j++){
//             if(b[j]% max===0){
//                 sum+1;
//             }
//     }
   
// }
// return sum;
// }
// let a=[100];
// let b=0;

// function name(a) {
//     for(let i=0;i<=100;i++){
//         if(a[i]%i===0){
//           b+=i;
//         }
//         console.log(b);
// }
// }
// function findEKOB(array) {
//     let gcd = array[0];
//     let lcm = 1;
  
//     for (let i = 1; i < array.length; i++) {
//       gcd = calculateGCD(gcd, array[i]);
//       lcm *= array[i];
//     }
  
//     return gcd;
//   }
//   function calculateGCD(a, b) {
//     while (b) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
  
//     return a;
//   }
//   const array = [12, 15, 20];
// const ekob = findEKOB(array);
// console.log(ekob); // Output: 60

// let a=[1, 2, 3,3, 4, 5,5];
// let b=0;
// let c=[];

// for (let i =a.length-1; i>0; i--){
//     if(a[i]%a[i-1]!==0){
//         b.push(a[i]);
  
//   }
// }
// console.log(b);

// let arr =[10, 5,20,20, 4, 5, 2,25, 1]
//     let maxscore =[]
//     let minscore =[]
   
//     for (let i = 0; i < arr.length; i++) {
//         let score = arr[i];
        
//         if(score>arr[0]&&!maxscore.includes(score)){
//             maxscore.push(score);
            
//         } else if (score<arr[0]&&!minscore.includes(score)){
//             minscore.push(score);
//         }
        
// }
// let min=minscore.length
// console.log(min);
// function getMoneySpent(keyboards, drives, b) {
    
//     let cost=[];
//     let k=keyboards;
//     let d=drives;
//     for(let i=0;i<k.length;i++){
//         for(let j=0;j<d.length;j++){
//             let sum=k[i]+d[j];
//             if(sum<=b){
//                 cost.push(sum)
//             }else if(cost.length==0){
//                 return -1
//             }
//         }
//     }
//     let s=cost.sort((a,b)=>a-b);
//     let result=s[s.length-1]
// return result
// }
// let keyboards =[]
// console.log();
// function permutationEquation(p) {
//     // Write your code here
//      let result=[];
   
//     let n=p.length;
    
//     // 2x2 matritsa uchun ikkita for loop
// for (let i = 1; i <=n; i++) {
//     for (let j = n; j >0; j--) {
//       if(i===p[p[j-1]]){
//         console.log(j)
//       }
//     }
//   }
  
    

// }
// let p=[2,3,1];
// permutationEquation(p);
// let a=[4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]
// let count=[];
// let result=[]
// let s=a.sort((a,b)=>a-b);
// for(let i=0;i<=a.length-1;i++){
//     for(let j=i+1;j<=a.length;j++){
//         if((Math.abs(s[i]-s[j])===1||s[i]-s[j]===0)){
//           count.push(s[i])
//             break
           
//         }
//     }
    
// }
// for(let i=0;i<count.length;i++){
//     if(count[i]-count[0]<=1){
//         result.push(count[i])
        
//     }
// }
// console.log(result);
// let count=0
// let a=['salom','odam','men','biz']
// for(let i=0;i<a.length;i++){
// count<a[i].length;
// count=a[i].length
// }

let n=3;
console.log('1.');
for(let i=0;i<n;i++){
   
    console.log('k');
}


let a=1;
let b=5;
console.log('2...........................................................');
for(i=a;i<=b;i++){
    console.log(i);
}
console.log(b-a+1+'ta son');




   








