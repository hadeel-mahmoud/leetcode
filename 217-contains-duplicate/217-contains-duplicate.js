/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let values=new Map();
    for(let i=0;i<nums.length;i++){
        if(!isNaN(values.get(nums[i]))){
            return true;
        }else{
           values.set(nums[i],nums[i])

        }
    }
    return false;
};