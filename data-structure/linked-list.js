class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
 }
 
 class LinkedList {
 
    constructor() {
        this.head = null;
        this.size = 0;
    }

    printList() {
        var resStr = "";
        var current = this.head;

        while(current.next) {
            resStr += `${current.element} --> `;
            current = current.next;
        }
        resStr += current.element;
        console.log(resStr);
    }

    add(element) {

        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if the list is empty add the
        // element and make it head
        if(this.head === null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while(current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        var counter = index;

        var curr = this.head;
        while(counter > 0 ) {
            curr = curr.next;
            counter--;
        }

        // Left incomplete please complete within two days
    }

    removeAt(index) {

    }
    
 }


 const FirstLinkedList = new LinkedList();

 FirstLinkedList.add(1);
 FirstLinkedList.add(2);
 FirstLinkedList.add(3);
 FirstLinkedList.add(4);

 FirstLinkedList.printList();