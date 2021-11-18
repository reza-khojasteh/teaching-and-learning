# [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)/[Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) Operator #  
The **spread operator** _(the three dots we can put in front of an array or an object in JS)_ could be used in a pretty common pattern called **immutability**, 
where we _never edit existing values_, but where we _always replace them with copies plus the changes_.

These three dots are an operator and **they take the array or object after the operator and pull out all the elements of an array or all the properties of an object
and put them to whatever is around that spread operator**. With that, _we basically get a copy of the old array or object_.

The same three dots basically could be called the rest operator _where they are used essentially the opposite way_. The rest operator looks just like the spread operator, 
three dots, and **it's the place where you use it that defines how you call it**.

Rest operator is used to **merge multiple arguments into an array and you use it in the argument list of a function**.
