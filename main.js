/* a program belépési pontja */

import AdminTermekTablazat from "./admin/AdminTermekTablazat.js";

const SZULOELEM = document.getElementsByClassName("tarolo")[0];
const ADMINTERMEKGOMB = document.querySelector(".admintermek");
/*const ADMINUSERGOMB = document.querySelector(".adminuser");
const PUBLICTERMEKGOMB = document.querySelector(".publictermek");
const PUBLICKOSARGOMB = document.querySelector(".publickosar");*/
let TERMEK = [];

ADMINTERMEKGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin TERMÉK oldal";
  getAdat("https://fakestoreapi.com/users", adminTermekMegjelenit);
});

/*ADMINUSERGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin USER oldal";
});

PUBLICTERMEKGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin TERMÉK oldal";
});

PUBLICKOSARGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin KOSÁR oldal";
});*/

/*console.log("A lista értéke a fetch előtt: ");
console.log(TERMEK);*/

function getAdat(vegpont) {
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
      TERMEK = data;
      console.log("Megérkezett adatok");
      console.log(TERMEK);
        callback(TERMEK)
    })
    .catch((error) => console.log(error));
}

/*console.log("A lista értéke a fetch UTÁN: ");
console.log(TERMEK);*/

function adminTermekMegjelenit(lista){
    new AdminTermekTablazat(SZULOELEM, lista);
}
function adminTermekMegjelenit(lista){
    new console.log("admin user", lista);
}