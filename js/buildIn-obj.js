// const d = new Date(2019,3,3,6,36,13);
// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toJSON());

// console.log(d.getDate());
// console.log(d.getMonth()+1);
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// d.setDate(d.getDate()+300);
// d.setMonth(d.getMonth()+3);
// d.setFullYear(d.getFullYear()+5);
// d.setHours(d.getHours()+5);
// console.log(d);

// console.log(`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`);

// const d = new Date(new Date().setFullYear(2019))
// console.log(d);


// const s = new String("si thu hein lae lae phoo")
// console.log(s);

// console.log(s.length);
// console.log(s.substring(11,24));
// console.log(s.search("some"));
// console.log(s.search("hein"));
// console.log(s.replace("lae","thae"));
// console.log(s.replaceAll("lae","thae"));
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// const s2 = new String("   si  thu    ")
// console.log(s2);
// console.log(s2.trim().length);

// const s3 = new String(354678)
// console.log(s3.padStart(9,0));

// console.log(s.split(" "));

// const n = new Number(12.2456)
// console.log(n.toFixed(2));
// console.dir(n);

// let num = 33.23;
// let numText = "424.23kg";

// console.log(parseInt(num));
// console.log(parseInt(numText));

// console.log(parseFloat(num));
// console.log(parseFloat(numText));

// console.log(isFinite(100/0));
// console.log(isFinite(100/20));

// console.log(isNaN(3+8));
// console.log(isNaN("a"+5));

// console.log(eval("23+45"));

// console.log(Math.random());
// console.log(Math.floor(12.34))
// console.log(Math.floor(12.85));

// console.log(Math.ceil(12.1))
// console.log(Math.ceil(12.85));

// console.log(Math.round(12.34))
// console.log(Math.round(12.85));

// console.log(Math.max(2,4,5));
// console.log(Math.max(-3,-8,-8));

// console.log(Math.min(2,4,5));
// console.log(Math.min(-3,-8,-8));

// console.log(Math.floor(Math.random()*10));
// console.log(Math.ceil(Math.random()*10));

// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",
//     d : "ddd"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const run = function(x,y){
//     console.log(arguments);
//     return x+y;
// };
// console.log(run(3,5,4,5,5,9));

// const f = new Function("x","y","return x+y");
// console.log(f(2,4));

// console.log(f.bind(null,5,5).apply());
// let x = f.bind(null,3,3);
// let y = x.apply();
// // console.log(y);

// console.log(f.call(null,2,2));
