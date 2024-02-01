// let raqamlar_1_6 = [];

// for(let i = 0; i <10; i++) {
//     let raqam_1_6 = Math.ceil(Math.random() *4+1);
//     if(raqam_1_6>1){
//         raqamlar_1_6.push(raqam_1_6);
//     }
// }
// console.log('1) '+ raqamlar_1_6);
// ////////////////////////////////////////////////////////////////////////////////////////////////

// let day = new Date();
// let today = day.getDate();
// let thismonth = day.getMonth() + 1;
// let thisyear = day.getFullYear();
// console.log(`2) Bugun ${today}.${thismonth}.${thisyear}`);
// ////////////////////////////////////////////////////////////////////////////////////////////////

// function sonlar(arr){
//     let sortarr = [];
//     for(let i = 0; i < arr.length; i++){
//      sortarr.push(Math.round(arr[i]));

//     }
//     console.log('3) '+ sortarr);

// }
// arr=[1.25,2.65,3.78,4.64,5.654,8.164,10.264,8.154,6.64,8.54]
// sonlar(arr);
// //////////////////////////////////////////////////////////////////////////////////////////////
// let omadlotto=[]
// for(let i=0;i<6;i++){
//     let sonlar=Math.ceil(Math.random()*36);
//     if(omadlotto.indexOf(sonlar==-1)){
// omadlotto.push(sonlar);
//     }
// }
// console.log('4) '+ omadlotto);
// ////////////////////////////////////////////////////////////////////////////////////////////////

// function true_false(){
// let qiymat=Math.ceil(Math.random()*2)
// if(qiymat==1){
//     console.log('5) True');
// }else{
//     console.log('5) False');
// }
// }
// true_false();

// let values='0123456789abcdef';
// color='#';

// console.log(color);

// const body= document.querySelector('body');
// const btn= document.querySelector('button');
const div = document.querySelector(".root");

// const rang=()=>{
//     for(let i=0;i<6;i++){
//         color+=values[Math.floor(Math.random()*16)]
//     }
//     // body.style.backgroundColor=color;
//     btn.style.backgroundColor=color;
//     // div.style.display="none";

// const mydiv = document.createElement('div');

// mydiv.classList.add('div');
// mydiv.style.backgroundColor=color;
// body.appendChild(mydiv);

// color='#';
// }

async function getData() {
  
  let mydata = await fetch("https://jsonplaceholder.typicode.com/todos", {});
  let data = await mydata.json();

  for (let i = 0; i < data.length; i++) {
    let user = document.createElement("div");
    let s = "";
    user.style.cssText =
      "width:90%;padding:0px;border-radius:5px;margin:0 auto;margin-top:10px;border:2px solid #000;font-size:24px;font-weight:bold;";
    for (const key in data[i]) {
      s += key + ": " + data[i][key] + " /";
      user.innerHTML = `${i + 1}| ` + s;
      div.appendChild(user);
    }
  }
}
async function getData1() {
  div.innerHTML = "";
  let mydata = await fetch("https://jsonplaceholder.typicode.com/todos", {});
  let data = await mydata.json();
  let sanoq = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].completed === true) {
      sanoq++;
      let user = document.createElement("div");
      let s = "";
      user.style.cssText =
        "width:90%;padding:0px;border-radius:5px;margin:0 auto;margin-top:10px;border:2px solid #000;font-size:24px;font-weight:bold;";
      for (const key in data[i]) {
        s += key + ": " + data[i][key] + " /";
        user.innerHTML = `${sanoq}| ` + s;
        div.appendChild(user);
      }
    }
  }
}

async function getData2() {
  div.innerHTML = "";
  let mydata = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await mydata.json();
  let sanoq1 = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].completed === false) {
      sanoq1++;
      let user = document.createElement("div");
      let s = "";
      user.style.cssText =
        "width:90%;padding:0px;border-radius:5px;margin:0 auto;margin-top:10px;border:2px solid #000;font-size:24px;font-weight:bold;";
      for (const key in data[i]) {
        s += key + ": " + data[i][key] + " /";
        user.innerHTML = `${sanoq1}| ` + s;
        div.appendChild(user);
      }
    }
  }
}

btn.addEventListener('click', function() {
  count++
  let tableData = Array.from(tbody.querySelectorAll('tr'));
 let teskaritable= tableData.reduce()
 if(count%2==0){
  teskaritable.sort()
 }else{
  tableData.sort()
 }
});