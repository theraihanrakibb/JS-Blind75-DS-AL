/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// we cam creat a Hash Table  and freequcy map.
const isAnagram = function(s, t) {
  
    if (s.length !== t.length) return false;

    let map = {};

    for(let i = 0; i < s.length; i++){
      let letter = s[i];

      if(!map[letter]){
        map[letter] = 1;
      }else{
        map[letter] ++;
      }
    }

    for(let i = 0; i < t.length; i++){
      let letter = t[i];

      if(map[letter] === undefined){
        return false;
      }

      if(map[letter]<1){
        return false;
      }
      map[letter]--;
    }

    return true;
};

// Time = o(n+m)
// space = o(n)