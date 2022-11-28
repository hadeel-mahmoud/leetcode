/**
 |
[2,7,11,15]
 */

var twoSum = function(nums, target) {
    
    const set= new Map();
    for(let i=0;i<nums.length;i++){
        let difference=target-nums[i]
        if(set.has(difference)){
            return [set.get(difference),i]
        }else{
            set.set(nums[i],i)
        }

        
    }
};