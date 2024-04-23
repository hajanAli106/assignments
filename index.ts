// Question 1
//console.log("hello, world!");

// Question 2
//var hisname: string= "khan";
//console.log(`hello ${hisname}, would you like to learn some typescript today ?`);


// Question 3
//var personname: string = "ali jokhio";
//console.log(personname.toUpperCase());
//console.log(personname.toLowerCase());
//console.log(personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase());

//Question 4 
//console.log('shrada khapra said to me, "jab aap kuch karny jaa rahy ho tou usky sabse best or sabse worst result ko imagine karke jao istarha ap nervos nh hogy"');

//Question 5
//let famousperson: string= "albert";
//let qoute: string= `${famousperson} once said , "A person who never made a mistake never tried anything new"`;
//console.log(qoute);


//Question 6
//let nalo: string = "\t\n Asharib \t\n"; // This saves the name with whitespace
//console.log(nalo); // Shows the name with whitespace
//console.log(nalo.trim()); // Shows the name without whitespace


//Question 7
//console.log(5 + 3); //addition
//console.log(10 - 2); //subtraction
//console.log(4 * 2); // multiplication
//console.log(16 / 2); // division


//Question 8
//console.log(5 + 3); // Addition
//console.log(10 - 2); // Subtraction
//console.log(4 * 2); // Multiplication
//console.log(16 / 2); // Division



//Question 9 
//var favno: string = "7";
//console.log(`my favorite number is ${favno}.`);


//Question 10
//h ali 22/03/2024
// this shows personal information 
//let laqab: string= "mundar";
//console.log(`hello ${laqab}.`);


//Question 11
//let dost : string[]= ["ronaque", "shahzain", "zeeshan"];
//for (let i = 0; i < dost.length; i++) {console.log(dost[i]);}


//Question 12
//let dosts : string[]= ["ronaque", "shahzain", "zeeshan"];
//for (let dost of dosts ) {
//console.log(`hello ${dost}, would you like to play cricket today?`);}


//Question 13 
//let cars : string[]= ["buggati", "ferrari", "bmw", "audi"];
//cars.forEach(car=> {console.log(`i woould like to have ${car}, `);})


//Question 14 
//let logs : string[]= ["zeeshan", "ronaque", "shahzain", "musharaf"];
//logs.forEach(log=> {
  //console.log(`dear ${log}, would you like to join me for lunch? `);});



//Question 15 
//let unableToattend : string = "zeeshan";
//console.log(`${unableToattend} can't make it to lunch .`);

//replace the guest
//let newguest :string =  "faraz";
//logs[logs.indexOf(unableToattend)] = newguest;

//new invitations 
//logs.forEach(guest => {console.log(` dear ${guest},would you like to join me for lunch?`);});



//Question 16 
//let guests: string[]= ["ronaque", "zeeshan", "musharaf"];
//console.log("great news ! I found a bigger table !");


// adding guests
//guests.unshift("faraz");
//guests.splice(guests.length / 2, 0, "shahjan");
//guests.push("shahzain");

//guests.forEach(guest => {console.log(`dear ${guest}, would you like to join me for lunch?`);});


//Question 17 

//let guests: string[]= ["ronaque", "zeeshan", "musharaf"];
//console.log("great news ! I found a bigger table !");


// removing  guests
//guests.unshift("faraz");
//guests.splice(guests.length / 2, 0, "shahjan");
//guests.push("shahzain");
//guests.pop();

//guests.forEach(guest => {console.log(`dear ${guest}, i cant invite you lunch!`);});

//question 18

//let locationns = ["maldives", "burj khalifa", "taj mahal", "badshahi masjid"];
//console.log(locationns);
//locationns.sort();
//console.log(locationns);
//locationns.sort((a, b) => b.localeCompare(a));
//console.log(locationns);



//Question 19


//let logs : string[]= ["zeeshan", "ronaque", "shahzain", "musharaf"];
//logs.forEach(log=> {
//  console.log(`dear ${log}, would you like to join me for lunch? 4 peoples`);});




//Question 20


//let something: string[] = ["pakistan", "k2", "karachi", "multan", "lahore"];



//Question 21



