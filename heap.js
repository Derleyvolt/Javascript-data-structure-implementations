class priority_queue {
    constructor() {
        this.buf = []
    }

    heap_down(idx) {
        let l = idx*2+1
        let r = idx*2+2

        let tmp = idx

        if(l < this.buf.length && this.buf[l] < this.buf[idx]) {
            tmp = l;
        }

        if(r < this.buf.length && this.buf[r] < this.buf[tmp]) {
            tmp = r
        }

        if(tmp != idx) {
            [this.buf[tmp], this.buf[idx]] = [this.buf[idx], this.buf[tmp]]

            this.heap_down(tmp)
        }
    }
    
    heap_up(idx) {
        let parent = parseInt((idx-1)/2)
        if(idx >= 0 && this.buf[idx] < this.buf[parent]) {
            [this.buf[idx], this.buf[parent]] = [this.buf[parent], this.buf[idx]]

            this.heap_up(parent)
        }
    }

    push(val) {
        this.buf.push(val)
        this.heap_up(this.buf.length-1)
        console.log(this.buf)
    }

    pop() {
        let ret      = this.buf[0]
        this.buf[0]  = this.buf[this.buf.length-1]
        this.buf.pop()
        this.heap_down(0)
        return ret
    }
}

T = new priority_queue()

for(let i = 0; i < 20; i++) {
    T.push(Math.floor(Math.random() * 100));
}

for(let i = 0; i < 20; i++) {
    console.log(T.pop())
}
