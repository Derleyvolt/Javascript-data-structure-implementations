class singly_linked_list {
    constructor() {
        this.val  = null;
        this.prox = null;
    }

    insert(val) {
        if(this.val == null) {
            this.val  = val
            this.prox = new singly_linked_list()
        } else {
            this.prox.insert(val)
        }
    }

    remove(val) {
        if(this.val == val) {
            return this.prox
        } else {
            this.prox = this.prox.remove(val)
            return this
        }
    }

    traverse() {
        console.log(this.val)
        if(this.prox.val != null) {
            this.prox.traverse()
        }
    }
}

list = new singly_linked_list()

for(var i = 0; i < 10; i++) {
    list.insert(i+1)
}

list = list.remove(5)

list.traverse()
