const points = [34, 15, 2, 52, 19, 56, 30, 57, 23];

const allSum = function (x) {
    console.log(x);
    let total = 0;
    for (a of x) {
        total += a;
    }
    console.log(total);
    return total;
}
// allSum(points)

const classify = function (x) {
    const even = [];
    const odd = [];
    const result = {
        even,
        odd
    };
    for (let i = 0; i < x.length; i++) {
        x[i] % 2 === 0 ? even.push(x[i]) : odd.push(x[i])
    }
    console.log(result);
    return result;
}
// classify(points)

const divideArrToParts = function (arr, parts) {
    const partSize = Math.ceil(arr.length / parts);
    const result = [];
    for (let i = 0; i < arr.length; i += partSize) {
        result.push(arr.slice(i, i + partSize));
        console.log(i);
    }
    console.log(result);
    return result;
}
// divideArrToParts(points, 5);

const arrDivider = function (arr,start,end) {
   let result = arr.slice(start,end+1);
    console.log(result);
    return result;
}
// arrDivider(points,2,5)