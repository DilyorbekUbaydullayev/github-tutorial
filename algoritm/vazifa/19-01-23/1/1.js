const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
    div.innerHTML=''
    let input = inp.value;
   if(input.includes('5')){
    div.innerHTML='true'
   }else{
    div.innerHTML='false'
   }
  }