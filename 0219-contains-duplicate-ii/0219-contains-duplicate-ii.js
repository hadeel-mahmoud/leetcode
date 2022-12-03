/*
  nums[i] == nums[j] AND abs(i-j)<=k
   
  [1,2,3,1]
 */
const containsNearbyDuplicate =(nums, k)=> {
    let map= new Map()
    
    for(let i=0;i<nums.length;i++){
        let foundItems=map.get(nums[i])
        let validConditions=foundItems?.find((item)=> Math.abs(item-i)<=k)
        if(validConditions!==undefined){
            return true
        }
        if(foundItems){
             map.set(nums[i],[...foundItems,i])
        }else{
             map.set(nums[i],[i])
        }
    }

  return false
};