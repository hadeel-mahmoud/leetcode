/*           
    nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
    
 */
const fourSumCount = (nums1, nums2, nums3, nums4) =>{
    let n=nums1.length
    let tuples=0
    let sums={}
    for(let i=0;i<n;i++)
    {
         for(let j=0;j<n;j++)
         {
             let newSum=sums[nums1[i]+nums2[j]]
             if(newSum){
                 sums[nums1[i]+nums2[j]]+=1
             }else{
                 sums[nums1[i]+nums2[j]]=1 
             }
         }
    }

    for(let i=0;i<n;i++)
    {
         for(let j=0;j<n;j++)
         {
           let newSum=sums[-nums3[i]-nums4[j]]
           if(newSum)
           tuples+=newSum
         }
    }
    return tuples
};