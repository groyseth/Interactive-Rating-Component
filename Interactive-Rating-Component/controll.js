var button = document.querySelector('.backGround')
button.addEventListener("click", buttonClick);
var submitButton = document.querySelector('.submitButton')
submitButton.addEventListener("click", submitFunction);

function buttonClick(e) {
  var userChoice = e.target.id
  console.log(userChoice);
 localStorage.setItem("userChoice", userChoice);

}
function test(){
var input = localStorage.getItem("userChoice");  
console.log(input);
}
function submitFunction(){
  console.log("click");
  location.replace('./endPage.html')
}
