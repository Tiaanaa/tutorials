/* document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the value from the input field
    let userInput = document.getElementById('N2C').value;

    // Do something with the input value
    console.log("Hello, " + userInput + "!");
});

var userConfirmed = confirm("Do you want to proceed?");
if (userConfirmed) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
} */
 // Get the elements
 const popup = document.getElementById('popup');
 const overlay = document.getElementById('overlay');
 const submit = document.getElementById('submit');
 const closeButton = document.getElementById('closeButton');

 // Show the popup when the button is clicked
 submit.addEventListener('click', () => {
     popup.style.display = 'block';
     overlay.style.display = 'block';
 });

 // Hide the popup when the close button is clicked
 closeButton.addEventListener('click', () => {
     popup.style.display = 'none';
     overlay.style.display = 'none';
 });

 // Hide the popup when the overlay is clicked
 overlay.addEventListener('click', () => {
     popup.style.display = 'none';
     overlay.style.display = 'none';
 });