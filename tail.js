const tail = function(words) {
  let tail = [];

  // if words length 0 or 1 return the words array with if statement (words.length < 2)
  if (words.length < 2) {
    return words;
  }

  // if words length start from 1 index gives tail of array
  for (let i = 1; i < words.length; i++) {
    tail.push(words[i]);
  }
  return tail;
};
 
module.exports = tail;
