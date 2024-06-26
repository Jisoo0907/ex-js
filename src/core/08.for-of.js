/* --------------- */
/* For Of Loop     */
/* --------------- */

const languages = [
  {
    id: "ecma-262",
    name: "JavaScript",
    creator: "Brendan Eich",
    createAt: 1995,
    standardName: "ECMA-262",
    currentVersion: 2022,
  },
  {
    id: "java",
    name: "Java",
    creator: "James Gosling",
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: "ecma-334",
    name: "C#",
    creator: "Anders Hejlsberg",
    createAt: 2000,
    standardName: "ECMA-334",
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기 Java 포함 시 continue
// - 특정 조건에서 중단하기 break
for (let value of languages) {
  let name = value.name;
  if (name.includes("Java") && name.length < 5) break;
  //console.log(value);
}

const randomUser = {
  gender: "female",
  name: { title: "Ms", first: "Carol", last: "May" },
  location: {
    street: { number: 9162, name: "Church Road" },
    city: "Birmingham",
    state: "Cumbria",
    country: "United Kingdom",
    postcode: "FO5E 4TN",
    coordinates: { latitude: "-4.3301", longitude: "155.0223" },
    timezone: {
      offset: "-4:00",
      description: "Atlantic Time (Canada), Caracas, La Paz",
    },
  },
  email: "carol.may@example.com",
  login: {
    uuid: "39e4e214-7f66-44a6-a3ba-3b5ce46b8e25",
    username: "redduck745",
    password: "picks",
    salt: "8xzqOzAn",
    md5: "7250e4042c2367cc82487f798c7c5253",
    sha1: "6c0e2fac669d6d7f11fb0bab52493f441cf5834b",
    sha256: "9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8",
  },
  dob: { date: "1962-12-07T21:51:26.781Z", age: 59 },
  registered: { date: "2018-06-08T04:07:17.788Z", age: 4 },
  phone: "022 1280 9236",
  cell: "07653 428700",
  id: { name: "NINO", value: "SH 44 98 72 L" },
  picture: {
    large: "https://randomuser.me/api/portraits/women/21.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
  },
  nat: "GB",
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

// for...of는 반복 가능한 대상에만 사용할 수 있으니까 객체를 배열로 반환 후 사용
const arrayLike = {
  0: "body",
  1: "head",
  2: "div",
  length: 3,
  // Symbol(Symbol.iterator) (){ }
};

const keys = Object.keys(arrayLike);
const values = Object.values(arrayLike);
const entries = Object.entries(arrayLike);

for (let keyValue of entries) {
  //console.table(keyValue);
}

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("보호자의 동의를 받으셨나요?");
//   }
// }
/* 
물음표 연산자 ?를 사용하여 본문을 작성
OR 연산자 ||를 사용하여 본문을 작성 */
// function checkAge(age) {
//   return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
// }

// console.log(checkAge(18));

// function checkAge(age) {
//   return age > 18 || confirm("보호자의 동의를 받으셨나요?");
// }
// checkAge(18);

// 작은 값 반환 함수
function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

// console.log(min(2, 5)); //== 2;
// console.log(min(3, -1)); //== -1;
// console.log(min(1, 1)); //== 1;

// x의 n제곱 반환
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(3, 2)); // = 3 * 3 = 9
console.log(pow(3, 3)); // = 3 * 3 * 3 = 27
console.log(pow(1, 100)); // = 1 * 1 * ...* 1 = 1
