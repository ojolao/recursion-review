// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var traverseTree = function(node) {
    if(node.classList !== undefined) {
      for(var i = 0; i < node.classList.length; i++) {
        if(node.classList[i] === className) {
          result.push(node);
        }
      }
    }
    if(node.childNodes.length !== 0) {
      for (var i = 0; i < node.childNodes.length; i++) {
        traverseTree(node.childNodes[i]);
      }
    } 
  } 
  traverseTree(document);
  return result;
};