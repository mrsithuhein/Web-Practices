export default class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return Math.PI * this.r ** 2;
  }
}
