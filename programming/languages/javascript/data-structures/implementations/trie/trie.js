// An implementation for a trie DS node which (recursively) utilizes a node for each child
class Trie {
  constructor(isEnd = false) {
    this.isEnd = isEnd;
    this.children = {};
  }

  insert(s) {
    let node = this;

    for (const ch of s) {
      if (!node.children[ch]) {
        node.children[ch] = new Trie();
      }

      node = node.children[ch];
    }

    node.isEnd = true;
  }

  search(s) {
    let node = this;

    for (const ch of s) {
      if (!node.children[ch]) return false;

      node = node.children[ch];
    }

    return node.isEnd;
  }

  delete(s) {
    const deleteNodesRecursivelyIfNeeded = (node, s, i) => {
      if (i === s.length) {
        node.isEnd = false;
        return Object.keys(node.children).length === 0; // Returns true if node.children is an empty object!
      } else {
        const shouldContinueDeletion = deleteNodesRecursivelyIfNeeded(
          node.children[s[i]],
          s,
          i + 1
        );
        if (shouldContinueDeletion) delete node.children[s[i]];

        return (
          shouldContinueDeletion &&
          !node.isEnd &&
          Object.keys(node.children).length === 0
        ); // Returns true if all the conditions to delete the current node are in place (such that no necessary nodes would be deleted!)
      }
    };

    if (this.search(s)) deleteNodesRecursivelyIfNeeded(this, s, 0);
  }

  getAllStrings() {
    const returnStringsRecursively = (node, string, strings) => {
      if (node.isEnd) {
        strings.push(string.join(""));
      }

      for (const ch in node.children) {
        string.push(ch);
        returnStringsRecursively(node.children[ch], string, strings);
        string.pop();
      }
    };

    const strings = [];
    returnStringsRecursively(this, [], strings);

    return strings;
  }
}

// Testing...
const trie = new Trie();

trie.insert("car");
trie.insert("carpet");
trie.insert("crab");
trie.insert("crime");
trie.insert("trap");
trie.insert("trapeze");
trie.insert("type");
trie.insert("typed");
trie.insert("typo");

console.log(trie.search("trapeze")); // true
console.log(trie.search("types")); // false

trie.delete("machinable"); // No effect!
trie.delete("trap");
trie.delete("typo");

console.log(trie.getAllStrings());
