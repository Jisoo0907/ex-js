const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // 1~12
const currentDay = today.getDate();

const button = document.querySelector("button");
const totalAge = document.querySelector(".total-age");
const dateInput = document.querySelector("input");

function AgeCalc(date) {
  const birthYear = Number(date.value.slice(0, 4));
  const birthMonth = Number(date.value.slice(5, 7));
  const birthDay = Number(date.value.slice(8, 10));

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }
  return age < 1 ? 0 : age;
}

button.addEventListener("click", () => {
  if (!dateInput.value) {
    alert("날짜를 선택해주세요!");
    return;
  }
  totalAge.textContent = AgeCalc(dateInput);
});
