/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let firstString= strs[0].split("")
    let common=""
    for (let i=0;i<firstString.length;i++){
        let commonLetter=true
        
        for(let x=1;x<strs.length;x++){
            let current= strs[x].split("")
            if(firstString[i]!==current[i]){
                return common;
            }
        }
        if(commonLetter==true){
            common=common+firstString[i]
        }
    }
    return common;
};