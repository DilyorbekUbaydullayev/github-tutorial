const div = document.querySelector(".div");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const btn = document.querySelector("#btn");

function check() {
  let a = inp1.value;
  let b = inp2.value;

  if (a % b == 0) {
    div.innerHTML = "";
    div.innerHTML = "a bga bo'linadi";
  } else {
    div.innerHTML = "";
    div.innerHTML = "a bga bo'linmaydi";
  }
}
