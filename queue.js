class queue {
    constructor() {
        this.val  = null;
        this.prox = null;
    }

    static contador = 0

    len() {
        return queue.contador
    }

    insert_front(val) {
        if(this.val == null) {
            this.val  = val;
            this.prox = new queue();
            queue.contador++;
        } else {
            let node  = new queue();
            node.val  = this.val
            node.prox = this.prox
            this.prox = node
            this.val  = val
        }
    }

    remove_front() {
        if(this.prox != null) {
            this.val  = this.prox.val;
            this.prox = this.prox.prox;
        } else {
            this.val = null;
        }
    }

    traverse() {
        console.log(this.val)
        if(this.prox.val != null) {
            this.prox.traverse()
        }
    }
}

T = new queue()

for(let i = 0; i < 10; i++) {
    T.insert_front(i+1)
}

T.remove_front()
T.insert_front(10)

T.traverse()
