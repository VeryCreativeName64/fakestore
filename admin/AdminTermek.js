/* 1 termék megjelenítése, a táblázat egy sora

*/

export default class AdminTermek {
  #adat = {};
  #szuloElem;
  constructor(termek, szuloElem) {
    this.#adat = termek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();
  }
  #megjelenit() {
    let html = `<tr>
                    <td scope="col">${this.#adat.id}</td>
                    <td scope="col">${this.#adat.title}</td>
                    <td scope="col">${this.#adat.price}</td>
                    <td scope="col">${this.#adat.category}</td>
                    <td scope="col">${this.#adat.description}</td>
                    <td scope="col"><img width="100" src="${
                      this.#adat.image
                    }" alt=${this.#adat.title}</td>
                    <td scope="col">
                    <button class="btn torol">❌</button>
                    </td>
                 </tr>
        `;
    this.#szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
