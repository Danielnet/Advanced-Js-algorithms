//Symmetric Difference
//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
function sym(args) {
  var resultArray = diffArray(arguments[0],arguments[1]);
  for(var i = 2;i<arguments.length;i++){
  resultArray = diffArray(resultArray,arguments[i]);
  }

  //get symmetric difference
  function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
  //remove duplicates
  function removeDuplicateUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array;
}
  
  if(arguments.length<3){
    return removeDuplicateUsingFilter(diffArray(arguments[0],arguments[1]));
  }
  else{
return removeDuplicateUsingFilter(resultArray);
  }

}

//sym([1, 2, 3], [5, 2, 1, 4]);
