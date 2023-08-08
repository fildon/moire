const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const SPEED = 0.01; // px / ms

const paintStaticVerticals = () => {
  const GAP_BETWEEN_VERTICALS = 20; // px
  let x = Math.min(canvas.width, GAP_BETWEEN_VERTICALS) - GAP_BETWEEN_VERTICALS;
  while (x < canvas.width + GAP_BETWEEN_VERTICALS) {
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "silver";
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
    x += GAP_BETWEEN_VERTICALS;
  }
};

const paintMovingVerticals = (timestamp) => {
  const GAP_BETWEEN_VERTICALS = 21; // px
  let x =
    ((SPEED * timestamp) % Math.min(canvas.width, GAP_BETWEEN_VERTICALS)) -
    GAP_BETWEEN_VERTICALS;
  while (x < canvas.width + GAP_BETWEEN_VERTICALS) {
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "dimgray";
    context.moveTo(x, canvas.height / 2);
    context.lineTo(x, canvas.height);
    context.stroke();
    x += GAP_BETWEEN_VERTICALS;
  }
};

const step = (timestamp) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  context.lineCap = "square";

  paintStaticVerticals();
  paintMovingVerticals(timestamp);

  window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);
