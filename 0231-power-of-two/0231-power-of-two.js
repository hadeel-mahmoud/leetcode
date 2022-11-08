/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let current=1
    while(current<=n){
         if(current==n)
             return true
         current=current*2
    }
    
    return false
};