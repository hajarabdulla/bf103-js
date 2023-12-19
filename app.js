// class Car {
//   constructor(
//     brand,
//     model,
//     color,
//     year,
//     speed,
//     fuelCapacity,
//     fuelFor1Km,
//     km,
//     currentFuel
//   ) {
//     (this.brand = brand),
//       (this.model = model),
//       (this.color = color),
//       (this.year = year),
//       (this.speed = speed),
//       (this.fuelCapacity = fuelCapacity),
//       (this.fuelFor1Km = fuelFor1Km),
//       (this.km = km),
//       (this.currentFuel = currentFuel);
//   }
//   showInfo() {
//     return `Brand: ${this.brand} \nModel: ${this.model} \nColor: ${this.color} \nYear: ${this.year} \nSpeed: ${this.speed} km/h
//     \nFuel Tank Capasity: ${this.fuelCapacity} L \nFuel for 1 km: ${this.fuelFor1Km} L \nKm: ${this.km} km \nCurrent Fuel: ${this.currentFuel} L`;
//   }
//   addFuel(fuel = 1) {
//     if (this.currentFuel + fuel <= this.fuelCapacity) {
//       this.currentFuel += fuel;
//       console.log(this.showInfo());
//       return `${fuel} L ugurla elave edildi.\nHal hazirda bakda olan yanacaq: ${this.currentFuel} L`;
//     } else {
//       return `yanacaq bakinda yeteri qeder yer yoxdur !`;
//     }
//   }
//   drive(driveKm) {
//     if (this.fuelFor1Km * driveKm <= this.currentFuel) {
//       this.km += driveKm;
//       this.currentFuel -= this.fuelFor1Km * driveKm;
//       return `ugurla unvana catildi.\nKm:${this.km} km \nYanacaq: ${this.currentFuel} L`;
//     }
//   }
// }
// let car = new Car(
//   "Mercedes",
//   "S class",
//   "black",
//   "2021",
//   300,
//   180,
//   1,
//   50000,
//   120
// );

// class Product {
//   constructor(name, price, count) {
//     this.name = name;
//     this.price = price;
//     this.count = count;
//     this.totalIncome = 0;
//   }
//   Sell(quantity = 1) {
//     if (this.count > 0) {
//       this.count -= quantity;
//       this.totalIncome += quantity * this.price;
//     } else {
//       console.log("Bu mehsul yoxdur.");
//     }
//   }
// }

// class Milk extends Product {
//   constructor(name, price, count, volume, fatRate) {
//     super(name, price, count);
//     this.volume = volume;
//     this.fatRate = fatRate;
//   }
// }

const students = [
  {
    name: "Fikrat",
    point: 500,
  },
  {
    name: "Lala",
    point: 800,
  },
];

const newArr = students.map((item) => {
  return { ...item, newPoint: item.point + 200 };
});

console.log(newArr);
