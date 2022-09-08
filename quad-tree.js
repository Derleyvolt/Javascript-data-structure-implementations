class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Box {
	constructor(ltop, h, w) {
		this.top_left = ltop;
        this.h        = h;
        this.w        = w;
	}

    collision(p) {
        return p.x >= this.top_left.x && p.x <= this.top_left.x + this.w &&
               p.y >= this.top_left.y && p.y <= this.top_left.y + this.h;
    }
}

class Quadtree {
    constructor(reg)  {
        this.region   = reg;
        this.is_leaf  = 1;  // folha
        this.data     = []; // 
        this.child    = [];
    }

    insert(p) {
        if(this.is_leaf) {
            this.data.push(p);

            if(this.data.length == 10) {
                this.is_leaf = 0;

                for(let i = 0; i < 4; i++) {
                    this.child[i] = new Quadtree(this.get_region(this.region, i));
					
                    for(let j = 0; j < this.data.length;) {
                        if(this.child[i].region.collision(this.data[j])) {
                            this.child[i].data.push(this.data[j]);
                            this.data.shift();
                        } else {
                            this.data.push(this.data[0]);
                            this.data.shift();
                            j++;
                        }
                    }
                }

                this.data = [];
            }

            return 1;
        } else {
            let ans = 0;
            for(let i = 0; i < 4; i++) {
                if(this.child[i].region.collision(p)) {
                    ans = ans | this.child[i].insert(p);
                }
            }

            return ans;
        }
    }

    get_region(reg, idx) {
        let p = new Point(reg.top_left.x, reg.top_left.y);
        let w = reg.w;
        let h = reg.h;

        if(idx == 0) {
            return new Box(p, h/2, w/2);
        } else if(idx == 1) {
            p.x = p.x + w/2;
            return new Box(p, h/2, w/2);
        } else if(idx == 2) {
            p.y = p.y + h/2;
            return new Box(p, h/2, w/2);
        } else {
            p.y = p.y + h/2;
            p.x = p.x + w/2;
            return new Box(p, h/2, w/2);
        }
    }
}

let p = new Point(0, 0);

qt = new Quadtree(new Box(p, 800, 800));

for(let i = 0; i < 150; i++) {
    let x = Math.floor(Math.random() * 800);
    let y = Math.floor(Math.random() * 800);
    qt.insert(new Point(x, y));
}
