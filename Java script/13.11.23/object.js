arr = [
  {
    fname: "John",
    lname: "Doe",
    age: 36,
    isStudent: true,
  },
  {
    fname: "Jane",
    lname: "Does",
    age: 34,
    isStudent: false,
  },
  {
    fname: "Alice",
    lname: "Smith",
    age: 28,
    isStudent: true,
  },
  {
    fname: "Bob",
    lname: "Johnson",
    age: 32,
    isStudent: false,
  },
  {
    fname: "Charlie",
    lname: "Williams",
    age: 22,
    isStudent: true,
  },
  {
    fname: "David",
    lname: "Brown",
    age: 30,
    isStudent: false,
  },
  {
    fname: "Eve",
    lname: "Jones",
    age: 26,
    isStudent: true,
  },
  {
    fname: "Frank",
    lname: "Miller",
    age: 24,
    isStudent: false,
  },
  {
    fname: "Grace",
    lname: "Davis",
    age: 27,
    isStudent: true,
  },
  {
    fname: "Harry",
    lname: "Garcia",
    age: 31,
    isStudent: false,
  },
  {
    fname: "Ivy",
    lname: "Rodriguez",
    age: 25,
    isStudent: true,
  },
  {
    fname: "Jack",
    lname: "Wilson",
    age: 29,
    isStudent: false,
  },
];

function student(ar){
  let studentlar=[];
  let studentemaslar=[];
  for(let i = 0; i <ar.length; i++){
if(ar[i].isStudent){
  studentlar.push(ar[i]);
}else{
  studentemaslar.push(ar[i]);
}
  

  }
  console.log('Studentlar');
  console.log( studentlar);
  console.log('studentemaslar');
  console.log(studentemaslar);
}
student(arr);
