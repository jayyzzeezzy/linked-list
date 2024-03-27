class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
};
  
class LinkedList {
    constructor() {
        this.head = null;   
    };  
    
    prepend(value) {
        this.head = new Node(value, this.head);
    };
    
    append(value) {
        let node = new Node(value);
        let current;
        
        if(!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            
            while(current.next) {
            current = current.next;
            }
            
            current.next = node;
        }
    };
    
    size() {
        let count = 0;
        let current = this.head;
                
        while(current != null) {
            count++;
            current = current.next;
        }
        return count;
    };
    
    head() {
        return this.head;
    };
    
    tail() {
        if(!this.head) return null;

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current;
    };
    
    at(index) {
        let current = this.head;
        let count = 0;
        
        while(current) {
            if(count == index) {
            console.log(current.value);
            }
            count++;
            current = current.next;
        }
        
        return null;
    };
    
    pop() {
        if(!this.head) return null;

        let current = this.head;
        let previous;
        while(current.next != null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return;
    };
    
    contains(value) {
        if(!this.head) return null;

        let current = this.head;
        while(current.next != null) {
            if(current.value === value) return true; 
            current = current.next;
        }
        return current.value === value ? true : false;
    };
    
    find(value) {
        if(!this.head) return null;

        let index = 0;
        let current = this.head;
        while(current != null) {
            if(current.value === value) {
            return index;
            }
            index++;
            current = current.next;
        }
        return null;
    };
    
    toString() {
        let string = "";
        let current = this.head;
        while(current) {
            string += `(${current.value}) -> `;
            current = current.next;
        }
        return string += "null";
    };
    
    insertAt(value, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }
        
        // if index is going to be head
        if(index == 0) {
            this.prepend(value);
            return;
      }
      
        const node = new Node(value);
        let current = null;
        let previous = null;
        
        // set current to head
        current = this.head;
        let counter = 0;
        
        while(counter < index) {
            previous = current; // Node before index
            counter++;
            current = current.next; // Node after index
        }
        
        node.next = current;
        previous.next = node;
    };
    
    removeAt(index) {
        if(index > 0 && index > this.size) return;
        
        let current = this.head;
        let previous;
        let count = 0;
        
        // remove first
        if(index === 0) {
            this.head = current.next;
        }
        else {
            while(count < index) {
            count++;
            previous = current;
            current = current.next;
            }
            
            previous.next = current.next;
        }
    };
    
    
}
  
const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.append(300);

const size = ll.size();
const tail = ll.tail();
const head = ll.getHead();
const insert = ll.insertAt(800, 1);
const find = ll.find(200);

const pop = ll.pop();
console.log(ll);
console.log(ll.contains(800));
console.log(find);
console.log(ll.toString());