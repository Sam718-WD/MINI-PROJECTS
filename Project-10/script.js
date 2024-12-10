let main = document.querySelector(".main");
// let cur = document.querySelector("#cursor");

// main.addEventListener("mousemove", function(dets){
//   cur.style.left = dets.x+"px"
//   cur.style.top = dets.y+"px"
// })

// let cursor = document.querySelector("#cursor");

// document.addEventListener("mousemove", function(event) { // Use event for broader compatibility
//   cursor.style.left = event.clientX + "px"; // Use clientX/Y for accurate positioning
//   cursor.style.top = event.clientY + "px";
// });

let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (event) => {
  const cursor = document.querySelector("#cursor");
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY}px`;
});

function animateCursor() {
  // Gradually move cursor position towards the mouse position
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor(); 