module.exports = function check(str, bc) {
  let result = false;
  str = str.split('');
  x(str, bc)
  
  function x(str){
    if(str.length == 0){
      result = true;
    } else {
      for (let i = 0; i < str.length; i++){
        for (let j = 0; j < bc.length; j++){
          if(str[i] == bc[j][0] && str[i+1] == bc[j][1]){
            str.splice(i, 2);
            x(str);
          }
        }
      }
    }
  }
  return result;
}
