/* -------------------------------------------------------------------------- */
/*                                   함수 표현식                               */
/* -------------------------------------------------------------------------- */
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);
 */

const sum = [1, 2, 3, 4, 5].reduce((accumulate, currentValue) => {
  return (accumulate += currentValue);
});

console.log(sum);

/* 평균 구하기 */
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average);
