/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let set=new Set()
    let result=[]
    for(let i=0;i<nums1.length;i++){
        set.add(nums1[i])
    }
     for(let i=0;i<nums2.length;i++){
         let found=result.find(x=>x==nums2[i])!==undefined
         if(set.has(nums2[i])&&!found){
            result.push(nums2[i])
        }
     }
    return result
};