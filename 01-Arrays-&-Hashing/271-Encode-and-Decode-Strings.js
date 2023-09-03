const encode = function(strs) {
   if(!strs.length) return null;
   return strs.join("encodeStr");
};

const decode = function(s) {
  if(s === null) return [];
  return s.split("-encodeStr")
};  


// Time Complexity: o(n)
// Space Complexity: o(n)