function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = document.querySelector(".first");
const second = document.querySelector(".second");

// delay(() => {
//   first.style.top = "-100px";
//   second.style.top = "100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     second.style.transform = "rotate(-360deg)";
//     delay(() => {
//       first.style.top = "0px";
//       second.style.top = "0px";
//     });
//   });
// });

const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve("성공!");
  } else {
    reject("실패!");
  }
});

function delayP() {
  return new Promise((resolve, reject) => {
    resolve("성공");
  });
}

delayP().then;
