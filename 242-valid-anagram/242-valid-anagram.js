/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 
    let word1Letters =new Map();
    let word2Letters =new Map();
    let w1=s.split("");
    let w2=t.split("");

         for(let i=0;i<w1.length;i++){
             let found=word1Letters.get(w1[i])
             if(found){
                word1Letters.set(w1[i],found+1)
             }else {
                word1Letters.set(w1[i],1)
             }
          }
    
        for(let i=0;i<w2.length;i++){
             let found=word2Letters.get(w2[i])
             if(found){
                word2Letters.set(w2[i],found+1)
             }else {
                word2Letters.set(w2[i],1)
             }
          }
    let keys1=[...word1Letters.keys()]
    let keys2=[...word2Letters.keys()]

    if(keys1.length==keys2.length){
         for(let i=0;i<keys1.length;i++){
                if(word1Letters.get(keys1[i])!==word2Letters.get(keys1[i])){
                    return false
                }
            }
        return true ;
    }
    
    return false;
    
  
    
};