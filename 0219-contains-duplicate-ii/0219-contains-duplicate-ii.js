/*
  nums[i] == nums[j] AND abs(i-j)<=k
   
  [1,2,3,1]
 */
const containsNearbyDuplicate =(nums, k)=> {
    let map= new Map()
    
    for(let i=0;i<nums.length;i++){
        let foundItem=map.get(nums[i])
        console.log(nums[i],i,foundItem)
        if(foundItem!==undefined&&Math.abs(foundItem-i)<=k){
            return true
        }else{
             map.set(nums[i],i)
        }
    }

  return false
};