"use strict";
// Question 1
//console.log("hello, world!");
function createCar(manufacturer, model, ...extras) {
    const car = {
        manufacturer,
        model
    };
    // Add additional properties
    for (const extra of extras) {
        const [key, value] = extra;
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the returned object
console.log(myCar);
