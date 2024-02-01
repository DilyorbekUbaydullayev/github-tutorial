// 1) 1+8+15+22+...+92+99 yig'indini toping.
// 2) a va b butun sonlari berilgan. a dan b gacha barcha butun sonlarni kvadratilarni yig'indisini chiqaruvchi dastur tuzing.(a va b ni ham hisoblang)
// 3) numbers =  [2, 4, 11, 8, 21, 10, 13, 12, 9, 20, 23] . Shu arraydagi 4 ga yoki 5 ga bo'linadigan sonlarni  alohida arrayda chiqaring.
// 4) Berilgan so'zdagi unli harflar sonini toping. salom => 2, anora => 3

let sum=0;
for(let i=1;i<=99;i+=7){
    sum+=i;
}
console.log(sum);
//-------------------------------------------------------------------------------------------------------------------------------------------//
let sum2=0;
let a=5;
let b=10;
for(let i=a;i<=b;i++){
    sum2+=i**2;
}
console.log(sum2);
//-------------------------------------------------------------------------------------------------------------------------------------------//
const numbers =  [2, 4, 11, 8, 21, 10, 13, 12, 9, 20, 23];
let arr=[];
for(let key of numbers){
    if(key%5==0||key%4==0){
        arr.push(key);
}
}
console.log(arr);
//-------------------------------------------------------------------------------------------------------------------------------------------//
let sum3=0;
let soz='AHDBuefbkvh';
let lsoz=soz.toLowerCase();
for(let i of lsoz){
    if(i=='a'||i=='i'||i=='o'||i=='e'||i=='u'||i=="o'"){
        sum3++;
}
}
console.log(sum3);