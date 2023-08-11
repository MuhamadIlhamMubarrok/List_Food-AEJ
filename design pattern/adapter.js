class mobil {
  constructor() {
    this.spek = (merek, keunggulan, harga) => {
      return `telah hadir modir ${merek} dengan keunggulana ${keunggulan}. mobil ini hadir dengan harga ${harga}jt`;
    };
  }
}

class math {
  constructor() {
    this.add = function (bilangan1, bilangan2) {
      return bilangan1 + bilangan2;
    };

    this.multiple = (bilangan1, bilangan2) => {
      return bilangan1 * bilangan2;
    };
  }
}

class adapter {
  constructor() {
    const adapterMath = new math();

    this.operation = function (bilangan1, bilangan2, operation) {
      switch (operation) {
        case "tambah":
          return adapterMath.add(bilangan1 + bilangan2);
        case "multiple":
          return adapterMath.multiple(bilangan1 * bilangan2);
        default:
          return NaN;
      }
    };
  }
}

const tambah = new math();
console.log(tambah.add(5, 100));

const adaperMath1 = new adapter();
console.log(adaperMath1.operation(3, 3, "tambah"));
console.log(adaperMath1.operation(3, 3, "multiple"));

const toyota = new mobil();
console.log(toyota.spek("toyota", "auto setir", 250));
