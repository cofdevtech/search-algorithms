export default class BinaryTree {
    constructor(arr, target) {
        this.data = arr;
        this.start = 0;
        this.last = arr.length - 1;
        this.target = target;
    }
    
    findNode() {
        if(this.start > this.last) {
            return "ARE YOU KIDDING ME!"
        }
        let targetMet = false;
        while(!targetMet) {
            const middleIndex = Math.floor(this.start + ((this.last - this.start) / 2));
            console.log(this.data, middleIndex);
            if(this.data[middleIndex] === this.target) {
                targetMet = true;
                return `FOUND ${this.target} AT INDEX ${middleIndex}`;
            }
            if(this.target > this.data[middleIndex]) {
                this.start = middleIndex;
            }
            if(this.target < this.data[middleIndex]) {
                this.last = middleIndex;
            }
        }
    }
}

// How to use :

// const binary = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);

// console.log(binary.findNode());