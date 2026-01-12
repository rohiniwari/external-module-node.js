import boxen from "boxen";

// message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic box (default style)
const classicBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
});

// 2. SingleDouble style
const singleDoubleBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble",
});

// 3. Round style
const roundBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "round",
});

// 4. Colored box (bonus)
const coloredBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "round",
  backgroundColor: "green",
});

// print outputs
console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);
console.log(coloredBox);
