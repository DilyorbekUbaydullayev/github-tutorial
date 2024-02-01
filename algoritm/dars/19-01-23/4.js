const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

  function check(){
    div.innerHTML=''
    let count=0
    let input = inp.value.split(',');
   for(let i=0; i<input.length; i++){
    if(input[i]%2==0){
        count++
    }
   }
   let result=count/input.length*100;
   let s=result.toFixed(2);
   div.innerHTML=`${s}%`
  }