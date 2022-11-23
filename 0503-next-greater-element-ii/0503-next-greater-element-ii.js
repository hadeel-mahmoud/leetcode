/*
              |           
    let nums=[1,2,1, 1,2,1]
    
    output [2,-1,2]
 */
var nextGreaterElements = function(nums) {
    let output=Array(nums.length).fill(-1)
    let stack=[]
    let n=nums.length
    
    for(let i=0;i<nums.length*2;i++){
        while(stack.length>0&&nums[i%n]>nums[stack[stack.length-1]]){
            output[stack.pop()]=nums[i%n]
        }
        if(i<n){
            stack.push(i)
        }
    }
    
    return output
};