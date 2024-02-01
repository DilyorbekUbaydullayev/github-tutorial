
const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");
 
function check(){
    div.innerHTML =''
    let input =inp.value
    function soz(input){
        if(input.split("").reverse().join('') == input){
            div.innerHTML ='Palindrom'
        }else {
            div.innerHTML = 'not palindrom'
        }
    }
    soz(input)
}