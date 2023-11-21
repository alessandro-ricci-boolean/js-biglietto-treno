let km = prompt("Inserire kilometraggio");

let age = prompt("Inserire età");

let price = km * 0.21 .toFixed(2);
console.log(price)
if (age < 18) {
    let discount = price * 0.20 .toFixed(2);
    price = price - discount
}
else if (age > 64) {
    let discount = price * 0.40 .toFixed(2);
    price = price - discount
}
else {} 
console.log(price) 