// Use a self-executing anonymous function to encapsulate the code
(function () {
    // Add an event listener to the button with the ID "btn"
    document.getElementById("btn").addEventListener('click', function () {
        validateForm();
    });

    // Function to validate the form
    function validateForm() {
        // Get values from form fields
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        var department = document.getElementById("department").value;
        var roll = document.getElementById('roll').value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirm-email').value;
        var areaCode = document.getElementById("areacode").value;
        var phoneNum = document.getElementById("phone").value;
        var address = document.getElementById("address").value;

        // Concatenate first and last name to form a full name
        var fullName = `${firstName} ${lastName}`;

        // Create an array to store form data
        var data = [];

        // Check if gender is selected
        if (!gender) {
            displayAlert("Please select a gender.");
            return; // Stop further validation
        }

        // Check other fields and display appropriate messages
        if (!firstName || !lastName || !department || !roll || !email || !confirmEmail || !areaCode || !phoneNum || !address) {
            displayAlert("Please fill in all required fields.");
        } else {
            // Push form data into the array
            data.push({ Field: "Full Name", Value: fullName });
            data.push({ Field: "Department", Value: department });
            data.push({ Field: "Roll", Value: roll });
            data.push({ Field: "Gender", Value: gender.value });
            data.push({ Field: "Email", Value: email });
            data.push({ Field: "Confirm Email", Value: confirmEmail });
            data.push({ Field: "Area Code", Value: areaCode });
            data.push({ Field: "Phone Number", Value: phoneNum });
            data.push({ Field: "Address", Value: address });

            // Display form data in a table
            displayDataInTable(data);
        }
    }

    // Function to display alert messages
    function displayAlert(message) {
        document.getElementById("alert").innerHTML = message;
    }

    // Function to display form data in a table
    function displayDataInTable(data) {
        var table = document.getElementById("result");
        var tbody = table.getElementsByTagName('tbody')[0];

        // Clear existing rows
        tbody.innerHTML = "";

        // Populate table with data
        for (var i = 0; i < data.length; i++) {
            var row = tbody.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = data[i].Field;
            cell2.innerHTML = data[i].Value;
        }

        // Display the table
        table.style.display = "block";
    }
})();
