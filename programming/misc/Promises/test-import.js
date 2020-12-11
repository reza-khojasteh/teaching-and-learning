// import Test from './test-export';
const Test = require('./test-export');
// const { staticFoo } = require('./test-export');

let test = new Test(2);
test.foo();
console.log(test.i);
console.log(test.j);
console.log(test.foo === Test.prototype.foo);
console.log(test.bar);
console.log(Test.staticFoo === Test.prototype.staticFoo);
Test.staticFoo();
test.bar();