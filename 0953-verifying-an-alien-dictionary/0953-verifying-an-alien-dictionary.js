/*
    
["word","world","row"]
 */
var isAlienSorted = function(words, order) {
    
    // create map add letters by order to it
    // add each word to the map item with its first letter

    
    let map=new Map()
    for(let i=0;i<order.length;i++){
        map.set(order.charAt(i),i)
    }
    
    for(let i=0;i<words.length-1;i++)
    {
       let firstWordDictionaryIndex=map.get(words[i].charAt(0))
       let nextWordDictionaryIndex=map.get(words[i+1].charAt(0))
       if(firstWordDictionaryIndex==nextWordDictionaryIndex){
           //loop over them until character is different
           let nextCharIndex=1
           let firstWordLength=words[i].length
           let nextWordLength=words[i+1].length
           let valid=false
           while(nextCharIndex<Math.min(firstWordLength,nextWordLength)){
                let first=map.get(words[i].charAt(nextCharIndex))
                let next=map.get(words[i+1].charAt(nextCharIndex))  
                    if(first>next)
                     return false
                    else if(first==next) nextCharIndex+=1
                    else {
                        valid=true
                        break;
                    }
               
           }
           if(!valid&&firstWordLength>nextWordLength){
               return false
           }
           
       }
           
       else if(nextWordDictionaryIndex<firstWordDictionaryIndex){
           return false
       }
    }

    return true;
    
};