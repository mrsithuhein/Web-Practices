class Class {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.namePrefix = gender === "male" ? "U" : "Daw";
        this.fullName = this.namePrefix + " " + this.name
        this.bornYear = 2023 - this.age;
    }

    #private = "hide";
}

const obj = new Class("sth",15,"female");
console.log(obj);
obj.name = "llp";
console.log(obj); 
obj.add = 100;
console.log(obj);

console.log(obj.#private);
