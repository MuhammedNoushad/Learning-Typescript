// Infer types

// let fullName = "Muhammed";
// fullName = 30;

// let age = 40;
// age = "vayas";

// Define types (explicit types)

// let fullName: string = "Muhammed";
// let age: number = 24;
// let skills: string[] = ["js", "css", "ts"];
// let rating: number[] = [8, 6, 7];
// let details: { name: string; age: number } = {
//   name: "Muhammed",
//   age: 24,
// };
// let emptyArray: [] = [];
// let emptyObject: {} = {};

// Interface

// interface Car {
//   name: string;
//   model: string;
//   price: number;
//   getName: () => void;
// }

// let car: Car = {
//   name: "BMW",
//   model: "BMW M4 Convertible",
//   price: 1_48_00_000,
//   getName() {
//     console.log(this.name);
//   },
// };

// "type" key word

// type Car = {
//     name: string;
//     model: string;
//     price: number;
//     getName: () => void;
// }

// let car: Car = {
//     name: "BMW",
//     model: "BMW M4 Convertible",
//     price: 1_48_00_000,
//     getName() {
//       console.log(this.name);
//     },
//   };

// // Union operator

// let vayas: string | number = "30";
// let skills: (string | number | boolean)[] = ["js", "css", "ts", 2, 3, true];

// // Optional

// interface Car {
//   name: string;
//   model: string;
//   price?: number;
//   getName?: () => void;
// }

// let car: Car = {
//   name: "Maruthi",
//   model: "800",
// };


// // Named types 

// type Gender = 'male' | 'female';

// let gender : Gender = 'female'