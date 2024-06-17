/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 생성자 함수
function Rabbit() {}
// 함수를 만들기만 해도 디폴트 프로퍼티인 prototype이 설정됩니다.
// Rabbit.prototype = { constructor: Rabbit }

console.log(Rabbit.prototype.constructor == Rabbit); // true
