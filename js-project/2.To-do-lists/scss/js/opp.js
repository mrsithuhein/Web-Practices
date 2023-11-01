class Class {
    static a = "aaa";

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.namePrefix = gender === "male" ? "U" : "Daw";
        this.fullName = this.namePrefix + " " + this.name
        this.bornYear = 2023 - this.age;
    }

    intro() {
        return "Hello World";
    }

    static callMe() {
        return "Call me";
    }

    #x = "xxx";
    #y() {
        return "this is private function";
    }

    private() {
        return "this is private" + this.#y();
    }
}

const obj = new Class("sth", 15, "female");

// obj.address = "palaw";
// obj.name = "llp";
// console.log(obj.name);
// console.log(obj.intro());
// console.log(obj);

// console.log(Class.callMe());
// console.log(Class.a);

// console.log(obj.private());

// class One {
//     a = "aa";
//     b = "bb";
//     c = "cc";
// }

// const one = new One;
// console.log(one);

// class Two extends One {
//     d = "dd";
//     e = "ee";
// }

// const two = new Two;
// console.log(two);


class Something {
    #x = "xxx";

    getter() {
        return this.#x;
    }

    setter(newValue) {
        return this.#x = newValue;
    }
}

const hello = new Something;
// console.log(hello.getter());

hello.setter("aabbba");

console.log(hello.getter());


console.log(Date());
console.dir(new Date());