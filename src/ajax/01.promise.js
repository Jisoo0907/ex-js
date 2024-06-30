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

const defaultOptions = {
  shouldRejected: false,
  data: "성공",
  errorMessage: "알 수 없는 오류",
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === "string") {
    config.timeout = options;
  }

  if (typeof options === "object") {
    config = { ...defaultOptions, ...options };
  }
  console.log(config);

  const { shouldRejected, data, errorMessage, timeout } = config;
  // config의 속성들을 개별 변수에 할당 (구조 분해 할당)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(1000);
