const minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  plus = document.querySelector(".plus");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerHTML = a;
});

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerHTML = a;
  }
});
