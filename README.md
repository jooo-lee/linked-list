# Linked List

My implementation of the [linked list project](https://www.theodinproject.com/lessons/javascript-linked-lists) from [The Odin Project](https://www.theodinproject.com/).

## Installation

```
npm install linked-list-jo
```

## Usage

```
import LinkedList from 'linked-list-jo';

const myLinkedList = new LinkedList();
myLinkedList.append(0)
myLinkedList.append(1)
myLinkedList.append(2)
console.log(myLinkedList.toString());
```

## Features

-   `append(value)` adds a new node containing `value` to the end of the list.
-   `prepend(value)` adds a new node containing `value` to the start of the list.
-   `size` returns the total number of nodes in the list.
-   `getHead` returns the first node in the list.
-   `getTail` returns the last node in the list.
-   `at(index)` returns the node at the given `index` (0-based).
-   `pop` removes the last element from the list and returns it.
-   `contains(value)` returns `true` if `value` is in the list and otherwise returns `false`.
-   `find(value)` returns the first 0-based index of the node containing `value`, or `null` if not found.
-   `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format is: `( value ) -> ( value ) -> ( value ) -> null`.
-   `insertAt(value, index)` that inserts a new node with `value` at the given `index`.
-   `removeAt(index)` that removes the node at `index`.
