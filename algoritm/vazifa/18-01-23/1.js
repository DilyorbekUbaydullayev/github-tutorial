const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
   div.innerHTML =''
    let input=inp.value
    let elem = document.createElement('p');
    let soz=''
    for(let i=input.length-1; i>=0; i--){
        soz +=input[i] 
    }
    elem.innerHTML =soz
    div.appendChild(elem);
  }