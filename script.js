// Function to create a personalized greeting message
function createGreeting(firstName, surname) {
    // Returns a greeting string using template literals for easy insertion of variables
    return `Hello, ${firstName} ${surname}! How are you today?`;
}

// Getting user input using prompt()
let firstName = prompt("Please enter your first name:");
let surname = prompt("Please enter your surname:");

// Calling the function with user inputs
let greeting = createGreeting(firstName, surname);

// Displaying the greeting using an alert
alert(greeting);
