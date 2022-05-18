console.log("working");
var input = localStorage.getItem("userChoice")
console.log(input);

function submitFunction(){
    console.log("click");
    location.replace('./frontPage.html')
  } 
document.getElementById('userInput').innerHTML = `You selected ${input} out of 5`