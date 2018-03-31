//Inventory Update
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  
  //increase amount of each item in arr1, based on element amount in arr2.
  arr1.forEach(element1 =>{
               arr2.forEach(element2 =>{
               if(element1[1]===element2[1]){
                 element1[0]+=element2[0];
                var y = arr2.indexOf(element2);
                 arr2.splice(y, 1);
               }
    });
  });
           
  //push all unique elements in arr2 into arr1
  arr2.forEach(element1 =>{
    arr1.push(element1);
  });
  
  //sort final array elements in alphabetical order
  arr1.sort(function(a, b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
});
 
  
  
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);
