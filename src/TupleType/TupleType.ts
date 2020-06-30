// tuple is a specific type we declare an specify length and type, and they are mutable.

const dataClients: [number, string] = [1, 'Paulo'];
const dataClients2: [number, string, string] = [1, 'Paulo', 'Martins'];
const dataClients3: [number, string, string?] = [1, 'Paulo'];
const dataClients4: [number, string, ...string[]] = [1, 'Paulo'];

dataClients[0] = 100;
dataClients[1] = 'Carlos';

console.log(dataClients);
console.log(dataClients2);
console.log(dataClients3);
console.log(dataClients4);
