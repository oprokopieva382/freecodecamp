//var myName;
var a = 7;

var a;
a = 7;
var b;
var b = a;

var myFirstName = "Oksana";
var myLastName = "Prokopieva";

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;

let myVar = 87;
myVar++;

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
//
const myStr = "This is the start." + "This is the end.";
//
let myStr1 = "This is the first sentence. ";
myStr1 += "This is the second sentence.";
//
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
testStrict("7");
//Practice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(99);
//Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(17);
//Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
//Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);
//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);
//Record Collection
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
//Iterate with JavaScript While Loops
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
//Iterate with JavaScript For Loops
const myArray1 = [];
for (let i = 1; i <= 5; i++) {
  myArray1.push(i);
}
//Iterate Odd Numbers With a For Loop
const myArray2 = [];
for (let i = 1; i <= 9; i += 2) {
  myArray2.push(i);
}
//Count Backwards With a For Loop
const myArray3 = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray3.push(i);
}
//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
//Iterate with JavaScript Do...While Loops
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);
//Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
