function quickSort(input){
  function sort(start, end){
    if(start >= end){
      return;
    }
    var mid = partition(start, end);
    sort(start, mid - 1);
    sort(mid + 1, end);
  }

  function sort(start, end) {
      if (start >= end) {
          return;
      }
      var mid = partition(start, end);
      sort(start, mid - 1);
      sort(mid + 1, end);
  }

  function partition(start, end) {
      var left = start, right = end,
  }

  function partition(start, end){
    var left = start, right = end, key = input[start], temp;
    while(left < right){
      while(left < right && input[right] >= key){
        right --;
      }
      input[left] = input[right];
      while(left < right && input[left] <= key){
        left ++;
      }
      input[right] = input[left];
    }
    input[left] = key;
    return left;
  }

  function partition(start, end) {
      var left = start, right = end, key = input[start], temp;

      while(left < right) {
          while(left < right && input[right] >= key) {
                right--;
          }
          input[left] = input[right];
          while(left < right && input[right] >= key) {
                left++;
          }
          input[right] = input[left];
      }

      input[left] = key;
      return left;
  }

  function partition(start, end) {
      var left = start, right = end, key = input[start], temp;
      while(left < right) {
          while(left < right && input[right] >= key) {
              right --;
          }
          input[left] = input[right];
          while(left < right && input[left] <= key) {
              left ++;
          }
          input[right] = input[left];
      }
      input[left] = key;
      return left;
  }
  // main here
  sort(0, input.length - 1);
  return input;
}

console.log(quickSort([1, 4, 2, 5, 6, 7, 8, 9, 0]));

function quickSort(dataArr) {
    function sort(start, end) {
       if (start >= end) return;
       var mid = partition(start, end);
       sort(start, mid - 1);
       sort(mid + 1, end);
    }
    function partition(start, end) {

    }
}

function curryIt(fn) {
    var args = [];
    return function() {
        var data = Array.from(arguments);
        args = args.concat(data);

        if (args.length >= fn.length) {
            fn.apply(null, args);
        } else {
            return arguments.callee;
        }
    }
}

function inherit(parent, child) {
    var F = function() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}

function partition(start, end) {

}