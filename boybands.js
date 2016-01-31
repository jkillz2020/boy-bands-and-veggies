var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
// var currentBand = "indexOf(bands)";

// Keep track of which veggie we're on in the loop
// var currentVeggie = "indexOf(vegetables)";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < bands.length; i++) {

  // Add the band names into the correct <div>
   bandElement.innerHTML +="<div>" + bands[i] + "</div>"
   veggieElement.innerHTML +="<div>" + vegetables[i] + "</div>"
}

//   // Add the veggie names into the correct <div>
//   
// }

//}