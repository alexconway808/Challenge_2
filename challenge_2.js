exports.sumOfEvenFibonacciNumbers = function(n){
  
  var sum = 0;
  var x = 1; 
  var y = 1;
  var fib = 0;

 for (var i = 1; fib < n; i++){
  fib = x + y;
  x = y;
  y = fib;
  if(fib % 2 === 0){
    sum += fib;  
  }
 }
  return sum;
};
