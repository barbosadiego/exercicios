const populacao = document.querySelectorAll(".num");
const total = document.getElementById("total");
let popNum = 0;
populacao.forEach((num) => {
  popNum += parseFloat(num.innerHTML.replace(/[ ]+/g, ""));
});
total.innerHTML = popNum.toLocaleString("BR");