//let something = ([{
  //name: "object",
  //type: "list",
  //choices: ["pakistan", "k2", "karachi", "multan", "lahore"]
//}]);
//console.log(something);


//Qestion 22


//let arry: number[] = [1, 2, 3, 4, 5];

//try{console.log(arry[7]);}
//catch (error){
  //console.error("an erorr occured", error);
//console.log("accessing the last element instead:",arry[arry.length -1]);

//}



//Question 23


//let car = "mehran";
//console.log("Is car == 'mehran'? | predict True.");
//console.log(car == "mehran");



//let bus = "hino";
//console.log("Is bus == 'hino'? | predict False.");
//console.log(bus == "hino");


//let van = "mehan";
//console.log("Is van == 'melhan'? | predict False.");
//console.log(van == "mehan");

//let gadi = "meran";
//console.log("Is gadi == 'mehran'? | predict True.");
//console.log(gadi == "meran");






//Question 24

//test for equaility
//const str1: string = "HELLO";
//const str2: string = "world";
//console.log(str1 === str2);
//console.log(str1 !== str2);



//test using the lower case func:

//const word : string = "HELLLO";
//console.log(word.toLowerCase() !== "hello");
//console.log(word.toLowerCase() === "hello");


// numerical tests 

//const num1 : number = 10;
//const num2 : number = 5;
//console.log(num1 === num2);
//console.log(num1 !== num2);




// and or test
//const num3 : number = 8 
//console.log(num1 > num2 && num2 < num3);

//console.log(num1 > num2 || num2 < num3);


// test arry or not 

//const arry : number[] = [1, 2, 3, 4, 5];
//console.log(!arry.includes(3));
//console.log(arry.includes(6));


//Question 25

//let allienclr = "green";

//if(allienclr == "green"){
 // console.log("you have earned 5 points");
  
//}

//if(allienclr == "red"){
  //console.log("you");
  
//}


//Question 26

//let allienclr = "green";

//if(allienclr == "green"){
  //console.log("you have earned 5 points");
  
//}else console.log("you have earned 10 points");



//Question 27

//let allienclr = "green";

//if(allienclr == "green"){
  //console.log("you have earned 5 points");
  
//}if(allienclr == "red") {console.log("you have earned 10 points");}
//else console.log("you lost");


//Question 28 

//let age = 10 
//if (age <= 2 ){
  //console.log("a baby");
  //if(age <=6){
    //console.log("a toddler");
    //if(age >= 9){
      //console.log("a child");
      
   // }
  //}
  
//}else console.log("a ");


//Question29

//let favfru: string[] = ["apple", "banana", "mango"];
//if(favfru.includes("banana")){
  //console.log("you reely like banana");
  
//}
//if(favfru.includes("apple")){
  //console.log("you reely like apple");
  
//}
//if(favfru.includes("orange")){
  //console.log("you reely like orange");
  
//}


//Question 30

//let usernames: string[]= ["admin", "eric", "sara", "john", "aleza"];

//for (let username of usernames){
  //if(username === "admin"){
   // console.log("hello admin would you like to see a status report");
    
 // }else console.log(`hello ${username}, thank you for logging in .`);
  
//}

//Question 31

//let users: string[]= ["eric", "john", "aleza"];

//if(users.length === 0 ){
  //console.log("we need to find some users");
  
//}else {
 // users = [];
  //console.log("all users have been removed");
  
//}


//Question 32

//let currusers: string[] = ["eric", "emma", "john", "mike", "aleza"];
//let newusers: string[] = ["eric", "emma", "aleza", "sara", "chris"];

//let currusersLower: string[] = currusers.map(user => user.toLowerCase());

//for (let user of newusers){
  //let isTaken: boolean = currusersLower.includes(user.toLowerCase());
  //if (isTaken){
    //console.log(`the username '${user}' is not availble. please enter a new username.`);
  //}else{console.log(`the username '${user}' is available`);
 // }
//}


//Question 33

//const numbers: number[] = [1, 2, 3, 4 , 5 , 6 , 7, 8 , 9];

