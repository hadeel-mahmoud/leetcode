/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map=new Map();
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set("M",1000);
    
    let romanNumbers=s.split("")
    let int=0;
    for(let i=0;i<romanNumbers.length;i++)
    {
      if((i+1)<romanNumbers.length&&
          (romanNumbers[i]=='I' && (romanNumbers[i+1]=='V'||romanNumbers[i+1]=='X'))||
        (romanNumbers[i]=='X' && (romanNumbers[i+1]=='L'||romanNumbers[i+1]=='C'))||
         (romanNumbers[i]=='C' && (romanNumbers[i+1]=='D'||romanNumbers[i+1]=='M'))
        )
        {
            int=int-map.get(romanNumbers[i])
        }
        else{
              int=int+map.get(romanNumbers[i])
        }
    }
    return int;

};