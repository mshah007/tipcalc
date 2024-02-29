function calculate() {
  let amount = document.querySelector("#amount");
  amount = Number(amount.value);

  let percent = document.querySelector("#tip");
  percent = Number(percent.value);
  percent /= 100;

  let tip = amount * percent;
  let totalamount = amount + tip;
  totalamount = totalamount.toFixed(2);

  amount = document.querySelector("#amount");
  amount.value = 0;

  percent = document.querySelector("#tip");
  percent.value = 0;

  let total = document.querySelector("h2");
  let totalDisplay = `Total: $${totalamount}`;
  total.innerText = totalDisplay;
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", calculate);
