class stack {
    constructor() {
        this.buf = []
    }

    len() {
        return this.buf.length;
    }

    push(val) {
        this.buf.push(val);
    }

    pop() {
        return this.buf.pop()
    }
}

T = new stack()

for(let i = 0; i < 10; i++) {
    T.push(i+1);
}

for(let i = 0; i < 10; i++) {
    console.log(T.pop())
}
