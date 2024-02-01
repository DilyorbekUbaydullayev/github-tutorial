const body = document.querySelector('body')
const div = document.createElement("div")
body.appendChild(div);
function check() {
   
  let inp1 = document.querySelector("#inp1");
  let inp2 = document.querySelector("#inp2");
 
  
  let input = inp1.value;
  let input2 = inp2.value;
  function calculate(input) {
    let [num1, operator, num2] = input.split("");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Noto'g'ri operator";
    }
  }
  let javob= calculate(input);
  
  if(javob==input2){
    div.innerHTML ='';
    div.innerHTML = 'true'
  }else{
    div.innerHTML ='';
    div.innerHTML = 'fulse'
  }
}
