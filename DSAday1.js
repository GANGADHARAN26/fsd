/*
    Data Structures and Algorithms

    5 sessions:
    
    1. How to get into Product Based Companies
        - why dsa?
        - what do they expect in a coding interview?
        - how to prepare ourselves for the coding interviews?
        - what are the platforms/resources we can use?
        - interview problem: how to solve it?
            - different approaches?
            - time complexities?
    
    2. Time complexity
        - asymptotic notations
        - time complexity?
        - 8 examples - different time complexity analysis
        - built-in datastructures: 
            - arrays
            - strings
    
    3. Linked List 
        - types
            - singly linked list
            - doubly linked list
            - circularly linked list
        - array vs linked list
        - linked list implementation
        - linked list interview questions: 2 questions

    4. Stack
        - implementation
            - array
            - object implementation
        - stack based interview question : 1 or 2 questions
    
    5. Recursion
        - What is it?
        - how to implement it?
        - recursion tree?
        - recurrence relation & backward substitution
        - 4 or 5 recursion based problems

*/


/*
    guvi.in/codekata
    leetcode.com
    interviewbit.com
    hackerrank.com
    hackerearth.com
    codechef.com
    codeforces.com
    projecteuler.net
    spoj.com
    beecrowd.com.br

    Cracking the Coding Interview by Gayle Laakmann McDowell
    https://www.youtube.com/playlist?list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX
*/


/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// return true, if the totalCandies is greater than all the other kids candies except the index i
// return false otherwise
var isGreater = function(totalCandies, candies, i){
    // assume true
    let assumption = true;

    // traverse/iterate the candies array
    for(let index=0; index<candies.length; index++){
        // for every element, compare and check whether the totalCandies is lesser than 
        // any one candy
        if(index != i){
            if(totalCandies < candies[index]){
                // if true => update the assumption
                assumption = false;
            }
        }
    }   
    
    // return the assumption
    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // create / initialize an empty boolean array <- result
    let result = [];

    // traverse or iterate the candies array <- i
    for(let i=0; i<candies.length; i++){
        // for every element in the candies array
        // find the total number of candies after adding extraCandies <- totalCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than all the other kids candies
        if(isGreater(totalCandies, candies, i)){
            // if true => push true to the result array
            result.push(true);
        } else {
            // else => push false to the result array
            result.push(false);
        }
    }
        
    // return the result boolean array
    return result;
};

/*
    1. Problem Understanding

    2. Algorithm
        - first approach: O(N^2)
        - second approach: O(N)

    // create / initialize an empty boolean array <- result

    // traverse or iterate the candies array <- i
        // for every element in the candies array
        // find the total number of candies after adding extraCandies <- totalCandies

        // check if the totalCandies is greater than all the other kids candies
            // if true => push true to the result array
            // else => push false to the result array
        
    // return the result boolean array

    3. Implementation
*/


//day 2



/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// return true, if the totalCandies is greater than all the other kids candies except the index i
// return false otherwise
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // assume true
//     let assumption = true;

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//             }
//         }
//     }   
    
//     // return the assumption
//     return assumption;
// }
// O(N)
// var isGreater = function(totalCandies, candies, i){
//     // assume true
//     let assumption = true;

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//                 break;
//             }
//         }
//     }   
    
//     // return the assumption
//     return assumption;
// }

// O(N)
// var isGreater = function(totalCandies, candies, i){

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 return false;
//             }
//         }
//     }   
    
//     // return the assumption
//     return true;
// }

// var isGreater = function(totalCandies, candies, i){

//     // traverse/iterate the candies array
//     for(let index=0; index<candies.length; index++){
//         // for every element, compare and check whether the totalCandies is lesser than 
//         // any one candy
//         if(totalCandies < candies[index]){
//             // if true => update the assumption
//             return false;
//         }
//     }   
    
//     // return the assumption
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create / initialize an empty boolean array <- result
//     let result = [];

//     // traverse or iterate the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // for every element in the candies array
//         // find the total number of candies after adding extraCandies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         i){f(isGreater(totalCandies, candies, i)
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
        
