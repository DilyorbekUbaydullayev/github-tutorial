// let persons = [
//     {
//       id: 325326,
//       firstname: "Dan",
//       lastname: "Tiger",
//       birthday: "03.18.1990",
//       gender: "Male",
//       nationality: "switzerland",
//     },
//     {
//       lastname: "Tiger",
//       birthday: "03.18.2005",
//       gender: "Male",
//       hobbie: ["Football", "Reading"],
//       nationality: "switzerland",
//       friends: [325330, 325334],
//     },
//     {
//       id: 325330,
//       firstname: "Frank",
//       lastname: "Lion",
//       birthday: "10.05.1991",
//       gender: "male",
//       hobbie: ["walking", "basketball"],
//     },
//     {
//       id: 325334,
//       firstname: "Bilal",
//       lastname: "Zakki",
//       gender: "male",
//       hobbie: ["swimming", "walking"],
//       friends: [325330, 325326],
//     }
//   ]
// for(let i = 0; i <persons.length; i++){
//     for(const person in persons[i]){
//         console.log(persons[i][person]);
//     }
// }  


// let users=[
//  {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       website: 'hildegard.org',
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       phone: '010-692-6593 x09125',
//       website: 'anastasia.net',
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       website :'ramiro.info',
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       phone: '493-170-9623 x156',
//       website: 'kale.biz',
//     },
//   ];
  
// //   1) har bir object ichiga uni ismi va emailini qaytaradigan function qushing
// //   2) 1-shartdagi function orqali barcha userlar ismi va emailini chiqaring
// //   3) nechta userda telefon raqami yuqligini aniqlang
// //   4) telefon raqami yuq userlar uchun phone key bilan '998-99-111-22-33' malumot qushing
// //   5) barcha userlar malumotlarini ekranga chiqaring

// for(let i = 0; i <users.length; i++) {
//     users[i].funksiya= function() {
//         return  this.name + this.email;
//     }
//     console.log(users[i].funksiya());
// }
// let phone=0;
// for(let j = 0; j <users.length; j++) {
// if(!users[j].phone){
//     phone++;
//     users[j].phone='998-99-111-22-33'
// }
// }
// console.log(`${phone}ta usersa phone yoq`);

// for(let k = 0; k <users.length; k++){
//     for(const user in users[k]){
//         console.log(users[k][user]);
//     }
// }  


let ar=[
    {
      id: 1,
      name: 'Eshmat',
      username: 'Eshmat01',
      email: 'eshmat01@gmail.com',
      gender:'male'  ,
      website: 'eshmat.org',
    },
    {
      id: 2,
      name: 'Oygul',
      username: 'oygul02',
      email: 'oygul02@gmail.com',
      gender: 'famale'    ,
      website:  'oygul.org',
    },
    {
      id: 3,
      name: 'Oybek',
      username: 'oybek03',
      email: 'oybek03@gmail.com',
      gender:'male'
    },
  ];

  let malelar=[];

  for(i=0;i<ar.length;i++){
    if(ar[i].gender=='male'){
        malelar.push(ar[i]);
    }
  }
  console.log(malelar);


  for(k=0;k<ar.length;k++){
    ar[k].phone='901234567';
  }
console.log(ar);
  for(j=0;j<ar.length;j++){
    if(!ar[j].website){
       ar.splice(j,1);
    }
  }
  
  console.log(ar);


