/* eslint-disable */

// Basic types (Type annotations)
let name: string = 'Paulo';
let age: number = 30;
let adult: boolean = true;
let sign: symbol = Symbol('any-sign');
// let big: bigint = 10n;

// Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3]; // or let arrayOfNumbers: number[] = = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b']; // or let arrayOfStrings: string[] = ['a', 'b'];

// Objects

let person: { name: string; age: number; adult?: boolean } = {
  // Note "?" means that key is optional
  name: 'Paulo',
  age: 19,
  adult: true,
};

// Functions

function add(x: number, y: number): number {
  return x + y;
}

// or

const add2: (x: number, y: number) => number = (x, y) => x + y;
