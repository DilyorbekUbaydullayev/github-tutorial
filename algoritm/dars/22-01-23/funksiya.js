// function appendAndDelete(s, t, k) {
//     let s1 = s.split('');
//     let t1 = t.split('');
//     let count = 0;
//     let yes = 'Yes';
//     let no = 'No';

//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] == t1[i]) {
//             count++;
//         } else {
//             break;
//         }
//     }

//     let sum = s1.length + t1.length - 2 * count;

//     if (sum > k) {
//         return no;
//     } else if ((s1.length + t1.length - k) % 2 == 0) {
//         return yes;
//     } else if (k >= s1.length + t1.length) {
//         return yes;
//     } else {
//         return no;
//     }
// }

// let s='y'
// let t='yu'
// let k=2
// console.log(appendAndDelete(s, t, k));



// let a=[1,2,3,4,5];
// let b=a.sort((a,b)=>a-b);
// console.log(b);
// const printNum=(num,stop)=>{

//     console.log(num);
//     if(num!==stop){
//         let newNum=num+1;
//         printNum(newNum,stop)
//     }
// }

// printNum(1,10)
// const calcFactorial=(num)=>{
//     if(num==1||num==0){
//         return 1;
//     }
//     let newNum=num-1;
//     return num*calcFactorial(newNum);
// }

// console.log(calcFactorial(0));

// Number.isInteger()

// let a=[2,2,1,3,2];
// let m=1
// for(let i=0; i<a.length-m+1; i++){
//     let b=a.slice(i,m+i)
//     let c=b.reduce((a,b)=>a+b)
    
//     console.log(b);
// }
// function divisibleSumPairs(n, k, ar) {
//     // Write your code here
//     let count=0;
//     for(let i=0;i<n;i++){
//         for(let j=1+i;j<n;j++){
           
//             if(((ar[i]+ar[j])%k)==0){
//                 console.log(ar[i]+ar[j]);
//             }
//         }
//     }
//     // return count

// }
// ar=[1, 3, 2, 6, 1 ,2]
// console.log(divisibleSumPairs(6, 3, ar));

// let ar=[1, 3, 2, 6, 1 ,2];
// let b=ar.splice(1,1);
// console.log(ar.reduce((a,b)=>a+b));

// function bonAppetit(bill, k, b) {
//     // Write your code here
    
//     let bil=bill.splice(k,1);
//     let an=(bill.reduce((a,b)=>a+b))/2;
//     let c=b-an;
//     console.log(an);
//     if(an==b){
//        console.log('Bon Appetit')
//     }else{
//          console.log(c)
//     }

// }
// let bill=[3,10,2,9];
// bonAppetit(bill,1,12)

console.log(Math.ceil(Math.sqrt(11)));
console.log(Math.floor(Math.sqrt(15)));