const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
    div.innerHTML=''
    let input = inp.value;
    let i=10;
    while(i<100){
        let a =parseInt(i/10);
        let b = i%10;
        if((a+b)%2==0){
            let elem = document.createElement('p');
            elem.innerHTML=`${i}`
            div.appendChild(elem);
           
        }
        i++;
    }
    
  }