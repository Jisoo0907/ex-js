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
