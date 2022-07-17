/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let values =new Map();
    let duplicates=[]
    
    
    for(let i=0;i<nums.length;i++){
        if(values.get(nums[i])){
           duplicates.push(nums[i])
        }else{
            values.set(nums[i],nums[i])
            
        }
    };
    return duplicates
    
    
};