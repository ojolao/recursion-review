// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var result = [];
  for (var i = 0; i < json.length; i++) { 
    result.push(json[i]);
  }


  return result.join('');
};
