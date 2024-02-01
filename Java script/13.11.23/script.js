const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: {},
  private: false,
  start: function () {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt("Necha baxo berasiz?");
      if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log("kam serial ko'ribsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("siz klassik tomoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
      console.log("siz serialchi ekansiz");
    } else {
      console.log("ERROR");
    }
  },
  showDB: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  writeGenres: function () {
    for (let i = 0; i <3; i++) {
      const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`,'');
      if(genre===null||genre===''){
        console.log("siz notog'ri malumot kiritdingiz");
        i--
      }else{
        seriesDB.genres[i]=genre;
      }
    }
  },
};
