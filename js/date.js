const d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toJSON());

console.log(d.getDate());
console.log(d.getMonth() + 1);
console.log(d.getFullYear());
console.log(d.getHours() - 12);
console.log(d.getMinutes());
console.log(d.getSeconds());

d.setDate(d.getDate() + 300);
d.setMonth(d.getMonth() + 3);
d.setFullYear(d.getFullYear() + 5);
d.setHours(d.getHours() + 5);
console.log(d);

console.log(`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`);
