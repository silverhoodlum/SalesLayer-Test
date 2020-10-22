//Select buttons

let affiliateButton = $(".dropdown-item:nth-child(2)");
let solutionsButton = $(".dropdown-item:nth-child(3)");

//Select bracket 
let bracket = $("#category-card");

//add functions to replace bracket content dynamically

affiliateButton.click( function(){
    bracket.html("<img src='assets/images/modal/icon_affiliate.png' /> <span>Affiliate Partner</span> ")              
})

solutionsButton.click( function(){
    bracket.html("<img src='assets/images/modal/icon_solution.png' /> <span>Solutions Partner</span> ")              
})

//Add text to button on mobile

let mainButton = $("button").first()


function myFunction(x) {
  if (x.matches) { // If media query matches
    mainButton.html('<a href="#">Encuentra un partner de Sales Layer</a><span class="icon"></span>')
  } else {
  mainButton.html('<a href="#">Encuentra un partner</a><span class="icon"></span>')
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)