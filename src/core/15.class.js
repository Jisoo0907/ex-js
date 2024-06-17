/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
/* class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const user = new User("kelly");
user.sayHi();
console.log(typeof User); // function
// User(); 에러
console.log(typeof user); // object

function makeClass(phrase) {
  return class {
    sayHi() {
      // alert(phrase);
    }
  };
}

let User2 = makeClass("안녕");

new User2().sayHi();

class User3 {
  name = "지";

  sayHi() {
    console.log(`${this.name}님`);
  }
}

new User3().sayHi();
 */

class Animal {
  legs = 4;
  tail = true;

  constructor(name) {
    this.name = name;
    this.stomach = [];
  }
  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal("포동이");
