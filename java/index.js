let form = document.getElementsByTagName("form")[0];
let submit = document.querySelector(".submit");
let email = document.querySelector(".mail");
let erro = document.getElementsByClassName("erro")[0];
let errovalid = document.getElementsByClassName("errovalid")[0];

let valid = /\w+@\w.\w{1,3}/;
submit.onclick = function (e) {
  if (valid.test(email.value) == false) {
    e.preventDefault();
    erro.classList.add("show");
    errovalid.classList.add("show");
    form.style.borderColor = "red";
  }
};
