const ground = document.querySelector(".ground");

function throttle(callback, limit = 200) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      // callback.call(this, e); 이 때는 매개변수 자리에 e만 쓰면 됨
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
