document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from the input field
    let userInput = document.getElementById('N2C').value;

    // Do something with the input value
    console.log("Hello, " + userInput + "!");
});