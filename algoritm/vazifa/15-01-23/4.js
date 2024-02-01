// 4.  A satrdagi harflardan foydalanib B satrni hosil qilish mumkin yoki yo’qligini aniqlash dasturini tuzing

function satrlar(A, B) {
  let count = 0;
  for (let i = 0; i < B.length; i++) {
    if (A.includes(B[i])) {
      count++;
    }
  }
  if (count == B.length) {
    console.log("B satrni hosil qilish mumkin");
  } else {
    console.log("B satrni hosil  qilish mumkin emas");
  }
}
let a = "astronomy";
let b = "anatomy";
satrlar(a, b);
