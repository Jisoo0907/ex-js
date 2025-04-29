# Navbar

### 스크롤 내렸을 때 navbar 색상 변경하기

```
document.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainer.offsetTop - nav.offsetHeight - 50) {
    nav.classList.add("active");
    logo.src = "./img/logo-dark.png";
    home.src = "./img/home-dark.png";
  } else {
    nav.classList.remove("active");
    logo.src = "./img/logo-light.png";
    home.src = "./img/home.png";
  }
});
```

- `window.scrollY` -> 현재 스크롤 위치를 가져와서
- `bottomContainer.offsetTop` → bottomContainer 요소가 문서의 최상단에서 얼마나 떨어져 있는지 확인한다.
- `nav.offsetHeight` → nav의 높이를 가져온다.
- => 현재 스크롤 위치가 특정 요소(bottomContainer)보다 아래로 내려가면 동작하도록 설정함.

### 최종 결과

![사진](img/result.gif)
