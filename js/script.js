let km = prompt("Inserire kilometraggio");

let age = prompt("Inserire età");

let price = km * 0.21;
console.log(price)
if (age < 18) {
    let sconto = price * 0.20
    price = price - sconto
}
else if (age > 64) {
    let sconto = price * 0.40
    price = price - sconto
}
else {} 
console.log(price)