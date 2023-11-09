//////////////
// COMMENTS //
//////////////

// single line comments start with two forward slashs

/*
    while multiline comments start with a slash star
    and end with a star slash

    comments do not execute like normal code and server
    to help you and others understand what the code does
*/

///////////////
// VARIABLES //
///////////////

// variable declarations can be broken up into 3 parts
// modifier : var, let, const
// name : can contain any alphanumeric character, dollar sign, or underscore, but it cannot start with a number
// value : the data to be stored in the variable
// [modifier] [name] = [value];

// with var
var a = "a"; // you can declare a variable
var a = "a"; // or redeclare a variable
a = "a"; // or set a variable

// with let
let b = "b"; // you can declare a variable
// let b = "b"; // but NOT redeclare a variable
b = "b"; // you can set a variable

// with const
const c = "c"; // you can declare a variable
// const c = "c"; // but NOT redeclare a variable
// c = "c"; // nor set a variable

////////////////
// DATA TYPES //
////////////////

// number
const integer = 0; // we can declare simple numbers
const float = 1.5; // floating point number
const scientific_notation = 52e3; // scientific notation
const number_with_underscores = 1_000_000; // or numbers with underscores

// strings usually represent text to or from a user
const string_with_quotes = "any character, escape with \" otherwise it closes."; // we can create strings with double quotes
const string_with_apostrophe = 'any character escape with \' otherwise it closes.'; // single quotes
const string_with_backtick = `any character, escape with \` otherwise it closes.`; // or backticks

// booleans help us determine yes/no values
const boolean_yes = true; // true is yes
const boolean_no = false; // false is no

// there are two values in Javascript that represent nothing
const thisIsNull = null; // is an explicit signal that means there is currenly nothing there, but there could
const thisIsUndefined = undefined; // is an implicit signal that means there is currently nothing there, and there never should

// arrays contain one or more item, usually of the same type or shape
const empty_array = []; // this is an array of 0 items
const array_of_strings = ["this", "is", "my", "name"]; // this is an array of 4 strings
const array_of_numbers = [1, 1, 2, 3, 5, 8, 1.3]; // this is an array of 7 numbers

// the values of an array can be accessed by their index
// arrays are 0 based meaning the first item is at index 0
const the_arrays_first_value = array_of_strings[0]; // this gets the first item in the array
array_of_strings[1] = "isn't"; // this sets the second item in the array

// objects allow you to define details about your data
const empty_object = {}; // this object has no details
const person = { // this object has many details about a person named Logan
    name : "Logan",
    age : 32, // their age is 32
    height : { // their height is 5 feet 8 inches
        feet : 5,
        inches : 8,
    },
    has_hair: true, // they have hair
    children: [], // they have no children
    languages: ["English", "Javascript"], // and they speak English and Javascript
};

// the values of an object can be accessed by their key
let personName = person.name; // here we get the person's name
personName = person["name"]; // we can even use a string...
const nameKey = "name"; // ...or a variable...
personName = person[nameKey]; // ...to access the name
person.name = "Liz"; // we can also update the value

/////////////////////////
// ADVANCED DATA TYPES //
/////////////////////////

// You will rarely if ever use the following data types, but they are good to know about

// symbols define a location in an array 
const string_symbol = Symbol("index"); // 
const number_symbol = Symbol(1); //

const bigint_inline = 100n;
const bigint_constructor = BigInt(100);

/* 
    Literal - any value explicity written as code, eg:

    "This is a string literal"

    false // is a boolean literal

    { foo : "bar" } // is an object literal

*/

/////////////
// CONSOLE //
/////////////

// there are 4 log levels in Javascript, these methods give you access to each
console.debug("logs at debug level.");
console.warn("logs at warn level.");
console.error("logs at error level.");
console.info("logs at info level.");

// the remaining logs are considered info level
console.dir(person); // wraps the output in a Javascript object
console.log(person); // displays raw output
console.log(
    "%cnumber: %d %i %f, string: %s, object: %o %O", // format string
    "color : red; font-size : 16px;", // %c applys styling to the string, you can have more than 1
    10.5, // %d displays the output as an integrer
    10.5, // %i also displays the output as an integrer
    10.5, // %f displays the output as a float
    "ten point five", // %s displays the output as a string
    { 
        ten_point_five : 10.5 // %o displays the raw output
    },
    { 
        ten_point_five : 10.5 // %O displays the output as a Javascript object
    },
);

// info logs
console.group("Named group"); //
console.log("Level 1"); //
console.groupCollapsed();
console.log("Level 2");
console.groupEnd(); //
console.groupEnd(); //

console.assert(person.age > 21, "this person cannot drink"); //

console.table([person]); //

console.count("clicks"); //
console.countReset("clicks"); //

console.time("how long does this take?"); //
console.timeEnd("how long does this take?"); //

console.trace(); //

console.clear(); //