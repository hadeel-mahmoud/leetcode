/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0){
        return 0;
    }
    let a = 0;
    let b = 1;
    while(n>1){
      let sum=a+b;
      a= b;
      b=sum;   
      n--;
      
    } 
    return b
    
};

