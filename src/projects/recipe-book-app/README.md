# 레시피 북

<br/>

### 사용한 레시피 api

[spoonacular](https://spoonacular.com/food-api)

<br/>

### 발생한 에러

<br/>

> Uncaught SyntaxError: Cannot use import statement outside a module

- index.js에서 `import axios from "axios";`를 통해 axios를 사용하려고 했을 때 발생한 에러.
- 발생 이유를 찾아보니 브라우저가 해당 script를 ES6 모듈로 인식하지 못해서 발생하는 문제라고 한다.

<br/>

#### 첫 번째 시도 - type="module" 추가하기

- 다음과 같은 에러가 발생했다.

> Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../".

#### 해결 방안

- **CDN을 통해 axios 가져오기**

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js"></script>
<script src="./index.js" type="module"></script>
```

- 해당 코드를 추가해주고, index.js에서 import 부분을 제거해주었다.
- 위 방식으로 작성했을 경우, axios를 전역 객체로 로드하기 때문에 import문 없이 바로 사용할 수 있다.

#### 왜 CDN을 통해 axios를 사용할 수 있는 건지?

- 브라우저에서 JavaScript 모듈을 사용할 땐 크게 두 가지 방식이 있다.
- 1. ES 모듈(import/export) : 이 방식은 모듈의 정확한 위치를 지정해야 한다.
- 브라우저는 `import axios from "axios"`처럼 단순한 패키지 이름만으로는 모듈을 찾을 수 없다.
- Node.js와 달리 브라우저에는 node_modules 폴더나 패키지 의존성을 자동으로 관리하는 시스템이 없기 때문이다.
- 2. 전통적인 스크립트 태그 `<script src="..."></script>`를 사용하면 지정된 URL에서 JavaScript 파일을 로드하고 실행한다.
- 이 방식으로 로드된 라이브러리는 전역 객체로 노출되어 어디서든 사용할 수 있다.
- `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js"></script>` 이 코드가 axios 라이브러리를 전역 스코프에 axios라는 이름으로 노출시킨다.
