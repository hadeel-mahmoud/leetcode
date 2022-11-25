/**
                |                     |
let height = [0,1,0,2,1,0,1,3,2,1,2,1]
[4,2,0,3,2,5]
right [5,0]
let stack =[]
 */
var trap = function(height) {
    
   let res=0
   let leftMax=[height[0]]
   let rightMax=[]
   let l=height.length-2
   rightMax[height.length-1]=height[height.length-1]
    
   for(let r=1;r<height.length;r++){
       leftMax[r]=Math.max(leftMax[r-1],height[r])
       if(l>=0){
           rightMax[l]=Math.max(rightMax[l+1],height[l])
           l-=1
       }    
   }

    for(let i=1;i<height.length-1;i++){
        res=res+Math.min(leftMax[i],rightMax[i])-height[i]
    }
    return res
    
};