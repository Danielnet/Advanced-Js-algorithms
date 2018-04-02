//No repeats please
//Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

function permAlone(str) {
  

  var arr = str.split('');
  var perms = [];
  
  //param n , number of objects.
  //https://en.wikipedia.org/wiki/Heap%27s_algorithm
  function generate(n) {
    var val;
    var counter;
    if(n!==1) {
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        if((n % 2)===0){
          val = arr[i];
          arr[i] = arr[n-1];
          arr[n-1] = val;
        }
        else{
          val = arr[0];
          arr[0] = arr[n-1];
          arr[n-1] = val;
        }
      }
    }
        if(n === 1) {
      perms.push(arr.join(''));
    } 
  }
  
  generate(arr.length);
  
  
 
  var filtered = perms.filter(function(string) {
    return !string.match(/(.)\1+/g);
  });
  

  return filtered.length;
  
  
}
