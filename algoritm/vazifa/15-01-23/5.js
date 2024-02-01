// 5.  arr=[1,5,6,7,8,9,10]  elementlari ichidan eng kattasini aniqlash dasturini tuzing.
function ar(arr) {
    let sortarr = arr.sort((a,b)=>b-a);
    console.log(`eng katta element: ${sortarr[0]}`);
}
let arr=[1,5,6,7,8,9,10]
ar(arr);