//     // return the result boolean array
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create / initialize an empty boolean array <- result
//     let result = [];

//     // find the greatest candy
//     let greatestCandy = Math.max(...candies);

//     // traverse or iterate the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // for every element in the candies array
//         // find the total number of candies after adding extraCandies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
        
//     // return the result boolean array
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     // candies.forEach(candy => {
//     //     result.push(candy + extraCandies >= greatestCandy);
//     // });

//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

/*
    1. Problem Understanding
    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    
    extraCandies = 3
    result = [true, ]
           i [0]   [1][2][3][4]
    
    i = 0
        totalCandies = candies[i] + extraCandies
                     = 2 + 3
                     = 5
        isGreater(5, candies, 0) => true
            totalCandies = 5
            candies = [2, 3, 5, 1, 3]
                index [0][1][2][3][4]
            i = 0
            assumption = true
            index = 0
                not checked
            index = 1
                5 < 3 false
            index = 2
                5 < 5 false
            index = 3
                5 < 1 false
            index = 4
                5 < 3 false
    2. Algorithm
        - first approach: O(N^2)
        - second approach: O(N)
    // create / initialize an empty boolean array <- result
    // traverse or iterate the candies array <- i
        // for every element in the candies array
        // find the total number of candies after adding extraCandies <- totalCandies
        // check if the totalCandies is greater than all the other kids candies
            // if true => push true to the result array
            // else => push false to the result array
        
    // return the result boolean array
    3. Implementation
*/


/*
    Time Complexity

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm

        - time complexity
        - space complexity

    time complexity => amount of time taken by an algorithm to run!

    space complexity => amount of memory required by an algorithm to run

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Oh) - Upper Bound
    2. Big - 'Ω' (Omega) - Lower Bound
    3. Big - 'Θ' (Theta) - Tight Bound

    Situtaions/Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Example:

    Algorithm : Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    Case (first element): If the key = 1, Comparisons = 1 => Best Case => O(1) - abbr: Order of 1

    Case (middle element): If the key = 5, Comparisons = 5 => Average Case => O(N/2) => O(N)

    Case (last element): If the key = 10, Comparisons = 10 => N Comparisons => O(N)
         (element not present): If the key = 11, Comparisons = 10 => O(N)


    Time Complexity: Upper Bound, Worst Case - Big - 'O'
*/

/*
    Example: 1

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N+M)

    let a = 0, b = 0; // declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, 6, ..., N-1 => N

    
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5, 6,...., M-1 => M

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is constant)
                                   = O(N + M)
*/

/*
    Example: 2

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Solution: O(N)

    Total time complexity, T(N) = 1 + N + N
                                = N + N
                                = 2N
                                = N
                                = O(N)
*/

/*
    Example: 3


    let M = N;
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity = 1 + N + N
                    = 2N
                    = O(N)
*/

/*
    Example: 4

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
    }
    
    Time Complexity = 1 + N * M
                    = N * M
                    = O(N*M)
*/

/*
    Example: 5

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }
    
    Time Complexity = 1 + N * N
                    = N * N
                    = N^2
                    = O(N^2)

    Approach:

        1. Assume inputs
            N = 4
            
            N = 5

            N = 6

        2. Total executions

            N = 4,
                i = 0; j = 0, 1, 2, 3 => 4 times
                i = 1; j = 0, 1, 2, 3 => 4
                i = 2; j = 0, 1, 2, 3 => 4
                i = 3; j = 0, 1, 2, 3 => 4

                total executions = 4 + 4 + 4 + 4
                                 = 16

            N = 5,
                i = 0; j = 0, 1, 2, 3, 4 => 5 times
                i = 1; j = 0, 1, 2, 3, 4 => 5
                i = 2; j = 0, 1, 2, 3, 4 => 5
                i = 3; j = 0, 1, 2, 3, 4 => 5
                i = 4; j = 0, 1, 2, 3, 4 => 5

                total executions = 5 + 5 + 5 + 5 + 5
                                 = 25
        3. Generalize & find the relationship
            For N = 4, executions = 16
            For N = 5, executions = 25
            For N = 6, executions = 36

            O(N^2)
*/

