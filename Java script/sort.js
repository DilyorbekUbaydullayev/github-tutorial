async function getdata() {
  let mydata = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await mydata.json();

  //Jadval yaratish
  const table = document.querySelector("table");
  table.style.cssText = "margin-top:50px;margin:0 auto;width:90%";
  table.classList.add("jadval");

  //jadval sarlovhasi
  const thead = document.createElement("thead");
  table.appendChild(thead);
  let boshqator = document.createElement("tr");
  thead.appendChild(boshqator);

  // Ma'mumotlar Qo'shish
  for (const key in data[0]) {
    if (key !== "address" && key !== "company" && key !== "id") {
      let th = document.createElement("th");
      let btn = document.createElement("button");
      btn.style.cssText =
        "margin-left: 20px;padding-inline:10px;border-radius:5px;border:none";
      th.classList.add("jadval");
      th.innerHTML = key;
      btn.innerHTML = "sort";
      boshqator.appendChild(th);
      th.append(btn);

      let clickCount = 0;
      btn.addEventListener("click", function () {
        clickCount++;
        let sortedData = data;
        if (clickCount % 2 == 0) {
          sortedData = data.sort((a, b) => b[key].localeCompare(a[key]));
        } else {
          sortedData = data.sort((a, b) => a[key].localeCompare(b[key]));
        }
        updateTable(sortedData);
      });
    } else if (key == "address") {
      let th = document.createElement("th");
      let btn = document.createElement("button");
      btn.style.cssText =
        "margin-left: 20px;padding-inline:10px;border-radius:5px;border:none";
      th.classList.add("jadval");
      th.innerHTML = "Zipcode";
      btn.innerHTML = "sort";
      boshqator.appendChild(th);
      th.append(btn);

      let clickCount = 0;
      btn.addEventListener("click", function () {
        clickCount++;
        let sortedData = data;
        if (clickCount % 2 == 0) {
          sortedData = data.sort((a, b) =>
            b[key].zipcode.localeCompare(a[key].zipcode)
          );
        } else {
          sortedData = data.sort((a, b) =>
            a[key].zipcode.localeCompare(b[key].zipcode)
          );
        }
        updateTable(sortedData);
      });
    }
  }

  //Qatorlarni yaratish
  let tbody = document.createElement("tbody");
  table.append(tbody);

  function updateTable(data) {
    tbody.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement("tr");
      tbody.append(tr);

      for (const key in data[i]) {
        if (key !== "address" && key !== "company" && key !== "id") {
          let td = document.createElement("td");
          td.style.border = "1px solid";
          td.innerHTML = data[i][key];
          tr.append(td);
        } else if (key == "address") {
          let td = document.createElement("td");
          td.style.border = "1px solid";
          td.innerHTML = data[i][key].zipcode;
          tr.append(td);
        }
      }
    }
  }

  updateTable(data);
}
getdata();
