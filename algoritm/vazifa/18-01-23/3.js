
const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");
 
function check(){
    div.innerHTML =''
    let input =inp.value
    let count =0
        for (let i = 1; i <= input; i++){
            if(i.toString().split("").reverse().join('') == i){
                let elem = document.createElement('p')
                elem.innerHTML =i;
                div.appendChild(elem)
                count++
            }
        }
        let sanoq = document.createElement('p');
        sanoq.innerHTML =`Jami:${count}`;
        div.appendChild(sanoq)
    
}