//First, the way we do using constructor functions (before ES6)
// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return "Out of stock";
//   } else if (this.numCopies < 10) {
//     return "Low stock";
//   }
//   return "In stock";
// };

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// };

// function TechnicalBook(title, author, ISBN, numCopies, edition) {
//   Book.call(this, title, author, ISBN, numCopies); //1. similar to calling super in ES6
//   this.edition = edition;
// }

// //Now, the remainder of the process of implementing inheitance in (before ES6) JS starts....

// // 2. Object.create() method creates a new object, using an existing object as the prototype of the newly created object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create):
// TechnicalBook.prototype = Object.create(Book.prototype);

// // 3. By creating prototype object for TechnicalBook class from Book class, we lost constructor function of TechnicalBook class.Hence we reassign the constructor function:
// TechnicalBook.prototype.constructor = TechnicalBook;

// // 4. Now we are ready to add methods over the prototype of TechnicalBook class:
// TechnicalBook.prototype.getEdition = function () {
//   return "The current version of this book is " + this.edition;
// };

//Second, the way we do the same using ES6 classes
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

const CrackingTheCodingInterview = new TechnicalBook(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);

//A DEPRECATED way of defining a getter (before ES6 classes)
// Book.prototype.__defineGetter__("availability", function() {
//   return this.getAvailability();
// });
//And a better way of doing the same (before ES6 classes):
//Ref: https://stackoverflow.com/questions/10592753/how-to-define-setter-getter-on-prototype
// Object.defineProperty(CrackingTheCodingInterview, "availability", {
//   get: function availability() {
//     return this.getAvailability();
//   },
// });

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
