/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newString=s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    reversedString=newString.split("")
    reversedString.reverse()
    if(reversedString.join("")==newString)
        return true
    else return false
};

