document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[type="radio"]:checked').value;
    localStorage.setItem("rateValue", selected);
    window.location.href = "./thankYou.html";
  });

  if (rateSpan) {
    const rating = localStorage.getItem("rateValue");
    rateSpan.textContent = rating;
  }
});
