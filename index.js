var uniqueInOrder=function(iterable){
  
  let arrUnique=new Set(iterable);
  let res = [...arrUnique];
  return res;
}
let sw=uniqueInOrder('AAAABBBCCDAABBB');
console.log(sw);