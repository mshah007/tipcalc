function calculate(e) {}
const form = document.querySelector(".input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  amount = Number(form.amount.value);

  percent = Number(form.tip.value);
  percent /= 100;

  let tip = amount * percent;
  let totalamount = amount + tip;
  totalamount = totalamount.toFixed(2);

  let total = document.querySelector("h2");
  let totalDisplay = `Total: $${totalamount}`;
  total.innerText = totalDisplay;
});
