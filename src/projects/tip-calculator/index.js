// 필요한 DOM 요소들을 미리 선택
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const totalCalcBtn = document.querySelector("button");
const totalOutput = document.querySelector(".total");

// 계산 로직을 별도의 함수로 분리
function calculateTip(bill, tipPercentage) {
  return bill * (tipPercentage / 100);
}

// 최종 계산 결과를 보여주는 함수
function updateTotal() {
  const billAmount = Number(billInput.value);
  const tipPercentage = Number(tipInput.value);
  const tipAmount = calculateTip(billAmount, tipPercentage);

  totalOutput.textContent = tipAmount;
}

totalCalcBtn.addEventListener("click", updateTotal);
