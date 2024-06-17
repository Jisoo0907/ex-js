/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    this.stomach.push(food);
  },
  get eat() {
    return this.stomach;
  },
};

// 생성자 함수

const rabbit = {
  pattern: "white",
  hunt(target) {
    this.prey = target;
    return `${target}을 조용히 먹는다.`;
  },
  __proto__: animal,
};

console.log(rabbit.legs);

const 야생토끼 = {
  color: "ivory",
  name: "토심이",
  __proto__: rabbit,
};

console.log(야생토끼.legs);

for (let key in 야생토끼) {
  console.log(key);
}

console.clear();

for (let prop in 야생토끼) {
  let isOwn = 야생토끼.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
  } else {
    console.log(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
  }
}

console.clear();

for (let value in 야생토끼) {
  console.log(Object.keys(야생토끼));
} */

/* -------------------------------------------------------------------------- */
/*                            constructor function                            */
/* -------------------------------------------------------------------------- */
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

function Rabbit(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = "화이트";
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

const 야생토끼 = new Rabbit("토심이");

function User(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.sayHi = function () {
    return `난 ${this.name}이야.`;
  };
}
const person1 = new User("이", "서울시", 24);

console.log(person1);