/*
    Example: 6

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    N = 5
        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        Total executions = 5 + 4 + 3 + 2 + 1
                         = 15
    
    N = 5, executions = 15
    N = 6, executions = 21
    N = 10, executions = 55

    executions = sum of first N natural numbers
               = N + N-1 + N-2 + N-3 + N-4 + ... + 1 + 0
               = [N * (N+1)]/2
    
    N = 5, executions = [N * (N+1)]/2
                      = [5 * 6]/2
                      = 30/2
                      = 15
    
    Total time complexity, T(N) = 1 + [N * (N+1)]/2
                                = [N * (N+1)]/2
                                = 1/2 * [N * (N+1)]
                                = N * (N+1)
                                = N^2 + N [N is discarded, since N^2 is the highest polynomial]
                                = O(N^2)

*/

/*
    Example: 7

    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity = ?

    Outer loop: N/2 + 1

    n = 10
        i = 5, 6, 7, 8, 9, 10

    Inner loop:

        j = 2, 4, 8, 16, 32, 64, 128, ....N
    
    For N = 10; j = 2, 4, 8; executions = 3
    For N = 29; j = 2, 4, 8, 16; executions = 4
    For N = 30; j = 2, 4, 8, 16; executions = 4
    For N = 31; j = 2, 4, 8, 16; executions = 4
    For N = 40; j = 2, 4, 8, 16, 32; executions = 5

    2^X = N, X is unknown, Solve for X?

    Apply log2 on both the sides,

    log2(2^X) = log2(N)

    [log a^b = b log a]

    X log2(2) = log2(N)

    X(1) = log2(N)
    X = log2(N)

    N = 10, executions = log2(N)
                       = log2(10)
                       = 3
    
    Total time complexity = 1 + (N/2 + 1) * (log2(N))
                          = N/2 log2(N) + log2(N)
                          = N * log2(N) + log2(N)
                          = O(N * log2(N))
*/

// console.log(10, Math.log2(10));
// console.log(29, Math.log2(29));
// console.log(30, Math.log2(30));
// console.log(31, Math.log2(31));
// console.log(40, Math.log2(40));

/*
    O(2^N)

    Problem: Given an array of values, find how many ways we an select the values from the array for different selection group size, varying from 0 to N, where N -> total elements

    Input: [1, 2, 3]
    Output: 8

    0 values => ()
    1 value => (1), (2), (3)
    2 values => (1, 2), (2, 3), (1, 3)
    3 values => (1, 2, 3)

    Number of ways => 8

    Input: [1, 2, 3, 4]
    Output: 16

    0 values => ()
    1 value => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    2^N


*/

/*
    N!

    Problem: Given a string S, find in how many ways we can re-arrange the characters of the string to form a new string.

    Input: 'abc'
    Output: 6

    abc
    acb
    bac
    bca
    cab
    cba

    Input: ab
    Output: 2

    ab
    ba

    Input: abcd
    Output: 24

    abcd
    abdc
    acdb
    acbd
    adbc
    adcb
    bacd
    ...
    ...

    N = 3, executions = 6
    N = 4, executions = 24
    N = 5, executons = 120

    N! = N * N-1 * N-2 * .... * 1

    5! = 5 * 4 * 3 * 2 * 1 
       = 120

    O(N!)
*/  



//day 3



/ Data Structures

/*
    Arrays, Strings => Built-In DataStructures
        - arrays & strings are literaly equal with a minor difference Strings are immutable whereas arrays are mutable
    Arrays
        - Data Structure (Built-In)
        - Indexing: first element stored at the index 0
        - all the other elements are stored in the consecutive memory locations
        - Accessing: numbers[index] -> element (Random Access) O(1)
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            * push - pushes the element to the end of the array
            * pop - removes the element from the end of the array
            * unshift - inserts the element to the beginning of the array
            * shift - removes the element from the beginning of the array
            * splice - inserts/removes the element at a specified index
            * forEach
            * map
            * sort
            * reduce
            * filter
            * includes
            * join
            * length
*/

// let numbers = [1, 2, 3, 4, 5];

