// Reference: https://stackoverflow.com/questions/30889321/a-shorthand-for-function-prototype-call-call

// Suppose we have:
function my(p) { console.log(p); }
// Now you could call this function as:
my("Hello");
// OR
my.call(this, "Hello");
// OR
Function.prototype.call.call(my, this, "Hello");
// OR
// Function.prototype.call.call === Function.prototype.call BECAUSE Function.prototype.call.__proto__ === Function.prototype
// (The same would be for bind;
// as an example: Function.prototype.bind.bind.bind === Function.prototype.bind 
// AND Function.prototype.bind.call.bind === Function.prototype.bind 
// OR Function.prototype.call.bind.bind === Function.prototype.bind)
Function.prototype.call.call.call/*.call....*/(my, this, "Hello");
//OR
Function.prototype.call.bind(my)(this, "Hello");
// OR
var call = Function.prototype.call.call.bind(Function.prototype.call);
call(my, this, "Hello");
// OR
var call = Function.prototype.call.bind(Function.prototype.call);
call(my, this, "Hello");
// OR
var call = Function.prototype.call.call.call/*.call....*/.bind(Function.prototype.call);
call(my, this, "Hello");
// 8 "Hello"s would be printed out when you run this program!