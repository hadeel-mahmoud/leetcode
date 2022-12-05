/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix =(matrix, target)=> {
    let indexOfCorrectRange=-1;
    
    
    for(let i=0;i<matrix.length;i++){
        let withinRange=matrix[i][0]<=target&&matrix[i][matrix[i].length-1]>=target
        // console.log(matrix[i][0],matrix[i][matrix[i].length-1],target)
        if(withinRange){
           indexOfCorrectRange=i
        }
    }
    let value=indexOfCorrectRange>-1?matrix[indexOfCorrectRange].findIndex((number)=>{return number==target}):-1
    return value>-1?true:false
};