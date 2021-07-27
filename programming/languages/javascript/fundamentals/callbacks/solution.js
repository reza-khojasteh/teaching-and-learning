// Callback functions are functions that get passed to other functions as arguments and get called at a later point in time.
function clock() {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    console.log(tick);
    clockNode.textContent = tick;
  }, 1000);
}

clock();
