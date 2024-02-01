const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  
   function check(){
div.innerHTML =''
let boluvchilar=[]
    let input = inp.value*1;
    for(let i=1;i<input**(1/2);i++){
        if(input%i==0){
            boluvchilar.push(i);
            boluvchilar.push(input/i);
        }
    }
   let s=boluvchilar.sort((a,b)=>a-b)
    for(let i=0;i<s.length;i++){
        let element = document.createElement('p');
        element.innerHTML = s[i]
        div.appendChild(element);
    }
   }