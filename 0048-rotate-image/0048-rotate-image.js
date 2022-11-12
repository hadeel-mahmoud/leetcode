var rotate = function(matrix) {
    
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix[i].length;j++){
            let temp=matrix[j][i]
            matrix[j][i]=matrix[i][j]
            matrix[i][j]=temp
        }

    }
    
 for (let i=0;i<matrix.length;i++) {
        matrix[i].reverse()
    }
};