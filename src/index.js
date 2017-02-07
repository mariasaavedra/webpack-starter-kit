import './index.css';
import './index.scss';


class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

let square = new Shape(1,15,5);
console.log(square.x);