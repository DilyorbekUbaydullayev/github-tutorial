'use strict'

document.addEventListener('DOMContentLoaded', () =>{
    const reklama = document.querySelectorAll('.promo__adv img');
    const drama= document.querySelector('.promo__genre');
    const fon= document.querySelector('.promo__bg');
    const serieslist= document.querySelector('.promo__interactive-list'),
    addForm= document.querySelector('form.add'),
    inputVal= addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector("[type='checkbox']"),
    deleteSeries = document.querySelector('.delete')
    
    const seriesDB = {
        series:[
            'Omar',
            'The Final Legacy',
            'Ertugrul',
            'Magnificent Century',
            'The Great Seljuks: Guardians...',
        ],
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newSeries = inputVal.value 
        const favorite = checkbox.checked
        if(newSeries){
            if(newSeries.length>18){
                newSeries= `${newSeries.substring(0,18)}...`
            }
            if(favorite){
                console.log('Sevimli serial qoshildi');
            }
            seriesDB.series.push(newSeries.toUpperCase())
            sortArr(seriesDB.series) 
            createSeriesList(seriesDB.series, serieslist)
        }
    

        event.target.reset()
        

       
    })

   
    const deleteAdv = (arr)=>{
        reklama.forEach(item => {
            item.remove();
        })
    }
    const makeChanges = () =>{
        drama.textContent ='KOMEDIYA'
        fon.style.backgroundImage = 'url("img/1.jpg")';
    }
    const sortArr = (arr) =>{
        arr.sort();
    }
   
    function createSeriesList(series,parent){
        parent.innerHTML = ''
        sortArr(series)
        series.forEach((item, idx) => {
            parent.innerHTML +=`<li class="promo__interactive-item">${idx+1} ${item}
            <div class="delete"></div>
            </li>`
        });

        document.querySelectorAll('.delete').forEach((trash, idx) => {
            trash.addEventListener('click', () =>{
                trash.parentElement.remove()
                seriesDB.series.splice(idx, 1)

                createSeriesList(series,parent)
            })
        })
    }
    sortArr(seriesDB.series)
    makeChanges()
    deleteAdv(reklama)
    createSeriesList(seriesDB.series, serieslist)
});
