/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {

    var countOpenedBracket=0
    var countClosedBracket=0
    //iterating through the string and couning  open brackets and closed brackets
for (var i=0 ; i< str.length ; i++) {
    if (str[i]==="("  || str[i]==="{"   ||  str[i]==="[") {
        countOpenedBracket++
    }

    if (str[i]===")"  || str[i]==="}"   ||  str[i]==="]") {
        countClosedBracket++
    }
}


// edge case missing   [{]}




// to be balanced the open brackets must be equal to close brackets
if (countOpenedBracket===countClosedBracket ) { 
    return true
}
else return false


};
