/**/


const letterCombinations =(digits)=> {
    
    const output=[]
    const map=new Map()
    map.set('2',['a','b','c'])
    map.set('3',['d','e','f'])
    map.set('4',['g','h','i'])
    map.set('5',['j','k','l'])
    map.set('6',['m','n','o'])
    map.set('7',['p','q','r','s'])
    map.set('8',['t','u','v'])
    map.set('9',['w','x','y','z'])
    
    const generateOutput=(str,index,substring)=>{
    
    if(index==str.length){
        output.push(substring)
        return;
    }else{
        let letters=map.get(str[index])
        for(let i=0;i<letters.length;i++){
           generateOutput(str,index+1,substring+letters[i])
        }
    }
    }
    
    if(digits.length==0){
       return output
    }
    generateOutput(digits,0,"")
    
    return output

    
};

