const bodyStyle = document.querySelector("body");

console.log("boady stye", bodyStyle.style.backgroundColor);
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "orange") {
      bodyStyle.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
        bodyStyle.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "yellow") {
        bodyStyle.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "blue") {
        bodyStyle.style.backgroundColor = e.target.id;
      }
  });
});
