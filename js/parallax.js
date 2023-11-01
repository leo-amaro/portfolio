// Hacky Code
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
const list = document.querySelectorAll(".title_container");
console.log(list.innerText);

list.forEach((el) => {
  el.onmouseenter = (event) => {
    const target_element = event.target.querySelector("#shuffleText");
    console.log(target_element);
    let iteration = 0;
    const interval = setInterval(() => {
      target_element.innerText = target_element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target_element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= target_element.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 20);
  };
});
