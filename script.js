var myDiv = document.getElementById("myDiv");
var show=true;
function myFunction(){
  if (show) {
    myDiv.style.display = "block";
    show=false;
  } else {
    myDiv.style.display = "none";
    show=true;
  }
}