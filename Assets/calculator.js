document.getElementById("answer").readOnly = true; 

let screen = document.getElementById("answer");

buttons = document.querySelectorAll("button");

let screenValue = "";

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;

        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == "C") {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;

        } else if (buttonText == "AC") {
            screenValue = ""
            screen.value = screenValue;

        } else if (buttonText == "=") {
            equals(); 

        } else if (buttonText == "%") {
            buttonText = "/100*";
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == "^") {
            buttonText = "**";
            screenValue += buttonText;
            screen.value = screenValue;

        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

function equals() {

    if (
        screen.value.includes("(") &&
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))

    ) {  
        
    } else {
        screen.value = eval(screenValue);
    }
}