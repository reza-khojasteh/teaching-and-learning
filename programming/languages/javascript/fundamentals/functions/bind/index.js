// Reference: https://stackoverflow.com/questions/11121586/how-does-function-prototype-call-bind-work

var toStr = Function.prototype.call.bind(Object.prototype.toString);
// OR
var toStr = Function.prototype.call.call/*call....*/.bind(Object.prototype.toString);
// NOTE THAT Function.prototype.call.call === Function.prototype.call BECAUSE Function.prototype.call.__proto__ === Function.prototype
// (The same would be for bind;
// as an example: Function.prototype.bind.bind.bind === Function.prototype.bind 
// AND Function.prototype.bind.call.bind === Function.prototype.bind 
// OR Function.prototype.call.bind.bind === Function.prototype.bind)
// THEN
console.log(toStr([]));// === console.log(Object.prototype.toString.call([]))
// OR
var toStr = Function.prototype.bind.bind(Object.prototype.toString);
// THEN
console.log(toStr([])()); // === console.log(Object.prototype.toString.bind([])());
// 2 "[object Array]"s would be printed out when you run this program!