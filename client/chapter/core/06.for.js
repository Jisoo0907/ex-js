/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

/* let j = 5;

while (j) {
  console.log(j);
  j--;
} */
/* 
let k = 0;
do {
  console.log(k);
} while (0);
*/

const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

/*
let i = 0;
let l = frontEndDev.length;

while (i < l) {
  console.log(frontEndDev[i]);
  i += 1;
} */

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
/* for (let i = 0; i < frontEndDev.length; i++) {
  if (frontEndDev[i].includes("SVG") || frontEndDev[i].includes("jQuery"))
    continue;
  console.log(frontEndDev[i]);
} */

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
for (let j = 0; j < frontEndDev.length; j++) {
  console.log(frontEndDev[j]);
  if (frontEndDev[j].includes("JavaScript")) break;
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

/* let sum = 0;

while (1) {
  let value = +prompt("숫자 입력");

  if (!value) break;
  sum += value;
}
console.log("합계:" + sum); */

/* -------------------------------------------------------------------------- */
/*                                   짝수만 출력                               */
/* -------------------------------------------------------------------------- */
/* for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
} */

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

/* while문으로 바꾸기 */
// let k = 0;
// while (k < 3) {
//   console.log(`number ${k}!`);
//   k++;
// }

/* 사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 
사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 
띄워줍시다.

사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도
 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌
 값이 입력되는 예외 상황은 처리하지 않아도 됩니다. */
// let j = 0;
// while (true) {
//   let input = +prompt("숫자를 입력하시오.");
//   if (input > 100) {
//     continue;
//   }
//   break;
// }
