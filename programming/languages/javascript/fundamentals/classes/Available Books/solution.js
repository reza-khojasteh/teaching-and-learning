//First, the way we do using constructor functions (before ES6)
// function Book(title, author, ISBN, numCopies) {
//       this.title = title;
//       this.author = author;
//       this.ISBN = ISBN;
//       this.numCopies = numCopies;
// };

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return "Out of stock";
//   } else if (this.numCopies < 10) {
//     return "Low stock";
//   }
//   return "In stock";
// };

// Book.prototype.sell = function(numCopiesSold = 1) {
//       this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
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
 // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
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

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
//A DEPRECATED way of defining a getter (before ES6 classes)
// Book.prototype.__defineGetter__("availability", function() {
//   return this.getAvailability();
// });
//And a better way of doing the same (before ES6 classes):
//Ref: https://stackoverflow.com/questions/10592753/how-to-define-setter-getter-on-prototype
// Object.defineProperty(HungerGames, "availability", {
//   get: function availability() {
//       return this.getAvailability();
//   }
// });
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);