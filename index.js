// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let numbers = [1, 2, 4, 7, 10];
let mapped = numbers.map((n) => n * 2);
console.log(mapped);

let filtered = numbers.filter((n) => n % 2 == 0);
console.log(filtered);

console.log('slice:');
let sliced = numbers.slice(2, 4);
console.log(sliced);

let spliced = numbers.splice(2, 2);
console.log(numbers);

let spliced2 = numbers.splice(2, 0, 3, 5, 6);
console.log(numbers);

let pushed = numbers.push(11);
console.log(numbers);

let popped = numbers.pop();
console.log(numbers);

let sum = numbers.reduce((s, n) => s + n, 0);
console.log(sum);

let hasOdds = numbers.some((n) => n % 2 == 1);
console.log(hasOdds);

let allOdds = numbers.every((n) => n % 2 == 1);
console.log(allOdds);

var sum2 = 0;
numbers.forEach((n) => (sum2 += n));
console.log(sum2);

let sorted = numbers.sort((a, b) => b - a);
console.log(numbers);

numbers.reverse();
console.log(numbers);

const add = (a, b) => a + b;
console.log(eval('add(2,2)'));

const promise = new Promise(
  (resolve) => {
    setTimeout(() => resolve('Promised value'), 1000);
  },
  (reject) => {
    setTimeout(() => reject('Error'), 500);
  }
);

promise.then((val) => console.log(val)).catch((e) => console.error(e));

const person = {
  id: 1,
  fullName: 'Igor Cervac',
};
var personString = JSON.stringify(person);
console.log(personString);
var person2 = JSON.parse(personString);
console.log(person2);


let authorized = false;
function getPersonById(id){
  return new Promise((resolve, reject)=>{
    if (!authorized){
      reject("Unauthorized access");
    }
    resolve({id:1, fullName: 'Igor Cervac'});
  });
}

getPersonById(10)
.then(person => console.log(person))
.catch(err=> console.error(err))
.finally(()=> console.log("Completed"));

console.log(typeof(null));

try{
  if (!authorized){
    throw new Error("Unauthorized");
  }

}
catch(error){
  console.error(error);
}
finally{
  console.log("finally");

}

function Person(id, fullName){
this.id = id;
this.fullName = fullName;
}

let person3 = new Person(1,"One");
console.log(person3);

var cityCA = {state: 'CA', name: 'London', isCapital: false};
var cityUK = {...cityCA, isCapital: true, state: 'UK'};
console.log(cityUK);

const ar = [3,4,5];
const ar2 = [7,8,9];
const ar3 = [...ar, ...ar2];
console.log(ar3);
const [n1,n2,...ar4]=ar3;
console.log(n1,n2,ar4);

