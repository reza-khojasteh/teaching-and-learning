/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

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
