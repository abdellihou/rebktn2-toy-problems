/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(str) {
var count=0
for (var i=0 ; i<str.length ; i++) {
    for (var j=str.length; j>0 ; j++) {
      if (str[i]===str[j])
      count++
      if (count===2) { return str[i] }
    }
}
};
