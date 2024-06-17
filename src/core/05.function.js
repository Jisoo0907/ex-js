/* -------------------------------------------------------------------------- */
/*                                   recursive function                       */
/* -------------------------------------------------------------------------- */
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

/* 배열 유무 확인해주는 함수 */
const isArray = (arr) => {
  if (
    Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === "array"
  )
    return arr;
};

/* 급여만 출력하는 함수 */
function sumSalaries(department) {
  if (isArray(department)) {
    return department.reduce((acc, cur) => acc + cur.salary, 0);
  } else {
    let sum = 0;

    for (let value of Object.values(department)) {
      sum += sumSalaries(value);
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700

/* -------------------------------------------------------------------------- */
/*                               rest parameter                               */
/* -------------------------------------------------------------------------- */
const add = (...value) => value.reduce((acc, cur) => acc + cur, 0);

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/* -------------------------------------------------------------------------- */
/*                               spread operator                              */
/* -------------------------------------------------------------------------- */
const a = [1, 2, 3, 4, 5];

console.log(...a);

/* const b = {
  name: "지수",
  age: 26,
};

console.log(...b);  객체는 iterable[Symbol.iterator]가 아님 */

const user = {
  name: "이지수",
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
};

/* 텍스트 반복 해주는 함수 */
let repeat = (text, repeatCount) => {
  let result = "";

  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
};

repeat("텍스트", 3);
