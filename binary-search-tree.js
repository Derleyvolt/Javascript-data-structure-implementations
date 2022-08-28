class Node {
    constructor() {
        this.left  = null
        this.right = null
        this.val   = null
    }

    insert(val) {
        if(this.val == null) {
            this.val   = val
            this.left  = new Node()
            this.right = new Node()
        } else if(this.val > val) {
            this.left.insert(val)
        } else if(this.val < val) {
            this.right.insert(val)
        }
    }

    min_value() {
        let node
        while(this.left != null) {
            node = this.left
        }
    
        return node
    }

    remove_node(val) {
        if(this.val == null) {
            return null
        }

        if(this.val > val) {
            this.left = this.left.remove_node(val);
        } else if(this.val < val) {
            this.right = this.right.remove_node(val);
        } else {
            if(this.left.val == null) {
                return this.right
            }
    
            if(this.right.val == null) {
                return this.left;
            }
            
            aux         = this.right.min_value()
            this.val    = aux.val
            this.right  = aux.remove_node(aux.val)
        }
    
        return this
    }

    search(val) {
        if(this.val == null) {
            return null
        }

        if(this.val > val) {
            return this.left.search(val)
        } else if(this.val < val) {
            return this.right.search(val)
        } else {
            return this
        }
    }

    traverse() {
        if(this.val != null) {
            this.left.traverse()
            console.log(this.val)
            this.right.traverse()
        }
    }
}

T = new Node()

for(var i = 1; i <= 10; i++) {
    T.insert(i)
}

T.remove_node(8)

node = T.search(7)

if(node != null) {
    console.log(node.right.val)
}
