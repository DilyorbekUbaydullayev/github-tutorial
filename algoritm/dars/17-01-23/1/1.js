const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
   div.innerHTML =''
    let input=inp.value
    for(let i=0; i<5; i++){
        let elem = document.createElement('p');
        elem.innerHTML = input;
        div.appendChild(elem);
    }
  }