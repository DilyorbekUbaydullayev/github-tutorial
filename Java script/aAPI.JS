async function getdata() {
    let mydata = await fetch("https://jsonplaceholder.typicode.com/users", {});
    let data = await mydata.json();

    // Jadvalni yaratish
    let table = document.querySelector('table');


    // Jadval sarlavhasini yaratish
    let thead = document.createElement('thead');
    thead.classList.add('jadval')
    table.appendChild(thead);
    let headerRow = document.createElement('tr');
    headerRow.classList.add('jadval')
    thead.appendChild(headerRow);

    // Ma'lumotlarni jadvalga joylashtirish
    for (let key in data[0]) {
        if (key !== 'address' && key !== 'company') {
            let th = document.createElement('th');
            th.classList.add('jadval');
          
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }

    // Jadval qatorlarini yaratish
    let tbody = document.createElement('tbody');
    tbody.classList.add('jadval')
    table.appendChild(tbody);

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('jadval')
        tbody.appendChild(tr);

        for (let key in data[i]) {
            if (key !== 'address' && key !== 'company') {
                let td = document.createElement('td');
                td.style.border='1px solid '
                td.textContent = data[i][key];
                tr.appendChild(td);
            }
        }
    }
}

getdata();
