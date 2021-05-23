// Function to Get Text Information (including Invalid Input)
function getTextInfo() {
    let txt="";
    // Get the value of the textarea
    let myText = document.getElementById("mytext").value;
    // Check if Text is Valid
    if (myText.length === 0) {
        txt += `Invalid Input.  Text cannot be empty.`;
    } else {
        // Display Entered Text
        txt += `You have entered the text ${myText}<p>`;
        // Check if the text is a pangram
        if (isPangram(myText)) {
            txt += `This text is a pangram`;
        } else {
            txt += `This text is not a pangram`;
        }

        // Display Information in the Browser
        document.getElementById("txtinfo").innerHTML = txt;
    }

}