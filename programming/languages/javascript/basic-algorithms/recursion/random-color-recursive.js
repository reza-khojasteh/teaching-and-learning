function randColor() {
    return '#' + (function co(lor) {
        //console.log(lor);
        if (lor.length === 6) return lor;
        else {
            lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)];
            return co(lor);
        }
    })('');
}

console.log(randColor());