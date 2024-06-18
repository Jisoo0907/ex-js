const ul = document.body.querySelector("ul");

// console.log(ul.lastChild);

for (let i = 0; i < document.body.childNodes.length; i++) {
  // console.log(document.body.childNodes[i]);
}

console.clear();

for (let node of document.body.childNodes) {
  console.log(`childNodes: ${node}`);
}

// console.log(document.body.parentNode === document.documentElement);

let element = document.querySelector("li");
// console.log(element.parentNode);
// console.log(element.lastElementChild);

for (let node of document.body.children) {
  console.log(`children: ${node}`);
}

console.clear();

// const li = document.querySelector("ul > li");
// console.log(li);

const firstLi = document.querySelectorAll("ul")[0];
console.log(firstLi);

console.clear();

for (let elem of document.body.children) {
  if (elem.matches("ul")) console.log(elem);
}

const li = document.querySelector("li");
li.closest("ul");

// document.body.innerHTML = "메롱";
// document.body.innerHTML = "<b>지수"; 닫는 태그 알아서 넣어줌
console.clear();

const textLi = document.body.querySelector("li");
console.log(textLi.textContent);
