/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var result=1
    for (var i=0 ; i<array.length ; i++) {
        if (array[i]<0) {
            array[i]=-array[i]
        }
    }
    array.sort()
    result=array[array.length-1]*array[array.length-2]*array[array.length-3]
    return result
    
    }
    