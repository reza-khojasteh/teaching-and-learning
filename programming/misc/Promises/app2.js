console.log('Before the Executor');

// Blocking the event loop...
const p1 = new Promise(resolve => {
    // Very expensive CPU operation here...
    for (let i = 0; i < 1e9; ++i)
        continue;
    console.log('During the Executor');
    resolve('Resolved');
});

console.log('After the Executor');
p1.then(console.log);
console.log('End of Top-level Code');

// Result:
// 'Before the Executor'
// 'During the Executor'
// 'After the Executor'
// 'End of Top-level Code'
// 'Resolved'

// Chain of Immediately Settled Promises
const resolveSync = Promise.resolve.bind(Promise);
Promise.resolve('Presto')
  .then(resolveSync)  // Each invocation of `resolveSync` (which is an alias
  .then(resolveSync)  // for `Promise.resolve`) constructs a new promise
  .then(console.log); // in addition to that returned by `Promise#then`.