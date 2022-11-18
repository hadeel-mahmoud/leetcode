/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let sortedNums=nums.sort(function(a,b){return a-b})
    let results=[]
    
    for(let i=0;i<sortedNums.length;i++){
        if(i>0&&sortedNums[i-1]==sortedNums[i])
            continue
        
        let left=i+1
        let right=sortedNums.length-1
        while(left<right){
            let threeSum=sortedNums[i]+sortedNums[left]+sortedNums[right]  
            if(threeSum<0){
                left=left+1
            }else if(threeSum>0){
                right=right-1
            }else{
                results.push([sortedNums[i],sortedNums[left],sortedNums[right]  ]) 
                left=left+1
                while(sortedNums[left]==sortedNums[left-1] &&left<right)
                { 
                   left=left+1
                }
            }
            
        }
    }
    return results
};