// numbers.push(7);
// numbers.pop();
// numbers.pop();
// numbers.unshift(10);
// numbers.unshift(12);
// numbers.shift();
// numbers.shift();

// // between 1 and 2 insert 11
// numbers.splice(1, 0, 11);

// // delete 11 from index 1
// numbers.splice(1, 1);

// console.log(numbers);

/*
    Linked List
    * Data Structure
    * Types
        1. Singly Linked List
        2. Doubly Linked List
        3. Circularly Linked List
    * Singly Linked List -> Explanation
    * Abstract Data Type: User defined data type - user defines its behaviour, data, operations
    * Non-Consecutive Memory
    * Singly Linked List: Chain of nodes/objects from different memory locations linked.
    * Every node has a structure with two fields:
        1. data: actual data we want to store inside the memory
        2. address: address of the next node in the memory
    * head pointer: points to the first/start node of the linked list
    * head: null - signifies that the linked list is empty
    * tail node: is the node whose next/address field points to the value null
    * Accessing: Linear Access
    * Insertion: O(1) - insert at the head, O(n)/O(1) - insert at the tail
    * Deletion: O(1), O(n)
*/

// Implementation

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// // create a new node / object
// let newNode = new Node(10);

// let newNode1 = new Node(2);

// newNode.next = newNode1;

// console.log(newNode.next.next);

/*
    newNode = Node {
        data: 10,
        next: Node {
            data: 2,
            next: null
        }
    }
    newNode1 = 
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

    insertTail(data) {
        // create a new node
        let newNode = new Node(data);

        // if the list is empty
        if (this.head == null) {
            // store the newNode in the head
            this.head = newNode;
        } else {
            // if the list is not empty
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // store the newNode as the next of tail node
            tail.next = newNode;
        }
    }

    // homework
    // inserts the node to the start/head of the list
    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    // returns the number of nodes in the list
    length() {
        // let nodes = [];
        // let thead = this.head;
        // while (thead != null) {
        //     nodes.push(thead.data);
        //     thead = thead.next;
        // }
        // console.log(nodes.length);

        let nodes = 0;
        let thead = this.head;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        console.log(nodes);
    }

    deleteTail() {
        if (this.head == null) {
            // should not allow the deletion
            return;
        } else if (this.head.next == null) {
            // only one node in the list
            this.head = null;
        } else {
            // more than one node
            let tail = this.head;

            while (tail.next.next != null) {
                tail = tail.next;
            }

            // tail.next.next == null
            tail.next = null;
        }
    }

    deleteHead() {
        if (this.head == null) {
            // empty list
            return;
        } else {
            // one or more than one node
            this.head = this.head.next;
        }
    }

    middleNode() {
        
    }
}

let list = new LinkedList();

// list.head = new Node(10);
// list.head.next = new Node(2);
// list.head.next.next = new Node(3);
// list.head.next.next.next = new Node(4);
// list.head.next.next.next.next = new Node(6);

list.insertTail(10);
list.insertTail(2);
list.insertTail(3);
list.insertTail(4);
list.insertHead(6);
list.deleteTail();
list.deleteTail();
list.deleteHead();

list.printList();
list.length();

/*
    list = LinkedList {
        head: Node {
            data: 6,
            next: Node {
                data: 10,
                next: Node {
                    data: 2,
                    next: Node {
                        data: 3,
                        next: Node {
                            data: 4,
                            next: null
                        }
                    }
                }
            }
        }
    }
    newNode = Node {
        data: 6,
        next: Node {
            data: 10,
            next: Node {
                data: 2,
                next: Node {
                    data: 3,
                    next: Node {
                        data: 4,
                        next: null
                    }
                }
            }
        }
    }
    list = LinkedList {
        head: Node {
            data: 10,
            next: Node {
                data: 2,
                next: Node {
                    data: 3,
                    next: null
                }
            }
        }
    }
    
*/

/*
    Linked List over Arrays
    1. Faster Insertions/Deletions
    2. Memory utilization
    
*/
// let numbers = [6, 3, 4, 1, 2, 5, 10, 21, 22];

