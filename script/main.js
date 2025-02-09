// .slide_wrap

// const slideWrapEl = document.querySelector(".slide_wrap");
// let num = 0;

// setInterval(() => {
//   num++;
//   slideWrapEl.style.marginLeft = num * -100 + "%";
//   slideWrapEl.style.transition = "0.6s";
//   if (num == 3) {
//     setTimeout(() => {
//       num = 0;
//       slideWrapEl.style.marginLeft = 0;
//       slideWrapEl.style.transition = "0s";
//     }, 600);
//   }
// }, 3000);

// .slide_wrap
const slideWrapEl = document.querySelector(".slide_wrap");
let num = 0;

setInterval(() => {
  num++; //num 값을 1 증가
  slideWrapEl.style.marginTop = -350 * num + "px";
  slideWrapEl.style.transition = "0.6s";

  if (num == 3) {
    setTimeout(() => {
      num = 0;
      slideWrapEl.style.marginTop = "0";
      slideWrapEl.style.transition = "0s";
    }, 600);
  }
}, 3000);
