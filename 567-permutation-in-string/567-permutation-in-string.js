/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
  s1="ab"
  
  s2="eidbaooo"
*/
var checkInclusion = function(s1, s2) {
    let permLength=s1.length
    let s1Map=new Array(26).fill(0,0)

    for(let i=0;i<s1.length;i++){
        let index=s1.charAt(i).charCodeAt(0)-'a'.charCodeAt(0);
        s1Map[s1.charAt(i).charCodeAt(0)-'a'.charCodeAt(0)]++ 
    }
    
    for(let i=0;i<=s2.length-s1.length;i++){
        let s2Map=Array(26).fill(0,0)

        for(let j=0;j<s1.length;j++){
           s2Map[s2.charAt(j+i).charCodeAt(0)-'a'.charCodeAt(0)]++ 

        }
        if(match(s1Map,s2Map)){
            return true
        }
    }
    return false;
    
    
    
    
    
};

function match(s1Map,s2Map){
    for(let i=0;i<26;i++){
        if(s2Map[i]!==s1Map[i]){
           return false
        }
    }
    return true
}

