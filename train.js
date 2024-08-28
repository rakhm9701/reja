//TASK E:

function getReverse(string) {
  let word = string.split("").reverse().join("");
  return word;
}

console.log(getReverse("hello"));

/* TASK D

function checkContent(a, b) {
  let array1 = a.split("").sort().join("");
  let array2 = b.split("").sort().join("");
  if (array1 === array2) {
    return true;
  }
  return false;
}

console.log(checkContent("mitgroup", "mitgroup"));
*/

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

/* B - TASK;
function countDigits(str) {
  let count = 0;
  for (let a = 0; a < str.length; a++) {
    if (!isNaN(str[a])) {
      count++;
    }
  }
  return count;
} 

console.log(countDigits("ad2a54y79wet0sfgb9"));
*/

/* A-TASK

function countlatter(e, word) {
  let count = 0;

  for (let a = 0; a < word.length; a++) {
    if (word[a] === e) {
      console.log("count:", count);
      count++;
    }
  }
  return count;
}

console.log(countlatter("e", "engineer")); */

/* console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "ozingizga ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
]; */

// => CALL BACK FUNCTIONS

/* function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", "null");
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}
  */

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");
//  => ASYNC FUNCTION

/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
  }
} */

// => call via then/catch

/* console.log("passed here 0");
maslahatBering(15)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1"); */

// => call via async/await

/* async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(40);
  console.log(javob);
  javob = await maslahatBering(50);
  console.log(javob);
  javob = await maslahatBering(59);
  console.log(javob);
  javob = await maslahatBering(61);
  console.log(javob);
}

run(); */
