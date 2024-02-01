const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");
function check() {
  div.innerHTML = "";
  let count = 1;
  let qator = "";
  let input1 = inp.value.split("");
  let input = input1.sort();
  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i + 1]) {
      count++;
    } else if (input[i] !== input[i + 1]) {
      qator += `${input[i]}(${count})`;
      count = 1;
    }
  }
  div.innerHTML = qator;
}
