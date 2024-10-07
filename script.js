// String
let name = "Siri";
console.log("Name (String): " + name);

// Number
let age = 22;
console.log("Age (Number): " + age);

// Boolean
let Student = true;
console.log("Student (Boolean): " + Student);

let Students = false;
console.log("Student (Boolean): " + Students);

// Undefined
let job;
console.log("Job: " + job);

// Null
let car = null;
console.log("Car: " + car);

// Array
let hobbies = ["Dancing", "Coding", "Listening to Music"];
console.log("Hobbies: " + hobbies);

// Object
let person = {
    firstName: "Madala",
    lastName: "ManasaSai",
    city: "Guntur"
   
};
console.log("Person: " + person.firstName + " " + person.lastName + " from " + person.city);

// Example of reassignment
name = "Madala Manasa yadav";
console.log("Updated Name : " + name);


// Object with an array inside
let persons = {
    firstName: "Madala",
    lastName: "Manasa",
    age: 22,
    
    hobbies: ["Dancing", "Coding", "Listening to Music"], 
    address: {
        city: "Guntur",
        country: "India",
        state: "AP",
    }

};


console.log("First Name: " + persons.firstName);
console.log("Last Name: " + persons.lastName);
console.log("Age: " + persons.age);


// console.log("Hobbies: " + persons.hobbies.join(", "));


console.log("First Hobby: " + persons.hobbies[0]); 
console.log("Second Hobby: " + persons.hobbies[1]); 


console.log("City: " + persons.address.city);
console.log("Country: " + persons.address.country);
console.log("state: " +persons.address.state);

var dad ={
    name:"Madala Malakondaiah",
    age:45,
    occ:"daily worker",
}
console.log(dad);

var mom =
   { name:"Madala.Sarada",
    age:40,
    occ:"housewife",
    
}

console.log(mom);

var about={
   name:"Manasa",
   age:21,
   edu:"btech",

}
console.log(about);

var bro={
    name:"Manohar",
    age:19,
    edu:"Inter",
}
console.log(bro);