//for(const number of numbers){
  //let oridinal : string; 
  //if (number === 1){
    //oridinal = "st";
  //}else if (number === 2){
    //oridinal = "nd";
  //}else if (number === 3){
    //oridinal = "rd";
  //}else{
    //oridinal = "th";
  //}
  //console.log(`${number}${oridinal}`);
  
//}

//Question 34

//const pizzas: string[] = ["pepparoni", "margireta", "bbq "];

//for(pizza of pizzas) {console.log(`i like ${pizza}`);
//}
//console.log("i really love pizza");


//Question 35 

//const animals: string[] = ["dog", "cat", "rabbit"];

//for (const animal of animals){
 // console.log(`a ${animal.toLowerCase()} would make a great pet `);
  
//}

//Question 36


//function make_shirt(size: string, message: string): void {
  //console.log(`the size of the shirt is ${size} and the message is ${message}`);
//}
//make_shirt("large", "i love javascript");



//Question 37


//function make_shirt(size: string, message: string): void {
  //console.log(`the size of the shirt is ${size} and the message is ${message}`);
//}
//make_shirt("large", "i love javascript");
//make_shirt("medium", "i love python");
//make_shirt("small", "i love java");



//Question 38



//function describe_city(city: string, country: string = "Pakistan"): void {
  //console.log(`${city} is in ${country}.`);
//}

//describe_city("karachi");
//describe_city("paris", "france");


//Question 39

//function city_country(city: string, country: string): string { return `${city}, ${country}`; }

//const city1 = city_country("karachi", "pakistan");
//const city2 = city_country("london", "united kingdom");
//const city3 = city_country("tokyo", "japan");
//console.log(city1);
//console.log(city2);
//console.log(city3);


//Question 40



//interface Album {
  //artist: string;
  //title: string;
  //tracks?: number;
//}

//function make_album(artist: string, title: string, tracks?: number): Album { const album: Album = { artist: artist, title: title, }; 
//if (tracks){
 // album.tracks = tracks;
//}
//return album; }


//const album1 = make_album("mehran", "mehran", 2001);
//const album2 = make_album("mehran", "mehran", 2002);
//const album3 = make_album("mehran", "mehran", 2003);

//console.log(album1);
//console.log(album2);
//console.log(album3);


//Question 41



//function showMagicians(magicians: string[]): void {
  //magicians.forEach((magician) => {
    //  console.log(magician);
  //});
//}

// Array of magician names
//const magicianNames: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];

// Call the function to show magician names
//showMagicians(magicianNames);


//Question 42


//function make_great(magicians: string[]): void {
  //for (const magician of magicians){
    //console.log(magician);
    
  //}
//}

//function show_magicians(magicians:string[]): void {
  //for (const magician of magicians){
    //console.log(magician);
    
  //}
//}

//let magicians: string[] = ["zeeshan", "faraz", "ronaq"];
//make_great(magicians);
//show_magicians(magicians);


//Question 43

///function makeGreat(magicians: string[]): string[] {
  // Create a copy of the original array
  //const greatMagicians: string[] = magicians.slice();

  // Add 'Great' to each magician's name in the new array
  /*for (let i = 0; i < greatMagicians.length; i++) {
      greatMagicians[i] = "Great " + greatMagicians[i];
  }

  return greatMagicians;
}

function showMagicians(magicians: string[]): void {
  // Display the magicians' names
  for (const magician of magicians) {
      console.log(magician);
  }
}

// Original array of magicians' names
const originalMagicians: string[] = ["Merlin", "Houdini", "David Copperfield"];

// Create a new array with 'Great' added to each magician's name
const greatMagicians: string[] = makeGreat(originalMagicians);

// Show both arrays
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);*/


//Question 44

/*function sandwich(...items: string[]): void {
  console.log("sandwich summary");
  if(items.length === 0){
    console.log("no items selected . your sandwich is empty");
    
  }else{
    console.log("you ordered a sandwich with:");
    for (const item of items){console.log("-"+ item);
    }
    }
    console.log();
}


sandwich("ham", "cheese", "tomato");
sandwich("turkey", "swiss", "mustard");
sandwich("peanut", "butter", "jelly");*/


//Question 45

/*interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
  const car: Car = {
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
console.log(myCar);*/