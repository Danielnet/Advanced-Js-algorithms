//Record Collection

//You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

//Your function must always return the entire collection object.

//There are several rules for handling incomplete data:

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
if(prop === "artist"){
  if(arguments[2]!==""){
    collection[id] = { artist: arguments[2] };
  }
    if(arguments[2]===""){
      delete collection[id][arguments[1]];
  }
}
  
  
  if(prop === "tracks"){
 if(arguments[2]!==""){
   if(collection[id]['tracks']!==undefined){  
   collection[id]['tracks'].push(arguments[2]);
   }
   else{
    collection[id]['tracks'] = [];
     collection[id]['tracks'].push(arguments[2]);
   }
 }
   if(arguments[2]===""){
     delete collection[id][arguments[1]];
   }
}
  
  
  
  return collection;
}

// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA");

