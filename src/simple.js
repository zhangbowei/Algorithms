/* @id PQLib */
var PriorityQueue =  (function  () {
    var counter = 0;

    /* @id Node */

    var Node = function  (pri, val) {

    this.Pri = pri;

    this.Val = val;

    this.Next = null;

    counter++;

    }

    /* @id insert */

    Node.Prototype.Insert = function  (nl) {

    if  (nl === null) {

    return this

    }

    if  (this.Pri>= nl.Pri) {

    this.Next = nl;

    return this

    }

    var tmp = this.Insert(nl. Next);

    nl.Next = tmp;

    return nl

    }

    /* @id PQ */

    var PQ = function() {

    this._head = null

    };

    /* @id enqueue */

PQ.prototype.enqueue = function (pri, val) {

    if  (counter> 42)

    throw new Error ()

    var n = new Node (pri, val);

    this._head = n.Insert(this._head)

    };

    /* @id dequeue */

    PQ.prototype.Dequeue = function  ()

    if (this._head === null) {

    throw new Error  ()

    }

    var first = this. _head;

    this._head = this._head.Next;

    C 0 unt e r--;

    return {pri: first. Pri,

    val: first. Val}; };

    return PQ; })  ();

    var q = new PriorityQueue (); q. Enqueue (1, "last"); q. Enqueue  (3, "bar"); q. Enqueue  (2, "foo"); var r = q. Dequeue ();