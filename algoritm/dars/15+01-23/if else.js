const div = document.querySelector('.div');
const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');

function check(){
    if(inp.value<0){
    div.innerHTML=''
     div.innerHTML='manfiy'
    }else if(inp.value>0){
        div.innerHTML=''
     div.innerHTML='musbat'
    }else if(inp.value==0){
        div.innerHTML=''
     div.innerHTML='nol'
    }
}