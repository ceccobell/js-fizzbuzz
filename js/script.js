const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
  let content = document.createElement("span");
  square.append(content);
  if (i % 3 == 0 && i % 5 == 0) {
    content.textContent = "FizzBuzz";
    square.classList.add("pink");
  } else if (i % 5 == 0) {
    content.textContent = "Buzz";
    square.classList.add("yellow");
  } else if (i % 3 == 0) {
    content.textContent = "Fizz";
    square.classList.add("green");
  } else {
    content.textContent = i;
    square.classList.add("azure");
  }
}
