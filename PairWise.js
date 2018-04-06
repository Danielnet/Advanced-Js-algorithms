//Pairwise
//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
function pairwise(arr, arg) {
  
  return arr.reduce(function(acc,element,index){
        for(var i= (index+1); i<arr.length; i++){
          if(element+ arr[i]===arg){
             acc+=i+index;
             arr[index]="x";
             arr[i]="x";
             break;
          }
      }
return acc;

},0);
}