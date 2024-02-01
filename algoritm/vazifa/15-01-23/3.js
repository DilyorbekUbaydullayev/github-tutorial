// 3.  S satr berilgan. S satrda “o” harfi bor yoki yo’qligini aniqlash dasturini tuzing.

function satr(S) {
  if (S.includes("o")) {
    console.log("o harfi bor");
  } else if (S.includes("O")) {
    console.log("O harfi bor");
  } else {
    console.log("o harfi yo'q");
  }
}
let s = "rwbvOiue";
satr(s);
