const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => 성공 / 실패

const user = {
  name: "tiger",
  age: 40,
  gender: "male",
};

/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */

function xhr(method, url, body) {
  const xhr = new XMLHttpRequest();

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.open(method, url);
}

xhr({
  성공(data) {
    console.log(data);
  },
  실패() {},
  url: ENDPOINT,
});
