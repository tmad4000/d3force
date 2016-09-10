"use strict";

console.clear();
var myData = [{ name: "David", score: 10 }, { name: "Jacob", score: 0 }, { name: "Shadi", score: 5 }];

document.getElementById("test").__data__ = { name: "Jacob" };

var mySelection = d3.select("#canvs").selectAll("p").data(myData, function (d) {
  console.log(d);return d ? d.name : '';
});

// console.log(mySelection);

mySelection.enter().append("p").html(function (d) {
  return d.name + " " + d.score;
});

mySelection.html(function (d) {
  return d.name + " " + d.score;
});