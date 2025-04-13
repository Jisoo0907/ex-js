const today = new Date();

const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);

const button = document.querySelector("button");
const totalAge = document.querySelector(".total-age");
const dateInput = document.querySelector("input");

function AgeCalc(date) {
  const birthYear = Number(date.value.slice(0, 4));
  const birthMonth = Number(date.value.slice(5, 7));
  const birthDay = Number(date.value.slice(8, 10));

  let age = year - birthYear;

  if (month > birthMonth || (month === birthMonth && day >= birthDay)) {
    return age;
  } else {
    age--;
  }

  if (age < 1) {
    return 0;
  }

  return age;
}

button.addEventListener("click", () => {
  if (!dateInput.value) {
    alert("날짜를 선택해주세요!");
    return;
  }
  totalAge.textContent = AgeCalc(dateInput);
});
