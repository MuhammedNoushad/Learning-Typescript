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

// function overloading

// function add(num1: string, num2: string): string;
// function add(num1: number, num2: number): number;
// function add(num1: any, num2: any): any {
//   return num1 + num2;
// }

// // Generics

// const add = <T>(n1: T): T => {
//   return n1;
// };

// const addedValue = add<number>(3);

// Enum

//  enum Status {
//     SUCCESS,
//     FAILED,
//     PENDING,
//  }

// keyof typeof

// const Status = {
//   SUCCESS: "success",
//   FAILED: "failed",
//   PENDING: "pending",
// } as const;

// function getOrder(orderId: number, status: keyof typeof Status): void {
//   console.log(orderId, "==", status);
// }

// Utility types

type Users = {
  name: string;
  age: number;
  salary: number;
};

// readonly

// const userData : Readonly<Users> = {
//     name : 'muhammed',
//     age : 20,
//     salary : 20000,
// };

// partial

// const userData : Partial<Users> = {
//     name : 'muhammed',
//     age : 20,
// };

// required

// const userData : Required <Users> ={
//     name:'muhammed',
//     age:20,
//     salary:24_44
// }

// pick

// const userData: Pick<Users, "age"> = {
//   age: 20,
// };

// omit

// const userData: Omit<Users, "age"> = {
//   name: "muhammed",
//   salary: 23_999,
// };
