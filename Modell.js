export default class Modell {
  #lista = [];
  constructor() {
    this.#lista = [];
  }

  getAdat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((data) => {
        console.log("Megérkezett adatok");
        console.log(data);
        callback(data);
      })
      .catch((error) => console.log(error));
  }
  postAdat(vegpont, callback) {}
}
