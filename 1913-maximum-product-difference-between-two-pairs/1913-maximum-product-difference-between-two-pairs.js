/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    var sortedNums=nums.sort(function(a,b){return a-b})
    if(nums.length<4){
       return null
    }
    let first=sortedNums[0]
    let second=sortedNums[1]
    let third=sortedNums[nums.length-2]
    let fourth=sortedNums[nums.length-1]

    return third*fourth-first*second
};