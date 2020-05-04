function uppercase(x, choice) {
  let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(let i = 0; i < lower.length; i++) {
    if(x == lower[i] && choice == 'upper') {       ///This matches the lower letter with the upper.
      return upper[i];
    } else if(x == lower[i] || x == upper[i] && choice == 'lower') {    //this leaves the letter as-is, or changes from upper to lower.
      return lower[i];
    }
  }
  return x;
}

function titleCase(str) {
  let arr = str.split(' ');
  let newArr = '';
  let string;
  for(let i = 0; i < arr.length; i++) {
    newArr += ' ' + uppercase(arr[i][0], 'upper');    ////sending the first letter to the upper case function

    for(let j = 1; j < arr[i].length; j++) {
      newArr += uppercase(arr[i][j], 'lower');  ////sending the other letter to the function as well, except with a second argument
    }                                           //that says lower. I made the second arguement to take in letters that were already
  }                                             //capital letters and needed to be changed to lower case.
  string = newArr.split(' ');
  string.shift();
  string = string.join(' ');
  return string;
}

titleCase("sHoRt AnD sToUt");//argument
