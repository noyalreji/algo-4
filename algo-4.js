class ArrayStack {
    constructor() {
        this.contents = [];
    }

    // push(value) - adds the given value to the stack
    push(value) {
        this.contents.push(value)
        return this.contents

    }

    // pop() - removes the top value from stack and returns it
    pop() {
        if (this.contents.length == 0){
            return 'empty'
        }
        return this.contents.pop()
    }
    
    // top() - returns the top value without removing it
    top() {
        if (this.contents.length == 0){
            return 'empty'
        }
        var x = this.contents[this.contents.length - 1]
        return x
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if(this.contents.includes(target)){
            return true
        }return false
        // for(var x = 0; x < this.contents.length; x++){
        //     if (target == this.contents[x]){
        //         return true
        //     }
        // }
        // return false
}

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.contents.length == 0){
            return true
        }
        return false
    }

    // size() - returns the size of the stack
    size() {
        if (this.contents.length == 0){
            return 'empty'
        }
        return this.contents.length
    }
}