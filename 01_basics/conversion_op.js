let score = 33
let score1 = "23ab"
let score2 = Number("23")
let valueInScore1 = Number(score1)

console.log(typeof score); //number
console.log(typeof score1); // string
console.log(typeof score2); // number
console.log(valueInScore1) // NaN
console.log(typeof valueInScore1); //number

/*
Number class converions

undefined -> NaN
null -> 0
number in string -> number
string with characters -> NaN
boolean -> number value 0/1
*/

/*
Boolean class conversion

0/1 or any non-zero -> false/true
"" -> false
"name -> true"
*/

/*
String class conversion

33 -> "33"
*/