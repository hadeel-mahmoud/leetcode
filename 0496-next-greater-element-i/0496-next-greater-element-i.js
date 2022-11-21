/*
    let nums1=[]
    let nums2=[]
    
    num1 is a subset of nums 2
               |
    nums1 = [4,1,2]
               |
    nums1 = [1,3,4,2]
    
    output=[-1,3]
 */

var nextGreaterElement = function(nums1, nums2) {
    
   let result=[]
   
   
   for(let i=0;i<nums1.length;i++){
       let nums2Index=nums2.findIndex((num)=>{ return num==nums1[i]})
       
       let counter=nums2Index+1
       let found=false
       while(counter<nums2.length){
             if(nums2[counter]>nums2[nums2Index])
             {
                 result.push(nums2[counter])
                 found=true
                 break;
             }
           counter+=1
       }
       if(!found){
           result.push(-1)
       }
   }
    return result
};