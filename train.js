// TASK D

function checkContent(a, b) {
  let array1 = a.split("").sort().join("");
  let array2 = b.split("").sort().join("");
  if (array1 === array2) {
    return true;
  }
  return false;
}

console.log(checkContent("mitgroup", "mitgroup"));

/* TASK C

const moment = require("moment");
const time = moment().format("HH:mm");

console.log("Bizda non, lagmon, cola bor");

class Shop {
  non;
  cola;
  lagmon;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    return `Hozir ${time} da bizda ${this.non} ta non va ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud`;
  }

  sotish(nomi, soni) {
    if (nomi === "non") {
      if (this.non === 0) {
        return "Non qolmadi";
      } else if (this.non >= soni) {
        this.non -= soni;
        return `Hozir ${time} da ${soni} non sotdik!`;
      } else {
        return "Bizda bunday miqdorda non mavjud emas";
      }
    } else if (nomi === "lagmon") {
      if (this.lagmon === 0) {
        return "Lagmon qolmadi";
      } else if (this.lagmon >= soni) {
        this.lagmon -= soni;
        return `Hozir ${time} da ${soni} lag'mon sotdik!`;
      } else {
        return "Bizda bunday miqdorda lag'mon mavjud emas";
      }
    } else if (nomi === "cola") {
      if (this.cola === 0) {
        return "Cola qolmadi";
      } else if (this.cola >= soni) {
        this.cola -= soni;
        return `Hozir ${time} da ${soni} cola sotdik!`;
      } else {
        return "Bizda bunday miqdorda cola mavjud emas";
      }
    } else {
      return "Bunday mahsulot mavjud emas";
    }
  }

  qabul(nomi, soni) {
    if (nomi === "non") {
      this.non += soni;
      return `Hozir ${time} da ${soni} non qabul qildik!`;
    } else if (nomi === "lag'mon") {
      this.lagmon += soni;
      return `Hozir ${time} da ${soni} lag'mon qabul qildik!`;
    } else if (nomi === "cola") {
      this.cola += soni;
      return `Hozir ${time} da ${soni} cola qabul qildik!`;
    } else {
      return "Bizda bunday mahsulot mavjud emas";
    }
  }
}

const shop = new Shop(1, 5, 6);
console.log(shop.qoldiq());
console.log(shop.qabul("cola", 4));
console.log(shop.qabul("non", 4));
console.log(shop.sotish("non", 3));
console.log(shop.sotish("cola", 2));
console.log(shop.qoldiq()); */
