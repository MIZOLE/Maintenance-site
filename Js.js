function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


//typing 



var i = 0; // initialize counter at 0
text = "How can we help you?"; //var named text - to be typed




function typing() {
    if (i < text.length) { //if var i is less than the length  of the the text var then append the character
        document.getElementById("typo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}

typing();

//function for names alert
function namesOnly(names) {

    let text = /^[A-z]+$/;

    if (names.value.match(text)) {
        return true;
    } else {
        alert("Please insert a name and surname")
    }
    window.location = "form.html"
}

//function for cell number alert 
function callsOnly(input) {

    let num = /^\d{10}$/;

    if (input.value.match(num)) {
        return true;
    } else {
        alert("Please enter a valid number")
    }
    window.location = "form.html"
}

//function for the email validation alert
function emailAddress(email) {

    let address = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(address)) {
        return true;
    } else {
        alert("Please enter a valid email address")
    }
    window.location = "form.html"
}







