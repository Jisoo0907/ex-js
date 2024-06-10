let company = {
  // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // 첫 번째 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else {
    // 두 번째 경우
    let sum = 0;

    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}

sumSalaries(company); // 7700

/* function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
pow(2, 3); */
