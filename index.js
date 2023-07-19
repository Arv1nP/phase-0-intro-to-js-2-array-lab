// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function describe(name){
console.log(name);
}
describe(cats)

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    const newCatsArray = cats.concat(name);
    return newCatsArray;
  }
  function prependCat(Ralph) {
    const newCatsArray = [Ralph, ...cats];
    return newCatsArray;
}
function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
  function removeFirstCat(){const newCatsArray = cats.slice(1);
    return newCatsArray;
  }