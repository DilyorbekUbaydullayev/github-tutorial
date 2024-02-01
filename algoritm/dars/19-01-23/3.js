const inp = document.querySelector("#inp"),
inp2 = document.querySelector("#inp1"),
  div = document.querySelector(".div");

  function check(){
    div.innerHTML=''
    let input1 = inp.value*1;
    let input2 = inp2.value*1;
    let arr=[5,6,4,1,2,3,1,8];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>input1&&arr[i]<input2){
            let elem = document.createElement('p');
            elem.innerHTML=`${arr[i]}`;
            div.appendChild(elem);

        }
    }
  
  }