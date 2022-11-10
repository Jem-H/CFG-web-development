// An object
// Note: use commas instead of semicolons
var girl = {
    name: `Anne`,
    age: 23,
    eyeColour: `blue`,
    sibling: null,
    friends: [`Susan`, `Marie`, `Jenny`], //array
    address: {
        //nested object (object within object)
        number: 123,
        street: `Cambridge Road`,
        city: `London`
    },
    sayHello: function() {
        // function
        console.log(`Hola Amigos!`);
        return 1; // console.log will return undefined w/o this
    }
}

//console.log(girl); //Displays "Object" and its properties

// Instead display each property separately
console.log(girl.name);
console.log(girl.age);
console.log(girl.friends); // lists all items in array
console.log(girl.friends[1]); // displays one element
console.log(girl.address.city); // displays one property
console.log(girl.sayHello()); 

// Another way would be not using console.log
// in this case we don't need the return statement 
girl.sayHello();

// My example
var house = {    
    bedrooms: 4,
    bathrooms: 2,
    garden: true,
    garage: false,
    location: {
        city: "Edinburgh",
        country: "UK"
    },
    price: 234567,
    viewers: ["Steve", "Bob", "Tim"]

};