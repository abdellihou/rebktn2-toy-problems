// You are given an input string.

 //For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112

<<<<<<< HEAD
 function occur (str) {
    var count=0;
    var str2=""
    for (var i=0 ; i<str.length ; i++)  {
       if (str[i]===str[i+1]) {
           count++
       }
       if (str[i]!==str[i+1]) {
           i++
          //
       }
    }
    for (var i=1 ; i<=count ; i++) {
        str2= str2+ i
    }
    return str2
}
=======


>>>>>>> 8b2322f64f8f3bd6a03885315c81ee9cadbe4dac
 