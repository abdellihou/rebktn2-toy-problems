/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
var str="RPS";
var output=[];
for (var i=0 ; i<str.length ; i++ ) {
    for (var j=0 ; j<str.length; j++) {
        for (var k=0 ; k<str.length ; k++){
            output.push(str[i]+str[j]+str[k])
        }
    }
}
return output;
};
