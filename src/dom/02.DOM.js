/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
const first = document.body.querySelector(".first");
// console.log(first.parentNode);

// - childNodes
/* const list = document.body.querySelector(".list").childNodes;
list.forEach((elem) => {
  // console.log(elem);
}); */

// - firstChild
// console.log(document.body.querySelector(".list").firstChild);

// - lastChild
//console.log(document.body.querySelector(".list").lastChild);

// - previousSibling
//console.log(document.body.querySelector(".list").previousSibling);

// - nextSibling
console.log(first.nextElementSibling);

/* 요소 노드에서만 사용 가능 */
// - parentElement
console.clear();
console.log(first.parentElement);

// - children
console.log(document.body.querySelector("h1").children);

// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling
console.clear;
// 1. id가 visual-section인 section 태그 요소
const section = document.querySelector("#visual-section");

// 2. class가 list인 ul 태그 요소
const list = section.querySelector(".list");

// 3. list 요소 안에 about li 태그 요소
const about = list.querySelector("li:nth-child(2)");
const aboutLi = [...list.children].find((i) => i.textContent === "about");

// console.log(list.children[1]);
// console.log(section.querySelector(".list > li:nth-child(2)"));

// 4. name 속성이 search-box 인 form 태그 요소
const form = document.querySelector('[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;

// 6. form 요소 안에 있는 input 태그 요소
const input = form.lastElementChild;

/* -------------------------------------------------------------------------- */
/*                                   함수 만들기                               */
/* -------------------------------------------------------------------------- */

/* 문서 대상 찾기 */
// - getElementById
const search = document.getElementById("search");

// - getElementsByTagName

// - getElementsByClassName

// - querySelector

// - querySelectorAll

// - closest

/* 문서 대상 확인 */
// - matches
console.log(section.matches(getNode("#visual-section")));

// - contains
