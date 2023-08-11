class MCU {
  constructor(hero, power) {
    // setting property values
    this.hero = hero;
    this.power = power;

    // declaring a method on the object
    this.getDetails = () => {
      return `${this.hero} has power ${this.power}`;
    };
  }
}

// creating new instances of MCU

const spiderman = new MCU("spiderman", "spider power");

console.log(spiderman.getDetails());

class math {
  constructor(angka1, angka2) {
    this.angka1 = angka1;
    this.angka2 = angka2;

    this.pertambahan = () => {
      return this.angka1 + this.angka2;
    };

    this.pengurangan = () => {
      return this.angka1 - this.angka2;
    };

    this.perkalian = () => {
      return this.angka1 * this.angka2;
    };

    this.pembagian = () => {
      if (this.angka2 !== 0) {
        return this.angka1 / this.angka2;
      } else {
        throw new Error("Tidak dapat melakukan pembagian dengan nol");
      }
    };
  }
}

const bilangan1 = new math("4", "2");
const bilangan2 = new math("2", "0");

console.log(bilangan1.pertambahan());
console.log(bilangan1.pengurangan());
console.log(bilangan1.perkalian());
console.log(bilangan1.pembagian());

console.log(bilangan2.pembagian());
