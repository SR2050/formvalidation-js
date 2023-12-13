document.getElementById('btn').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Update the button text to indicate loading
    document.getElementById('btn').innerHTML = "Loading...";

    // Get the values from the email and password input fields
    const em = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;

    // Check if the entered email and password are correct
    const user = "admin";
    const password = "admin";

    if (em === user && pwd === password) {
        document.getElementById("alert").innerHTML = "Login successfully. Welcome Mr " + em + "!";
    } else {
        document.getElementById("alert").innerHTML = "Email and password are incorrect!";
    }
});
