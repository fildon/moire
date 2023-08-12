const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const paintOffsetCircles = (timestamp) => {
  let radius = 10;
  const CIRCLE_GAP = 35;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const xOffset = 30 * Math.sin(timestamp / 500);
  const yOffset = 30 * Math.cos(timestamp / 500);
  // This is a deliberate overestimate upper bound
  // If we were being precise we'd use Pythagoras
  const radiusMax = canvas.width + canvas.height;
  while (radius < radiusMax) {
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "white";
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.arc(centerX + xOffset, centerY + yOffset, radius, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "blue";
    context.arc(centerX - xOffset, centerY - yOffset, radius, 0, 2 * Math.PI);
    context.stroke();

    radius += CIRCLE_GAP;
  }
};

const step = (timestamp) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  paintOffsetCircles(timestamp);

  window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);
