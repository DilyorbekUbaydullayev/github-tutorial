// 1)  berilgan sonning kvadrati va kubini qaytaruvchi
//     function tuzing
// 2)  arr = [4, 8, 9, 12, 34, 7, 6, 17] arraydagi juft
//     sonlar butun arrayni necha foizini tashkil etishini
//     aniqlang
// 3)  'lorem ipsum dolor sit amet' stringda necha xil
//     harf qatnashganini aniqlovchi funksiya tuzing
// 4)  son tub yoki tub emasligini aniqlovchi function tuzing

//1......................................................//
function son(a) {
  let a2 = a * a;
  let a3 = a ** 3;
  return `1) ${a} ni kvadrati = ${a2}, kubini = ${a3}`;
}
console.log(son(5));
//2................................//
function array(arr) {
  let count = 0;
  for (let i of arr) {
    if (i % 2 == 0) {
      count++;
    }
  }
  let result = (count / arr.length) * 100;
  return `2) juft sonlar arrayning ${result}% tashkil etadi`;
}
arr = [4, 8, 9, 12, 34, 7, 6, 17];
console.log(array(arr));
//3...................................................//
function soz(ar) {
  let harflar = [];
  let harf = 0;
  let lar = ar.toLowerCase();
  for (j = 0; j < lar.length; j++) {
    if (!harflar.includes(lar[j])) {
      harf++;
      harflar.push(lar[j]);
    }
  }
  let result = harf - 1;
  return `3) Stringda ${result} xil harflar ishlatilgan`;
}
lorem = "lorem ipsum dolor sit amet";
console.log(soz(lorem));
//4...............................................................//
function number(a) {
  let count1 = 0;
  for (i = 1; i < a ** (1 / 2); i++) {
    if (a % i == 0) {
      count1++;
    }
  }
  if (count1 > 1 && a > 1) {
    return `4) ${a} tub son emas`;
  } else if (a == 1) {
    return `4) ${a} mukammal son`;
  } else {
    return `4) ${a} tub son `;
  }
}
console.log(number(11));
