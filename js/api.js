let user = { id: 22, name: "xaan Dawud", address: "Sylhet " };
let stringified = JSON.stringify(user);
// console.log(stringified);

let person = {
  name: "Arpan Shill",
  address: {
    city: "sylhet",
    postCode: 3340,
    PS: "Shahporan",
  },
  electricDevice: ["Mobile", "Laptop", "Smart Watch"],
};
console.log(person);
let personStringified = JSON.stringify(person);
console.log(personStringified);

let personObj = JSON.parse(personStringified);
console.log(personObj);
