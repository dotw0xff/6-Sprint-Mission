const pwInput = document.querySelector(".pw #pw");
const rePwInput = document.querySelector(".re-pw #re-pw");
const pwIcon = document.querySelector(".con .pw-icon");
const rePwIcon = document.querySelector(".con .re-pw-icon");

let isShow = false;
let reIsShow = false;

pwIcon.addEventListener("click", () => {
  if (isShow) {
    pwIcon.src = "../login/assets/show-pw.png";
    pwInput.setAttribute("type", "text");
  } else {
    pwIcon.src = "../login/assets/non-show-pw.png";
    pwInput.setAttribute("type", "password");
  }
  isShow = !isShow;
});

rePwIcon.addEventListener("click", () => {
  if (reIsShow) {
    rePwIcon.src = "../login/assets/show-pw.png";
    rePwInput.setAttribute("type", "text");
  } else {
    rePwIcon.src = "../login/assets/non-show-pw.png";
    rePwInput.setAttribute("type", "password");
  }
  reIsShow = !reIsShow;
});
