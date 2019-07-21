

// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class List {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        
        return this;
    }
    display() {
        console.log('Printing beginning to end')
        let currentHead = this.head;
        while (currentHead) {
            console.log(currentHead.value)
            currentHead = currentHead.next;
        }
        console.log('finished')
    }
    remove() {
        const currentHead = this.head;
        if (currentHead) {
            console.log('node-Obj')
            this.head = currentHead.next;
        }
       return currentHead ? currentHead.value : null;
    }
    front() {
        const currentHead = this.head;
        return currentHead ? currentHead.value : null;
    }
    contains(thisValue) {
        let currentHead = this.head;
        while (currentHead) {
            if (currentHead.value === thisValue) {
                return true;
            }return false
        }
    }
    traverse(callback) {
        let currentHead = this.head;

        while (currentHead) {
            callback(currentHead);
            currentHead = currentHead.next;
        }
    }
    length() {
        let currentHead = this.head;
        let lenCounter = 0;
        while (currentHead) {
            console.log('entered while')
            lenCounter++;
            currentHead = currentHead.next;
        }
        return lenCounter
    }

    //max
    max() {
        let currentHead = this.head;
        let max = currentHead ? currentHead.value : null;

        while (currentHead) {
            if (currentHead.value > max) {
                max = currentHead.value
            }
            currentHead = currentHead.next;
        }
        return max;
    }

    //min
    min() {
        let currentHead = this.head;
        let min = currentHead ? currentHead.value : null;

        while (currentHead) {
           if (min > currentHead.value) {
               min = currentHead.value;
               console.log('min is ', min)
           }
           currentHead = currentHead.next;
        } return min;
    }
    min2() {
        let min = this.head ? this.head.value : null;

        this.traverse(function(node){
            if (node.value < min) {
                min = node.value
            }
        })
        return min;
    }

    //avg
    average() {
        let currentHead = this.head;
        let sum = 0;
        let dividBy = this.length();

        while (currentHead) {
            sum += currentHead.value
            currentHead = currentHead.next;
        } return sum / dividBy
    }
    back() {
        let currentHead = this.head;
        let back = currentHead.value;

        while (currentHead) {
            console.log('in the loop for back ')
            back = currentHead.value;
            currentHead = currentHead.next;
        } return back;
    } 
    removeBack() {
        let currentHead = this.head;

        while (currentHead) {
            if (currentHead.next.next == null){
                currentHead.next = null;
                console.log('in the loop for removeBack ')
            } 
            currentHead = currentHead.next;
        }
        return currentHead ? currentHead.value : null
    }
    add_back(value) {
        let currentHead = this.head;
        
        while (currentHead) {
            if(currentHead.next == null) {
                break;
            }
            currentHead = currentHead.next;

        }
        currentHead.next = new Node(value)
    }
}
const array = [1,2,3,4,5,6,7]


const list = new List();

for (let index = 0; index < array.length; index++) {
    const value = array[index];
    list.add(value);
}


list.display()
console.log(list.min())
console.log(list.length())
console.log(list.back())
console.log(list.removeBack())
list.display()
console.log(list.add_back(200))
console.log(list.remove())
console.log(list.contains(7))
list.display()

// console.log(list.contains(7))
