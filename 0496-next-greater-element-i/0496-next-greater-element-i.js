/*
    let nums1=[]
    let nums2=[]
    
    num1 is a subset of nums 2
               
    nums1 = [4,1,2]
               
    nums2 = [1,3,4,2]
    
    [1]
    [1:3,3:4,4:null]
    output=[-1,3]
    
 */

var nextGreaterElement = function(nums1, nums2) {
    
   let map= new Map()
   let stack=[]
   let results=[]
   for(let i=0;i<nums2.length;i++){
       while(stack.length>0&&stack[stack.length-1]<nums2[i]){
           map.set(stack.pop(),nums2[i])
       }
       stack.push(nums2[i])  
   }
    
   for(let i=0;i<nums1.length;i++){
       let foundGreater=map.get(nums1[i])
       if(foundGreater) {
           results.push(foundGreater)
       } else{
          results.push(-1)
       }
   }
   return results
};