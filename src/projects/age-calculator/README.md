# 나이 계산기

<br/>

## 리팩토링

<br/>

### 오늘 날짜를 숫자로 다루기

<br/>

- 수정 전

```
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
```

<br/>

- 수정 후

```
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
```

<br/>

### 계산 로직 간소화

<br/>

- 수정 전

```
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
```

<br/>

- 수정 후

```
let age = currentYear - birthYear;
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
  age--;
}
return age < 1 ? 0 : age;

```

<br/>

### 최종 결과

<br/>

![Image](https://github.com/user-attachments/assets/8b4594a4-4658-4802-ab72-5cfea5eba0ab)
