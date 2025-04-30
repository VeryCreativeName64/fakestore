/* itt kapjuk meg az obijektum listát és megjelenítjük egy táblázatban.
Annyiszor példányosítjuk, az AdminTermek osztályt, ahány eleme lesz a listának

*/

import AdminTermek from "./AdminTermek.js";

export default class AdminTermekTablazat {
  #termekLista = [];
  #szuloElem;
  #tbodyElem;
  constructor(szuloElem, lista) {
    this.#szuloElem = szuloElem;
    this.#szuloElem.innerHTML = "";
    this.#termekLista = lista;
    this.#megjelenit();
  }
  #megjelenit() {
    //console.log(this.#termekLista)
    let html = `<table class="table">
                <thead>
                <tr>
                    <th scope="col">id </th>
                    <th scope="col">Terméknév </th>
                    <th scope="col">Ár </th>
                    <th scope="col">Kategória </th>
                    <th scope="col">Leírás </th>
                    <th scope="col">Kép </th>
                 </tr>
                </thead>
                <tbody>
    
                </tbody>
                </table>
                `;
    this.#szuloElem.insertAdjacentHTML("beforeend", html);
    this.#tbodyElem = this.#szuloElem.querySelector("table tbody");
    console.log(this.#tbodyElem);
    this.#termekLista.forEach(termek => {
      console.log(termek);
      new AdminTermek(termek, this.#tbodyElem);
    });

  }
}
