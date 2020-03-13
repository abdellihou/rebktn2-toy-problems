/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
// Array.prototype.isSubsetOf = function (arr) {
//     // your code here
// };


function isSubsetOf (arr1,arr2) {
    var newArray=[];
    var arr=[];
    //this loop looks for the element present in the two arrays
       for (var i=0 ; i<arr2.length ; i++) {
            for (var j=0 ; j<arr1.length ; j++ ) {
            if (arr2[i]===arr1[j]) {
            newArray.push(arr2[i])
             }
            }
    }
    //this if tests if the array1 is a subset of array2
       if (newArray.length === arr1.length) {
           for (var i=0 ; i<newArray.length ; i++) {
               for (var j=newArray.length ; j<=0 ; j--) {
               if (newArray[i]===newArray[j]) {    //these statements disregard duplicates 
                   arr.push(newArray[i])
                }
               }
           }
           return true
       }
       else {
           return false
       }
}