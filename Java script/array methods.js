// let arr = ['olma','anor','nok'];
// arr.map((item,index)=>{
//     console.log(item,index);
// })
let body = document.querySelector("body");
let div = document.querySelector(".root");
div.style.cssText='text-align:center;'

async function getdata() {
   div.innerHTML =''
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();
 
 
  data.map((item) => {
    let user = document.createElement("p");
    div.appendChild(user);
    user.innerHTML = item.name;
  });
}

async function getdata1() {
    div.innerHTML =''
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();
  let ism = [];
 
 
  

  data.map((item) => {
    ism.push(item.name);
  });
  let ism2 = ism.sort();
  ism2.map((item) => {
    let user = document.createElement("p");
    div.appendChild(user);
    user.innerHTML = item;
  });
}
async function getdata2() {
    div.innerHTML =''
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();

  let ism = [];
  for (let i = 0; i < data.length; i++) {
    ism.push(data[i].phone);
  }
  let ism3 = ism.sort();
  ism3.map((item) => {
    let user = document.createElement("p");
    div.appendChild(user);
    user.innerHTML = item;
  });
  console.log(ism);
}

async function getdata3() {
    div.innerHTML =''
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();
  data.reverse();
  let table = document.createElement('table');
  table.style.cssText='margin:0 auto;border-collapse:collapse;'
  
 div.append(table);

 const thead = document.createElement('thead');
   
 table.appendChild(thead);
 let boshqator = document.createElement('tr');
 thead.appendChild(boshqator);


// Ma'mumotlar Qo'shish
 for( const key in data[0]){
     if(key!=="address"&&key!=="company"){
         let th = document.createElement('th');
         th.style.border = "1px solid";
         th.innerHTML = key;
         boshqator.appendChild(th);
     }
 }
 

  for(let i=0;i<data.length;i++){
      let tr=document.createElement('tr');
      table.append(tr);

      for(const key in data[i]){
          if(key!=="address"&&key!=="company"){
              let td = document.createElement('td');
              td.style.border = "1px solid";
              td.innerHTML= data[i][key];
              tr.append(td)
          }
      }
  }

}

async function getdata4() {
    div.innerHTML =''
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();
let inp=document.querySelector('#username')
const p = document.createElement('p')
div.appendChild(p)
  let ism = [];
  for (let i = 0; i < data.length; i++) {
    ism.push(data[i].name);
  }
 for(let i = 0; i <ism.length; i++) {
  if(ism[i].includes(inp.value)){
   p.innerHTML ='bu user bor';
   inp.value=''
    break;
    
}else{
    p.innerHTML ='bu user yoq'
}

 } 
 
}
