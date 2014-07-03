exports.sumOfEvenFibonacciNumbers = function(n){
  
  var sum = 0;
  var x = 1; 
  var y = 1;
  var fib;

 for (var i = 1; i < n; i++){
  fib = x + y;
  console.log('current fib: ' + fib);
  x = y;
  console.log('new x value: ' + x);
  y = fib;
  console.log('what is new y: ' + y);
  sum += x;
 }
 // console.log (sum); 

};


  // var fib = x + y
  // x = y
  // y = fib
  //console log


//   for (var i = 0; test2 < n; i++) {
//     if(i % 2 === 0) {
//       sum += test2;
//     }
//     console.log(sum);
//   }  
//   return sum;
// };