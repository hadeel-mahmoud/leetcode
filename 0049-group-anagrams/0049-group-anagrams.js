/**
               |
["eat","tea","tan","ate","nat","bat"]

["aet":[eat,tea,ate],ant:[tan.nat],abt:[bat]]
 */
var groupAnagrams = function(strs) {
    
    let map=new Map()
       for (let str of strs) {
        let sortedString=str.split("").sort().join("")
        let foundString=map.get(sortedString)

        if(foundString){
            map.set(sortedString,[...foundString,str])
        }else{
             map.set(sortedString,[str])
        }
    }
    return Array.from(map.values())
};