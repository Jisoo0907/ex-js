/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: "user-0900",
  name: "jisoo",
  email: "jisoo@naver.com",
  isSignIn: true,
  permission: "free",
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);

const user = authUser.uid;
console.log(user);

// 대괄호([]) 표기법
console.log(authUser["uid"]);

// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
authUser["permission"] = "paid User Rights";
console.log(authUser);

// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log((authUser["permission"] = "allPass"));

console.clear();

// 계산된 프로퍼티 (computed property)
let calculateProperty = "phone"; // phone | tel

// 프로퍼티 포함 여부 확인
for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열
const keyList = Object.keys(authUser);
console.log(keyList);

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0; // true면 없는 키
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [1, 2, 3, 4];

const [a0, a1, a2, a3] = arr;
console.log(a0);

const [a5, ...list] = arr;
console.log(...list);

console.clear();
for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

const {
  함정민: 함 = 100,
  지유진: 지,
  한상학: 한,
  이진용: 이,
  이지수 = 1000,
} = salaries;
console.log(함);

console.log(이지수);

function createUserObject(obj) {
  const { name: n, age: a, gender: g, job: j, ...rest } = obj; // 여기서 기본값 설정 가능 job = '홈프로텍터'
  // 단축어로 설정하고 싶으면 이렇게 해

  return {
    // 새로운 객체 반환
    name: n,
    age: a,
    gender: g,
    job: j, // job: undefined 나옴
  };
}

const data = {
  name: "beom",
  age: 40,
  gender: "male",
  job: "개발자", // 객체에 보낼 때 얘를 안 주면
  address: "서울시 중랑구", // 얘랑 아래 코드만 console.log(rest)에 출력됨
  tel: "010-666....",
};

const person = createUserObject(data);
console.log(person);

function createUser({ name: n, age: a, gender: g, job = "홈 프로텍터" }) {
  return {
    name,
    age,
    gender,
    job,
  };
}
