const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");
 

  function check(){
    div.innerHTML =''
    let input =inp.value*1;
    let i=1;
    while(i<=input){
        let elem = document.createElement('p');
        elem.innerHTML = `${i**2}`;
        div.appendChild(elem);
i++;
    }
  }