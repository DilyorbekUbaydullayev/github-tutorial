const div = document.querySelector(".div");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
const btn = document.querySelector("#btn");


function check(){
    let a= inp1.value;
    let b= inp2.value;
    let c= inp3.value;
    if((a**2)+b**2==c**2){
        div.innerHTML = '';
        div.innerHTML = 'togri'
    }else{
        div.innerHTML = '';
        div.innerHTML = 'notogri'
    }
 
}


let 