// let js = "Amazing";
// if (js === "Amazing") alert("JS is Fun");
// console.log(40 + 8 + 23 - 10);

// 
// console.log("Jones");
// console.log(23);

// let firstName = "Bob";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// firstName --- came case  -- in JS variable name are named in camelcase in converntion
// cant use reserved keyword for vaiable name
// let $function = 27
// let person = 'Ajeet';
// let PI = 3.1415;

// A)
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// B)
// let job1 = 'Programmer'
// let job2 = 'Teacher';

// A is more descriptive


// ass1
// let country = 'Portugal';
// let continent = 'Europe';
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);


//  Data Types
/*
1. Number  floating and intergers --- let age = 23;
2. strings sequence of charecters let firstName = 'sooraj';

3. Boolean: Logical type that can only be true or false ,let fullAge = true;

4. undefined: values taken by variable is not yet defined("emplty value") , let children;

5. Null also ,eams empty value

6. symbol(ES2015), value that is unique and annot be changed(Not useful now)

7. BigInt (ES2020), Larger integers than the number type an hold

8.

*/


// let javascriptIsFun = true ;
/*
typeof 
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jones');
*/


// console.log(javascriptIsFun);
// javascriptIsFun = 'Yes';
// console.log(javascriptIsFun);


// let year = 2024;
// console.log(year);
// console.log(typeof year)
// year = 1991

// console.log(typeof null);




/*
ways of declaring varable
let --- can assign new value tp variable declared with this keyword


const --- cann't assign new values to const variable
          can't be empty


var  ---
*/


// Arithmetic operator
// const now = 2021;
// const ageJones = now-1991;
// console.log(ageJones-2)
// console.log(ageJones*2)
// console.log(ageJones/2)
// console.log(2**3)

// // plus operators
// const fName = "Ajeet";
// const lName = "Gupta";

// console.log(fName+" " +lName);


// // Assignment operator

// let a = 10*5;
// console.log(a)
// a +=10;
// console.log(a)
// a *=4;
// console.log(a)
// a++;
// console.log(a)
// a--;
// console.log(a)

// // Comaprision operators  >,>=,<,<=,
// console.log(10 >= 10)
// console.log(10 > 9)
// console.log(10 < 11)



// operator precedence
// const now = 2021;
// const ageJones = now-1991;
// const ageSara = now-2017;

// console.log(now-1991 > now-2018);
// console.log(25-10-5);

// let x ,y;
// x = y = 25-10-5;
// console.log(x,y);

// const averagAge = (ageJones + ageSara)/2
// console.log(averagAge)



//template strings -- es6 fetcher(using backticks) 
// const firstName = "Jones";
// const job = "teacher";
// const birthYear = 2001;
// const year = 2037;
// const jonas = "I'm " + firstName + ', a ' + (year-birthYear) +" Old " + job;
// console.log(jonas)

// const JonasNew = `I'm ${firstName}, a ${year-birthYear} old ${job} !`;
// console.log(JonasNew)


// // previously
// console.log('string with \n\
// ajete')
// // now
// console.log(`This is 
// Ajeet`)



// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);
// console.log(1 + '1');

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean([]));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }


////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// console.log(prompt("What's is your Name"));
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

////////////////////////////
// Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }
// */



////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
*/

////////////////////////////////////
// The switch Statement
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }



////////////////////////////////////
// Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);



////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/