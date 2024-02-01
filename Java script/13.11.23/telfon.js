function kiritish(value) {
    let inputdagiValue = document.getElementById("myInput");
    if(value=='+'){
      b= inputdagiValue.value;
      arr=b.split('');
      arr.pop();
      arr.pop();
      inputdagiValue.value =arr.join('');
      inputdagiValue.value = inputdagiValue.value + value

      

    }else if(value=='yashil'){
      inputdagiValue .value ="Caling...";
    }else if(value=='qizil'){
      inputdagiValue .value =null;
    }else{
      inputdagiValue .value = inputdagiValue.value  + value;
    }
   
    
  
  }
  
  function ochirish() {
    let inputdagiValue = document.getElementById("myInput").value;
    let values = inputdagiValue.split("");
    values.pop();
    document.getElementById("myInput").value = values.join("");
  }