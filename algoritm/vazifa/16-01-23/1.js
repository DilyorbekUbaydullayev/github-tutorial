const inp = document.querySelector("#inp"),
  div = document.querySelector(".div");

function check() {
  div.innerHTML = ""
  let input = inp.value;
  switch (input) {
    case '1':
      div.innerHTML = "Dushanba";
      break;
    case "2":
      div.innerHTML = "Seshanba";
      break;
    case "3":
      div.innerHTML = "Chorshanba";
      break;
    case "4":
      div.innerHTML = "Payshanba";
      break;
    case "5":
      div.innerHTML = "Juma";
      break;
    case "6":
      div.innerHTML = "Shanba";
      break;
    case "7":
      div.innerHTML = "Yakshanba";
      break;
    default:
      div.innerHTML="undefined";
  }
}
