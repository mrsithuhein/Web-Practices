const points = [34, 15, 2, 52, 19, 56, 30, 57, 23];

//sum function
const allSum = function (x) {
  console.log(x);
  let total = 0;
  for (a of x) {
    total += a;
  }
  console.log(total);
  return total;
};
// allSum(points)

//even, odd classify function
const classify = function (x) {
  const even = [];
  const odd = [];
  const result = {
    even,
    odd,
  };
  for (let i = 0; i < x.length; i++) {
    x[i] % 2 === 0 ? even.push(x[i]) : odd.push(x[i]);
  }
  console.log(result);
  return result;
};
// classify(points)

//arr parts divider function
const divideArrToParts = function (arr, parts) {
  const partSize = Math.ceil(arr.length / parts);
  const result = [];
  for (let i = 0; i < arr.length; i += partSize) {
    result.push(arr.slice(i, i + partSize));
    console.log(i);
  }
  console.log(result);
  return result;
};
// divideArrToParts(points, 5);

// arr divider
const arrDivider = function (arr, start, end) {
  let result = arr.slice(start, end + 1);
  console.log(result);
  return result;
};
// arrDivider(points,2,5)

// tri creater

const shapeCreater = function (icon, type, height, number) {
  for (let n = 0; n < number; n++) {
    for (let i = 1; i <= height; i++) {
      if (type === "triangle") {
        shape = i;
      } else if (type === "square") {
        shape = height;
      }
      let row = "";
      for (let j = 1; j <= shape; j++) {
        row += `${icon} `;
      }
      console.log(row);
    }
    console.log("");
  }
};
shapeCreater("&", "triangle", 4, 2);
