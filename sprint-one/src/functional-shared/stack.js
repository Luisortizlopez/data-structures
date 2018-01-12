var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var someInstance = {
      count: 0,
      storage: {}
  }

    _.extend(someInstance, stackMethods)
    return someInstance;
  };

  var stackMethods = {

   push:function(value) {
      this.storage[this.count] = value;
      this.count++;
    },
   pop:function() {
      this.count--;
      var counted = this.storage[this.count]
      delete this.storage[this.count];
      return counted;
    },
  size:function() {
      if (this.count > 0) {
        return this.count;
      } else {
        return 0;
      }
  }
};
