// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return ''+obj;
  } else if (typeof obj === 'function' || obj === undefined){
    return '';
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (Array.isArray(obj) ){
    if (obj.length === 0) {return '[]';};
    var result = [];
    for(var i= 0; i < obj.length; i++){
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  } else if (typeof obj === 'object'){
    var result = [];
    if (Object.keys(obj).length === 0) {return "{}";};
    for (var key in obj){
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          continue;
        } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
    }
    return '{' + result + '}';
  }
};
