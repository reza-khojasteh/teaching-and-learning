# Available Books

Creating a simple solution for an inventory app, both before ES6 and after that

## What You'll Do

You're developing an inventory application for a bookstore.
You need to create a JavaScript class, "Book", that accepts a title, author,
ISBN (International Standard Book Number), and the number of available copies.

You should provide a getter function called 'availability' that checks the number of available copies
and returns "Out of stock" if it's zero, "Low stock" if it's less than 10, and "In stock" if it's 10 or greater.

You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.

You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.

## Requirements

- Use JavaScript's class notation
- Use JavaScript getters