// // sort method in the array <- in-place
// // numbers.sort();

// // ascending order ?
// // numbers.sort((a, b) => a-b);

// // descending order ?
// numbers.sort((a, b) => b-a);

// console.log(numbers);

// 2d sorting ?
let numbers = [[3, 23], [21, 4], [5, 6], [7, 3], [10, 15]];

// ascending order ? first element ?
// numbers.sort((a, b) => a[0] - b[0]);

// ascending order ? second element?
numbers.sort((a, b) => a[1] - b[1]);

console.log(numbers);

// let numbers = [[3, 23], [21, 4], [5, 6], [7, 3], [10, 15]];

// console.log(numbers[2][1]);


//day 4


/*
    Stack
    - Data Structure
    - Abstract Data Type
    - Stack follows First In Last Out (FILO) or Last In First Out (LIFO)
    - Operations
        1. push() - pushes the element into the top of the stack
        2. pop() - removes the element from the top of the stack
        3. peek() - returns the topmost element of the stack
        4. isEmpty() - returns true if the stack is empty and false otherwise
        5. isFull()
        6. stackoverflow: occurs when we try to push an element into the already full stack
        7. stackunderflow: occurs when we try to pop an element from the already empty stack
    - Implementation
        * Array 
        * Object
*/

// Array Implementation

class Stack{
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.pop();
stack.push(10);
stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());
console.log(`stack is empty: ${stack.isEmpty()}`);



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// function findAdjacentIndex(words) {
//     for (let i = 0; i < words.length; i++){
//         if (words[i] == words[i + 1]) {
//             return i;
//         }
//     }
//     return -1;
// }

// // Time Complexity: O(N^2)
// inp.on("close", () => {
//     // sentence to array of words
//     let words = userInput[0].split(' ');

//     let index = -1;
    
//     // check iteratively if the array of words have two adjacent words equal
//     do {
//         index = findAdjacentIndex(words);

//         // if the index != -1
//         // remove the words
//         if (index != -1) words.splice(index, 2);
//     } while (index != -1);

//     if (words.length > 0) {
//         // print the words
//         console.log(words.join(' '));
//     } else {
//         console.log(-1);
//     }
// });

// function findAdjacentIndex(words) {
//     for (let i = 0; i < words.length; i++){
//         if (words[i] == words[i + 1]) {
//             return i;
//         }
//     }
//     return -1;
// }

