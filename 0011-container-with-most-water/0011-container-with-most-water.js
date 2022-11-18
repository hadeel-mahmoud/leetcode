/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxheight=0
    let pointer1=0
    let pointer2=height.length-1

    while(pointer1<pointer2){
        if(height[pointer1]<height[pointer2]){
            maxheight=Math.max(maxheight,height[pointer1]*(pointer2-pointer1))
            pointer1+=1
        }else{
            maxheight=Math.max(maxheight,height[pointer2]*(pointer2-pointer1))
            pointer2-=1
        }
       
    }
    return maxheight
};