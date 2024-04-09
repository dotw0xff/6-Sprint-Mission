document.querySelectorAll("input[data-form]").forEach((form) => {
  form.addEventListener("input", checkForm);
});

document.querySelectorAll(".chk-visibility").forEach((chk) => {
  chk.addEventListener("change", toggleVisibility);
});

function checkForm(e) {
  const inputWrap = e.target.closest(".section-form__input-box");

  e.target.classList.remove("on");
  inputWrap.querySelectorAll(".alert").forEach((alert) => {
    alert.remove();
  });

  const alert = document.createElement("strong");
  alert.classList.add("alert");
  alert.setAttribute("aria-live", "assertive");

  let alertContent = "";
  let isInvalid = false;
  const isEmpty = e.target.value === "" && true;

  switch (e.target.dataset.form) {
    case "email":
      alertContent = "이메일을 입력해주세요.";
      if (!e.target.checkValidity()) {
        isInvalid = true;
        alertContent = "잘못된 이메일 형식입니다.";
      } else {
        isInvalid = false;
      }
      break;
    case "password":
      alertContent = "비밀번호를 입력해주세요.";
      if (e.target.value.length < 8) {
        isInvalid = true;
        alertContent = "비밀번호를 8자 이상 입력해주세요.";
      } else {
        isInvalid = false;
      }
      break;
    case "password-re":
      alertContent = "비밀번호를 입력해주세요.";
      if (
        document.querySelector("#join-pw").value !==
        document.querySelector("#join-pw-re").value
      ) {
        isInvalid = true;
        alertContent = "비밀번호가 일치하지 않습니다.";
      } else {
        isInvalid = false;
      }
      break;
    case "nickname":
      alertContent = "닉네임을 입력해주세요.";
      break;
    default:
      alertContent = "";
      break;
  }
  alert.textContent = alertContent;

  if (
    (isEmpty || isInvalid) &&
    inputWrap.querySelectorAll(".alert").length === 0
  ) {
    e.target.classList.add("on");
    inputWrap.append(alert);
  }
  activateButtonIfValid(e);
}

function activateButtonIfValid(e) {
  const btnSubmit = document.querySelector("#btn-submit");
  const forms = document.querySelectorAll("input[data-form]");

  if (
    Array.from(forms).every((form) => form.value !== "") &&
    document.querySelectorAll(".alert").length === 0
  ) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function toggleVisibility(e) {
  const input =
    e.target.parentNode.querySelector("input[data-form='password']") ||
    e.target.parentNode.querySelector("input[data-form='password-re']");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
