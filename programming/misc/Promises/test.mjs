import { promisify } from "util";

const sleep = promisify(setTimeout);

// sleep(1000)
//   .then(() => sleep(1000))
//   .then(() => sleep(1000))
//   .then(() => console.log("done"));

// console.log("out!");

async function asyncVersion() {
  await sleep(1000);
  await sleep(1000);
  await sleep(1000);
  console.log("done");
}
console.log("out!");

asyncVersion();
