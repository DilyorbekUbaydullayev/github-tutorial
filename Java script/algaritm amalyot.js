// 1-masala
let sonlar=[12, 5489, 1, 36, 5, 7, 555, 1, 15, 895, 90,];
let beshgakarrali=[];
for(let i=0; i<sonlar.length; i++){
    if(sonlar[i]%5==0){
        beshgakarrali.push(sonlar[i]);
    }
}
console.log('1) '+beshgakarrali.sort((a, b) =>a-b));
//-----------------------------------------------------------------------------------------//
// 2-masala
let tezlik=[45,60,70,82,93,30,40];
let umumiytezlik=0;
for(let i=0; i<tezlik.length; i++ )  {
umumiytezlik+=tezlik[i];
}
let ortachatezlik=umumiytezlik/tezlik.length;
console.log('2) '+ortachatezlik);
//----------------------------------------------------------------------------------------//
// 3-masala
let sekund=[3600, 7200, 120, 4500, 4000];
let soat=':00:00';
let min=':00';
let vaqt=[]
for(let i=0;i<sekund.length;i++){
    if(sekund[i]%3600==0){
        let soat1='0'+sekund[i]/3600+soat;
        vaqt.push(soat1)
    }else if(sekund[i]%3600!==0){
        let sek=(sekund[i]-3600*parseInt(sekund[i]/3600))-60*parseInt((sekund[i]-3600*parseInt(sekund[i]/3600))/60)
        let min2=parseInt((sekund[i]-3600*parseInt(sekund[i]/3600))/60)
        if(min2<10&&sek>9){
            let soat2='0'+parseInt(sekund[i]/3600)+':0'+min2+':'+sek;
            vaqt.push(soat2)
        }else if(sek==0&&min2>9){
            let soat2='0'+parseInt(sekund[i]/3600)+':'+min2+':00';
            vaqt.push(soat2)
        }else if(min2==0){
            let soat2='0'+parseInt(sekund[i]/3600)+':'+'0'+ min2+':0'+sek;
            vaqt.push(soat2)
        }else{
            let soat2='0'+parseInt(sekund[i]/3600)+':'+min2+':0'+sek;
            vaqt.push(soat2)
        }
        
        
    }
}
console.log('3) '+ vaqt);
//--------------------------------------------------------------------------------------------//
// 4-masala
let parol='12o3Axepff#ewf';
let boshliq=' ';
let count=4;
let lower_case='abcdefghijklmnopqrstuvwxyz';
let upper_case='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let special_case='!@#$&';
for (let i=0; i<parol.length; i++){
    parol[i]!==boshliq;
    count--;
    break
}
for(let i=0;i<lower_case.length;i++){
    if(parol.includes(lower_case[i])){
        count--;
        break
    }
}
for(let i=0;i<upper_case.length;i++){
    if(parol.includes(upper_case[i])){
        count--;
        break
    }
}
for(let i=0;i<special_case.length;i++){
    if(parol.includes(special_case[i])){
        count--;
        break
    }
}

if(8<=parol.length<=16&&count==0){
    console.log('4) '+'true');
}else{
    console.log('4) '+'false');
}
//----------------------------------------------------------------//
// 5-masala
let gap='biz dasturlashni yaxshi bilamiz shuning uchun'
let result=[]
let count1=0;
for(let i=0;i<gap.length;i++){
    for(let j=0;j<gap.length;j++){
if(gap[i]==gap[j]){
    count1++;
    
   if(gap[j]==gap[i]&&count1>0){
    let exp=gap[j]+':'+count1;
    result.push(exp);
   }
    

}else{
    count1=0
}
    }
}

//---------------------------------------------------------//
// 6-masala
let count2=0;
let soz='listen'
let soz1='silten'
for(let i=0;i<soz.length;i++){
    for(let j=0;j<soz1.length;j++){
        if(soz[i]==soz1[j]){
            count2++
        }
    }
}
if(count2==soz.length){
    console.log('5) '+'Anagrams');
}else{
    console.log('5)'+'Not Anagrams');
}