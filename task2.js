function alertBox() {
  alert(document.getElementById("number").innerHTML);
}

function incrementNumber() {
  var num = document.getElementById("number").innerHTML;
  num++;
  document.getElementById("number").innerHTML = num;
}

//Learnt about the concept of nodes from W3schools.com - JS HTML DOM elements
function appendParagraph() {
  var p = document.createElement("p");
  var node = document.createTextNode(document.getElementById("number").innerHTML);
  p.appendChild(node);
  var appendNumber = document.getElementById("append");
  appendNumber.appendChild(p);
}
