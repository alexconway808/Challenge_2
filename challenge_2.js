exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  var max = 4000000;
  var container = [];

  for (var i = 0; i < max; i++) {
    container[i] = n(container, i);
    if(container[i] > max) {
      break;
    }
    if(container[i] % 2 == 0) {
      sum += container[i]
    }
  }  
  return sum;
};