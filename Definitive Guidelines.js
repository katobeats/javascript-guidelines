// Core JavaScript

// VARIABLES are declared with the var keyword
var x; 

// JavaScript supports several types of VALUES
x = 1;
x = 0.01;
x = "hello world"
x = 'hello world'
x = true;
x = false; 
x = null;
x = undefined;

// An OBJECT is a collection of name/value pairs, or a string to value map
var book = {
  topic: "JavaScript";
  fat: true;
};

// Access to the properties of an object with . or []
book.topic
book["fat"]
book.author = "Flanagan";               // creates new properties by assignment
book.contents = {};                     // {} is an empty object with no properties

// ARRAYS (numerically indexed lists)
var primes = [2, 3, 5, 7];
primes[0];                              // the first element (index 0) of the array
primes.length                           // how many elements are in the array
primes[primes.length-1];                // the last element of the array
primes[4] = 9;                          // add new element by assignment
primes[4] = 1;                          // or alter existing element by assignment
var empty = [];                         // an empty array with no elements

var points = [                          // an array with two objects
  { x:0, y:0 },                         // each element is an object
  { x:1, y:1 }
];
var data = {                            // an object with two properties
  trial1: [[ 1, 2 ], [ 3, 4 ]],         // the value of each property is an array
  trial2: [[ 2, 3 ], [ 4, 5 ]]          // the elements of the arrays are arrays
};

// ARITHMITIC OPERATORS
4 + 2                                   // addition
4 - 2                                   // subtraction
4 * 2                                   // mutiplication
4 / 2                                   // division
points[1].x - points[0].x               // => 1 
"4" + "2"                               // => "32"

// EQUALITY and RELATIONAL OPERATORS
var x = 2,                              // value assignments
x == y                                  // equality
x != y                                  // inequality
x < y                                   // less-than
x <= y                                  // less-than or equal to
x > y                                   // greater-than
x >= y                                  // greater-than or equal to
"two" > "three"                         // 'tw' is alphabetically greater than 'th'
false == (x > y)                        // false is equal to false

// LOGICAL OPERATORS combine or invert boolean values
(x == 2) && (y == 3)                    // => true: both comparisons are true - && is AND
(x > 3) || (y < 3)                      // => false: neither comparison is true - || is OR
!(x == y)                               // => true: ! inverts a boolean

// FUNCTIONS are paramatized blocks of code that we can invoke
function plus1(x) {                    // define function name 'plus1' with parameter 'x'
  return x+1;                          // return a value one larger than the value passed in
}                                      // functions are enclosed in curly braces

plus1(y)                               // => 4: y is 3, so this invocation returns 3 + 1

var square = function(x) {             // functions can be assigned to variables
  return x * x;                        // compute the functions value
};                                     // semicolon marks the end of an assignment

square(plus1(y))                       // => 16: invoke two functions in one expression

// When functions are assigned to the properties of an object, they are called METHODS
// All javascript objects have methods

var x = [];
x.push(1, 2, 3);                       // The push() method adds elements to an array
x.reverse();                           // The reverse() method reverses the order of elements

var y = "hello, world"
y.length                               // => 12: length of a string
y.charAt(0)                            // => "h": the first character
y.charAt(y.length - 1)                 // => "d": the last character
y.substring(1, 4)                      // => "ell": the second, third and fourth characters
y.slice(1, 4)                          // => "ell": the second, third and fourth characters aswell
y.slice(-3)                            // => "rld": the last three characters
y.indexOf("1")                         // => 2: position of first letter "l"
y.lastIndexOf("1")                     // => 10: position of last letter "l"
y.indexOf("1", 3)                      // => 3: position of first "l" at or after 3
y.split(", ")                          // => ["hello", "world"] split into substrings
y.replace("h", "H")                    // => "Hello, World": replaces all instances
y.toUpperCase()                        // => "HELLO, WORLD"


// DOM Object METHODS
getElementById()                       // returns the element that has an ID attribute with the a value
getElementsByTagName()                 // returns a node list (collection/array of nodes) containing all elements with a specified tag name
getElementsByClassName()               // returns a node list containing all elements with a specified class
   
appendChild                            // adds a new child node to a specified node
removeChild()                          // removes a child node
replaceChild()                         // replaces a child node
insertBefore()                         // inserts a new child node before a specified child node
   
createAttribute()                      // creates an Attribute node
createElement()                        // creates an Element node
createTextNode()                       // creates a Text node
   
getAttribute()                         // returns the specified attribute value
setAttribute()                         // sets or changes the specified attribute, to the specified value

// We can define our own methods using the 'this' keyword which 
// refers to the object on which the method is defined

points.dist = function(){              // define a method to compute distance between points
  var p1 = this[0];                    // first element of array we're invoked on
  var p2 = this[1];                    // second element of array we're invoked on
  var a = p2.x - p1.x                  // difference in X coordinates
  var b = p2.y - p1.y                  // difference in Y coordinates
  return Math.sqrt(a * a +             // the pythagorean theorem
                   b * b);             // Math.sqrt() compares the square root
};
points.dist()                          // => 1.414: distance between two pairs

// JavaScript STATEMENTS include conditionals and loops

// IF Statement
function abs(x) {
  if (x >= 0) {
    return x;
  }
  else {
    return -x;
  }                                    // curly braces optional when 1 statement per clause
}

// WHILE Loop
function factorial(n) {
  var product = 1;                     // start with a product of 1
  while(n > 1) {                       // repeat statements in {} while expression in () is true
    product *= n;                      // shortcut for product = product * n;
    n--;                               // shortcut for n = n - 1
  }                                    // end of loop
  return product;                      // return the product
}
factorial(4)

// FOR Loop
function factorial2(n) {
  var i, product = 1;                  // start with a product of 1
  for(i = 2; i <= n; i++)              // automatically increment i from 2 up to n
    product *=i;                       // do this each time. {} not needed for 1-line loops
  return product;                      // return the factorial
}
factorial2(5)







