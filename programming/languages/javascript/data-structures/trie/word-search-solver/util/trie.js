// An implementation for a trie DS node which (recursively) utilizes a node for each child
module.exports = class Trie {
  // The constructor to create a new trie node
  constructor(isEnd = false) {
    this.isEnd = isEnd;
    this.children = {};
  }

  build(words) {
    for (const word of words) this.insert(word);
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

  getNode(s) {
    let node = this;

    for (const ch of s) {
      if (!node.children[ch]) return null;

      node = node.children[ch];
    }

    return node;
  }

  search(s) {
    let node = this.getNode(s);

    return node !== null && node.isEnd;
  }

  startsWith(s) {
    return this.getNode(s) !== null;
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
        if (shouldContinueDeletion) delete node.children[s[i]]; // It is important to delete rather than setting 'node.children[s[i]]' to {}, null, or undefined!

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
};
