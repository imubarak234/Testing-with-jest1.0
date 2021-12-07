function stringLength(str){
  if(typeof str == 'string'){
    let ans = str.length; 
    if((ans >= 1) && (ans <= 10)){
      return ans;
    }
    else {
      throw new Error('Out of range');
    }
  }
  else{
    throw new Error('Not a string');
  }
}

function reverseString(str){
    if(typeof str == 'string'){
      let mix = '';
      for(let x = str.length - 1; x >= 0; x--){
        mix += str[x];
      }
      return mix;
    }
    else {
      throw new Error('not a string')
    }
  }

class calculator{
  add(num , num1){
    if(typeof num == 'number' && typeof num1 == 'number'){
      return num + num1;
    }
  }

  substract(num, num1){
    if(typeof num == 'number' && typeof num1 == 'number'){
      return num - num1;
    }
  }

  divide(num, num1){
    if(typeof num == 'number' && typeof num1 == 'number'){
      return num / num1;
    }
  }

  multiply(num, num1){
    if(typeof num == 'number' && typeof num1 == 'number'){
      return num * num1;
    }
  }
}

function capitalize(str){
  if(typeof str == 'string'){
    let mic = str.split('');
    mic[0] = mic[0].toUpperCase();
    return mic.join('')
  } 
  else{
    throw new Error('Not a String');
  }
}


module.exports = {stringLength, reverseString, calculator, capitalize};