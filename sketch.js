var textbox, paragraph;
var validInputs = "0123456789,.";
var filteredInput;
var temp;
var startPris = 10;
var prisPrKVM = 2;

function setup() {
  noCanvas();
  textbox = createInput("Skriv kvadratmeter").style("color", "#9F9F9F");
  paragraph = createP("Din pris:");
  
  textbox.input(inputEvent);
}
function calculate(){
  filteredInput = "" + (filteredInput * prisPrKVM + startPris).toFixed(2);
}

function inputEvent() {
  filteredInput = "";
  temp = textbox.value();
  
  for(var i = 0; i < textbox.value().length; i++){ //This ensures that only numbers, commas and points will be entered.
    for(var j = 0; j < validInputs.length; j++){
      if(temp.charAt(i) == validInputs.charAt(j)){
        filteredInput = filteredInput + textbox.value()[i];
      }
    }
  }
  
  textbox.value(filteredInput).style("color", "#000000");
  
  for(var i = 0; i < filteredInput.length; i++){//Changes comma to dot, so it can be calculated.
    if(filteredInput.charAt(i) == ","){
      filteredInput = "" + filteredInput.substr(0,i) + "." + filteredInput.substr(i+1,filteredInput.length);
    }
  }
  
  calculate();
  
  for(var i = 0; i < filteredInput.length; i++){//Changes dot to comma for the output.
    if(filteredInput.charAt(i) == "."){
      filteredInput = "" + filteredInput.substr(0,i) + "," + filteredInput.substr(i+1,filteredInput.length);
    }
  }
  
  if(temp == "" || filteredInput == "NaN"){
    paragraph.html("Din pris: ");
  }else{
    paragraph.html("Din pris: " + filteredInput + " kr.");
  }
  
}