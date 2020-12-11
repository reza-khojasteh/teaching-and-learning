module.exports = class Test {
    #reza = 5;//Does it work??!

    constructor(i) {
        let j = 4;
        this.i = i;
        this.bar = () => {
            console.log('bar() called!');
        };
        //bar();
        //foo();
    }
    
    foo() {
        console.log(this.reza);
        let j = 3;
        console.log(j);
        let bar = function() {//or funciton bar(){...}
            console.log('hi');
        }
        bar();
    }

    static staticFoo() {
        console.log('this inside static', this);
        console.log('staticFoo() called!');
    }
}