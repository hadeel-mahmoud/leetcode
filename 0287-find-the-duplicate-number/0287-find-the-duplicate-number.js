/**
 [1,3,4,2,2]
      |
 [1,2,2,3,4]
 
 
 */
var findDuplicate = function(nums) {
   
    nums.sort()
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
           return nums[i]
        }
    }
    
};