// stack definition
class Stack{
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

// Time Complexity: O(N) using Stack
inp.on("close", () => {
    // sentence to array of words
    let words = userInput[0].split(' ');
    
    // create a new stack
    let stack = new Stack();

    for (let index = 0; index < words.length; index++){
        if (stack.isEmpty()) {
            // stack is empty
            // so, push the current word to the stack
            stack.push(words[index]);
        } else {
            // stack is not empty
            // compare the current word with the top of the stack
            if (words[index] == stack.peek()) {
                // delete the top of the stack
                stack.pop();
            } else {
                // push the current word to the stack
                stack.push(words[index]);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});




//day 5



/*
    Recursion: Algorithm

    Recursion is a function that calls itself!

    Example:

        sayHello()
*/

// normal function
// function definition
// function sayHello() {
//     console.log('hello');
// }

// // function call
// sayHello();
// // sayHello();



// recursion function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Loop: Iteration - to execute a block of statement for some times as long as a condn is satisfied or until a condition is being met.
    Vs
    Recursion - to execute a block of statement again and again recursively until a condn is met

    Example: Problem: Write a function to print the message 'hello' 3 times
*/

// console.log('hello');
// console.log('hello');
// console.log('hello');

// iteration
// function sayHello() {
//     for (let i = 1; i <= 3; i++){
//         // this loop executed for 3 times
//         console.log('hello');
//     }
// }

// sayHello();

// recursion
// function sayHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

/*
    Recursion Tree:

    sayHello(3)
        - times = 3; 3 == 0; false ✓
        - console.log('hello') ✓
        - sayHello(2)
            - times = 2; 2 == 0; false ✓
            - console.log('hello') ✓
            - sayHello(1)
                - times = 1; 1 == 0; false ✓
                - console.log('hello') ✓
                - sayHello(0)
                    - times = 0; 0 == 0; true ; return ✓

    sayHello(3)

*/

// function printThis() {
//     console.log('print this');
// }

// printThis();
// console.log('print that');

// Problem:

/*
    Write a recursion function to print the values from N to 1

    Input: 3

    Output:
    3
    2
    1

    Input: 5
    Output: 
    5 
    4
    3
    2
    1
*/

// function print(number) {
//     if (number == 0) return;
//     console.log(number);
//     print(number - 1);
// }

// print(5);

/*
    Recursion Tree:

    print(5)
        - number = 5; 5 == 0; false
        - console.log(5)
        - print(4)
            - number = 4; 4 == 0; false
            - console.log(4)
            - print(3)
                - number = 3; 3 == 0; false
                - console.log(3)
                - print(2)
                    - number = 2; 2 == 0; false
                    - console.log(2)
                    - print(1)
                        - number = 1; 1 == 0; false
                        - console.log(1)
                        - print(0)
                            - number = 0; 0 == 0; true
*/

// function print(number) {
//     if (number == 0) return;

//     print(number - 1);
//     console.log(number);
// }

// print(5);

/*
    print(5)
        - number = 5; 5 == 0; false
        - print(4)
            - number = 4; 4 == 0; false
            - print(3)
                - number = 3; 3 == 0; false
                - print(2)
                    - number = 2; 2 == 0; false
                    - print(1)
                        - number = 1; 1 == 0; false
                        - print(0)
                            - number = 0; 0 == 0; true; return ✅
                        - console.log(number) 🕐
                    - console.log(number) 🕐
                - console.log(number) 🕐
            - console.log(number) 🕐
        - console.log(number) 🕐


    print(5)
*/

/*
    Problem: Write a recursion function to find and print the sum of first N natural numbers

    Input: 3
    Output: 6

    Explanation: 1 + 2 + 3 = 6

    Input: 5
    Output: 15

    Explanation: 1 + 2 + 3 + 4 + 5 = 15
*/

// recursive function to return the sum of first N natural numbers
// function S(N) {
    
// }

// console.log(S(5)); // output: 15

/*
    Recurrence Relation

    Let S(N) = ?

    Start from the base cases:

    For N = 1, S(1) = 1
    ----------------------

    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward Substitution:

    For N = 1, S(1) = 1
    ----------------------

    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    Generalize:

    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N
*/

// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;
//     // For N > 1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(3)); // output: 15

/*
    function F(N){
        
    }

    console.log(F(3)); // output: 6

    3! = 3 * 2 * 1 = 6
    5! = 5 * 4 * 3 * 2 * 1 = 120
*/

/*
    Recurrence Relation

    Let F(N) = ?

    Start from the base cases:

    For N = 0, F(0) = 1 Edge case
    For N = 1, F(1) = 1
    ----------------------

    For N = 2, F(2) = 1 * 2 = 2
    For N = 3, F(3) = 1 * 2 * 3 = 6
    For N = 4, F(4) = 1 * 2 * 3 * 4 = 24
    For N = 5, F(5) = 1 * 2 * 3 * 4 * 5 = 120

    Backward Substitution:

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1
    ----------------------

    For N = 2, F(2) = F(1) * 2 = 2
    For N = 3, F(3) = F(2) * 3 = 6
    For N = 4, F(4) = F(3) * 4 = 24
    For N = 5, F(5) = F(4) * 5 = 120

    Generalize:

    For N = 0 and N = 1, F(N) = 1
    For N > 1, F(N) = F(N-1) * N
*/

// function F(N) {
//     if (N == 0 || N == 1) return 1;
//     return F(N - 1) * N;
// }

// console.log(F(5));

/*
    homeworks:

    1. find the sum of the given array using recursion
    2. check whether a string is a palindrome or not using recursion example: madam, malayalam, ...
    3. reverse a given string using recursion example: apple output: elppa
    4. find the nth fibonacci number using recursion
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

        Input: 5
        Output: 3
*/