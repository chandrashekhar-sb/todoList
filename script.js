function addToTable() {   //function to add the tasks to the table
    event.preventDefault(); // prevents relaoding of the page
    let input = document.getElementById("inputId").value; // to get the value from the input field
    if (input.trim()) {  //Checks if the input is not empty or just spaces
        // adds a new row 
        document.getElementById("table").innerHTML += `<tr><td>${input}</td><td><button class="deleteBtn" onclick="confirmDelete(this)">Delete</button></td></tr>`;
        document.getElementById("inputId").value = ""; // Clears the  input
    } else {
        alert("Enter some text!"); // alerting the user if input is empty
    }

}
// function for confirmation of deletion
function confirmDelete(btn) {
    let confirmDelete = confirm("Are you sure you want to delete this task?"); // shows confirmation dailogue box
    if (confirmDelete) {
        btn.parentElement.parentElement.remove(); // Remove row if confirmed
    }
}

