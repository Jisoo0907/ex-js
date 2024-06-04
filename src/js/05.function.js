/* increaseFontSize(elementId: string, increment: number): void
elementId는 HTML 요소의 ID 문자열입니다.
increment는 양수인 정수로, 폰트 크기를 증가시킬 값입니다.
해당 요소의 폰트 크기를 increment만큼 증가시킵니다.
decreaseFontSize(elementId: string, decrement: number): void
elementId는 HTML 요소의 ID 문자열입니다.
decrement는 양수인 정수로, 폰트 크기를 감소시킬 값입니다.
해당 요소의 폰트 크기를 decrement만큼 감소시킵니다. */

function increaseFontSize(elementId, increment) {
  // 양수인 정수로, 폰트 크기를 증가
  elementId = document.querySelector(elementId);
  elementId.style["fontSize"] += increment;
}

function decreaseFontSize(elementId, decrement) {
  // 해당 요소의 폰트 크기를 decrement만큼 감소
  elementId = document.querySelector(elementId);
  elementId.style["fontSize"] -= decrement;
}
