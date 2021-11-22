# [Async Code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), [Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), and [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)s # 
When working with async code, _we get multiple techniques of handling it in JavaScript_:

**1-** The callback function is _the oldest one_, and you'll see it quite a bit, especially in Node.js. 
There's actually nothing wrong with it but you will face a problem if you have _a couple of depending async operations_.  

Basically, if we have _a couple of nested async calls_, we go deeper and deeper from a callback perspective, 
leading to what we know as a **"[callback hell](http://callbackhell.com/)"** (please have a look at our **first version of the sample solution**.)
  
**2-** That is why we also have **Promises** (starting from ES6,) which we can use instead.

_Promises are normally followed by "[then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)" blocks 
and **a "then" block is part of the promise**_, 
therefore, in the "then" block, _we can return another promise_ (**and even if that would not give us a promise, inside of the "then" block, 
returning it would convert it to a promise that instantly resolves**.)  

**This approach is more readable than having infinitely nested callbacks** 
(please have a look at our **second version of the sample solution and compare it with the first one :-)**
