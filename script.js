function checkRegex() {
    // Get the value of the input field
    var regex = document.getElementById('regexInput').value;

    // Validate the regular expression
    try {
        new RegExp(regex);
        alert('Valid regular expression!');
    } catch (e) {
        alert('Invalid regular expression: ' + e.message);
    }
}
