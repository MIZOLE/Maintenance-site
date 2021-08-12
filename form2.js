function Allinputs(input) {

    let num = /^\d{10}$/;

    if (input.value.match(num)) {
        return true;
    } else {
        alert("Please enter a cell number")
        return false;
    }
}

function cellNumbers(names) {

    let text = /^[A-Za-z]+$/;

    if (names.value.match(text)) {
        return true;
    } else {
        alert("Please insert a name")
    }

}