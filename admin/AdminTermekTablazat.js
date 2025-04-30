/* itt kapjuk meg az obijektum listát és megjelenítjük egy táblázatban.
Annyiszor példányosítjuk, az AdminTermek osztályt, ahány eleme lesz a listának

*/

export default class AdminTermekTablazat{
    #termekLista=[]
    #szuloElem;
    constructor(szuloElem, lista){
        this.#szuloElem=szuloElem;
        this.#termekLista=lista;
        this.#megjelenit()
    }
    #megjelenit(){
        console.log(this.#termekLista)
    }
}