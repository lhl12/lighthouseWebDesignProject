function test(image) {
  console.log("Clicked");
  var objChange = document.querySelector("#tester");
  objChange.style.backgroundColor = "red";
}

function addTitles() {
  console.log('ok');
  var objsChange = document.querySelectorAll("area");
  var loc;
  for (let i = 0; i < objsChange.length; i++) {
    loc = objsChange[i].alt;
    objsChange[i].title = loc;
  }
}

var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      console.log("checking")
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }