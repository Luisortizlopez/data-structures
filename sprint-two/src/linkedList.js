var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var lastNode = Node(value);
    if(list.head === null){
      list.head = lastNode;
      list.tail = list.head
    }
    else{
    list.tail.next = lastNode;
    list.tail = list.tail.next
    }
  };

  list.removeHead = function() {
    if (list.head === null){
      return null;
      }
    var oldValues = list.head.value
     list.head = list.head.next
     return oldValues;
  };

  list.contains = function(target) {
   //var theNode = list.head;
   while(list.head){
     if(list.head.value === target){
       return true;
     }
       list.head = list.head.next;
    }
    return false;
 }

 return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
