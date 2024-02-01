// 'use strict';

// const rasmlar=document.querySelectorAll('.rasm'),
// katta_rasm = document.querySelector('.katta-rasm'),
// btns = document.querySelectorAll('button');
// let rasm=document.createElement('img')





// let count=0;
// btns[1].addEventListener('click',()=>{
//     count++;
//     if(count==5){
//         count = 0;
//     }
//     rasm.src =`rasm/slider${count+1}.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)

  
//    btns[0].addEventListener('click',()=>{
    

    
//     rasm.src =`rasm/slider${count}.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
//    count--;
//    if(count==0){
//     count =5
//    }
  
// })
// })

// rasmlar[0].addEventListener('click',()=>{
//     rasm.src =`rasm/slider1.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
// })

// rasmlar[1].addEventListener('click',()=>{
//     rasm.src =`rasm/slider2.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
// })
// rasmlar[2].addEventListener('click',()=>{
//     rasm.src =`rasm/slider3.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
// })
// rasmlar[3].addEventListener('click',()=>{
//     rasm.src =`rasm/slider4.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
// })
// rasmlar[4].addEventListener('click',()=>{
//     rasm.src =`rasm/slider5.jpg`
//     katta_rasm.innerHTML=''
//    katta_rasm.append(rasm)
// })

'use strict';

const rasmlar = document.querySelectorAll('.rasm'),
katta_rasm = document.querySelector('.katta-rasm'),
btns = document.querySelectorAll('button');
let rasm = document.createElement('img')

let images = ["rasm/slider1.jpg", "rasm/slider2.jpg", "rasm/slider3.jpg", "rasm/slider4.jpg", "rasm/slider5.jpg"];
let count = 0;

function showImage(index) {
    rasm.src = images[index];
    katta_rasm.innerHTML = '';
    katta_rasm.append(rasm);
}

btns[1].addEventListener('click', () => {
    count++;
    if (count == images.length) {
        count = 0;
    }
    showImage(count);
});

btns[0].addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    showImage(count);
});

for (let i = 0; i < rasmlar.length; i++) {
    rasmlar[i].addEventListener('click', () => {
        count = i;
        showImage(count);
    });
}
