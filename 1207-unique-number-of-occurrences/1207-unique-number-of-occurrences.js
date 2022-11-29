/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  
    let map=new Map()
    let comparisonSet=new Set()
    for(let number of arr){
        let foundItem=map.get(number)
        if(foundItem){
           map.set(number,foundItem+1)
        }else{
           map.set(number,1)
        }
    }
    
    for(let val of map.values()){
        if(comparisonSet.has(val)){
            return false
        }else{
            comparisonSet.add(val)
        }
    }

    return true
    
   
};