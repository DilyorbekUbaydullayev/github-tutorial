
let sum=0;
let i=1;
while (i<=50){
    sum+=i*(1+i);
    i+=2
}
console.log(sum);


//------------------------------------------------------------------------------------------------------------------------------------------------//
let K = 0;
let N=2;
while (N > 1) {
    N = N / 2;
    K++; 
}
console.log(K);
//------------------------------------------------------------------------------------------------------------------------------------------------//
let ar=[2,5,7,3,6,4,9,2];
let a=0;
let j=0;

while (j < ar.length){
if(a<ar[j]){
    a=ar[j];
    

}
j++;
}
console.log(a);
