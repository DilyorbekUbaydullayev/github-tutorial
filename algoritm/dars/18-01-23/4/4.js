const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
    div.innerHTML=''
    let input = inp.value;
    let count =0;
    for(let i=0; i<10; i++){
        if(input.includes(i)){
            count++;
        }
    }
    div.innerHTML = count
  }