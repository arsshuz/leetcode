/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
var words="thequickbrownfoxjumpsoverthelazydog"
for(let ch of words){
   if(!sentence.includes(ch)){
    return false
   }
   
}
 return true   
};