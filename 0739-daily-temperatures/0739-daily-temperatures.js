/*
      |
 [73,74,75,71,69,72,76,73]
 
 let stack=[73]
 */
var dailyTemperatures = function(temperatures) {
    let output=Array(temperatures.length).fill(0)
    let stack=[]
    let n=temperatures.length
    
    for(let i=0;i<n;i++){
        while(stack.length>0&&stack[stack.length-1].value<temperatures[i]){
            let lastItem=stack.pop().index
            output[lastItem]= i-lastItem
        }
        stack.push({value:temperatures[i],index:i})
    }
    return output
    
};