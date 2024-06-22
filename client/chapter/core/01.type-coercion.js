/* -------------------------------------------------------------------------- */
/*                           exercise type coercion                           */
/* -------------------------------------------------------------------------- */
let str = "123";
console.log(Number(str)); // 123(숫자)
console.log(typeof str); // string

let x = 10;
let value = x + "문자열";
console.log(value); // 10문자열
console.log(typeof value); // string

/* 암묵적 타입 변환 */
let a = 10;
a.toString();

let b = 10;
b + "";

console.clear();

console.log(typeof `문자열이니?123`);

/* -------------------------------------------------------------------------- */
/*                           explicit type coercion                           */
/* -------------------------------------------------------------------------- */
/* constructor function 사용하기 */
String(1);
String(NaN);
