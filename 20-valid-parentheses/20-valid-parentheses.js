/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let items=[]
    for(i=0;i<s.length;i++){
      if( (s.charAt(i)==')' && items[items.length-1]=='(') || (s.charAt(i)=='}' && items[items.length-1]=='{') ||                    (s.charAt(i)==']' && items[items.length-1]=='[')){
             items.pop()
        }else{
             items.push(s.charAt(i))
        }

    }
    return items.length?false:true
       
};