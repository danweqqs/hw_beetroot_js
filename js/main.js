'use strict';

// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value <= 0) {
            throw new Error('радіус має бути більше 0');
        }
        this._radius = value;
    }
    get diameter() {
        return this._radius * 2;
    }
    calculateArea() {
        return Math.PI * (this._radius ** 2);
    }
    calculateLength() {
        return 2 * Math.PI * this._radius;
    }
}

let myCircle = new Circle(15);
console.log('радіус: ' + myCircle.radius);
console.log('діаметр: ' + myCircle.diameter);
console.log('площа: ' + myCircle.calculateArea().toFixed(2));
console.log('довжина: ' + myCircle.calculateLength().toFixed(2));

myCircle.radius = 5;
console.log('новий діаметр: ' + myCircle.diameter);

try {
    myCircle.radius = -10;
} catch (e) {
    console.error(e.message);
}

// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

class Marker {
    constructor(color, ink = 60) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        if (this.ink <= 0) {
            alert('чорнила закінчились..');
            return;
        }

        let printedText = '';

        for (let char of text) {
            if (this.ink <= 0) break;

            if (char !== ' ' && char !== '\n' && char !== '\t') {
                if (this.ink - 0.5 < 0) break;
                this.ink -= 0.5;
            }

            printedText += char;
        }

        if (printedText.length === 0) {
            alert('недостатньо чорнил, щоб надрукувати текст');
            return;
        }

        const p = document.createElement('p');
        p.innerText = printedText;
        p.style.color = this.color;
        document.body.append(p);

        console.log('залишок чорнил: ' + this.ink.toFixed(1) + '%');
    }
}

let blueMarker = new Marker('white', 10);
blueMarker.print('Hello world!');
blueMarker.print('Hello Ivan!');
blueMarker.print('Hello Beetroot!');