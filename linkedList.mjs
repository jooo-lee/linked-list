import Node from './node.mjs';

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        if (!this.head) {
            this.prepend(value);
        } else {
            let tmp = this.head;
            while (tmp.next) tmp = tmp.next;
            tmp.next = new Node(value);
        }
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        this.head = new Node(value, this.head);
    }

    // Returns the total number of nodes in the list
    size() {
        let sum = 0;
        let tmp = this.head;
        while (tmp) {
            sum++;
            tmp = tmp.next;
        }
        return sum;
    }

    // Returns the first node in the list
    getHead() {
        return this.head;
    }

    // Returns the last node in the list
    getTail() {
        let tmp = this.head;
        if (!tmp) return null;
        while (tmp.next) {
            tmp = tmp.next;
        }
        return tmp;
    }

    // Returns the node at the given index (0-based)
    at(index) {
        if (index < 0 || index > this.size() - 1) {
            throw new Error('Index out of bounds!');
        }
        let tmp = this.head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return tmp;
    }

    // Removes the last element from the list and returns it
    pop() {
        if (!this.head) {
            return;
        } else if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = null;
        let curr = this.head;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (prev) prev.next = null;
        return curr;
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        let tmp = this.head;
        while (tmp) {
            if (tmp.value === value) return true;
            tmp = tmp.next;
        }
        return false;
    }

    // Returns the first 0-based index of the node containing value, or null if not found
    find(value) {
        let index = 0;
        let tmp = this.head;
        while (tmp) {
            if (tmp.value === value) return index;
            index++;
            tmp = tmp.next;
        }
        return null;
    }

    /**
     * Represents LinkedList object as string, so we can print it out and
     * preview it in the console. Format is:
     * ( value ) -> ( value ) -> ( value ) -> null
     */
    toString() {
        let outputStr = '';
        let tmp = this.head;
        while (tmp) {
            outputStr += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }
        return (outputStr += 'null');
    }

    // Inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        } else if (index === this.size()) {
            this.append(value);
            return;
        }
        let prev = this.at(index - 1);
        let curr = this.at(index);
        let newNode = new Node(value, curr);
        prev.next = newNode;
    }

    // Removes and returns the node at the given index
    removeAt(index) {
        let nodeToRemove = this.at(index);
        if (index === 0) {
            this.head = this.head.next;
        } else {
            this.at(index - 1).next = this.at(index - 1).next.next;
        }
        return nodeToRemove;
    }
}

export default LinkedList;
