// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
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
    let catsCopy = [...cats, name];
    return catsCopy;
}

function prependCat(name) {
    let catsCopy = [name, ...cats];
    return catsCopy;
}

function removeLastCat() {
    let catsCopy = cats.slice(0,-1);
    return catsCopy;
}

function removeFirstCat() {
    let catsCopy = cats.slice(1,cats.length);
    return catsCopy;
}
