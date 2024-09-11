// ................
var selectedRow = null;


// Show Alert 
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".containerrr");
    const main = document.querySelector(".mainnn");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields 
function clearFields() {
    document.querySelector("#projectName").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#email").value = "";
}



// ADD Data 
document.querySelector("#project-form").addEventListener("submit", (e) => {
    e.preventDefault();


    // Get Form Values 
    const projectName = document.querySelector("#projectName").value;
    const date = document.querySelector("#date").value;
    const email = document.querySelector("#email").value;

    // Validate
    if (projectName == "" || date == "" || email == "") {
        showAlert("Please fill in all fields", "danger");
        // alert("Please fill in all fields");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#project-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${projectName}</td>
                <td>${date}</td>
                <td>${email}</td>
                <td>
                <a href="" class="mr-5 btn-shape bg-orange c-white edit">Edit </a>
                <a href="" class="btn-shape bg-red c-white delete">Delete</a>
                </td?
                `;
            list.appendChild(row);
            selectedRow = null
            showAlert("Added successfully", "success")
        }
        else {
            selectedRow.children[0].textContent = projectName;
            selectedRow.children[1].textContent = date;
            selectedRow.children[2].textContent = email;
            selectedRow = null;
            showAlert("Project Info Edietd", "info")
        }
        clearFields();
    }

});

// Edit Data 
document.querySelector("#project-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        e.preventDefault();
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#projectName").value = selectedRow.children[0].textContent;
        document.querySelector("#date").value = selectedRow.children[1].textContent;
        document.querySelector("#email").value = selectedRow.children[2].textContent;
    }
})

// Delete Data 
document.querySelector("#project-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        e.preventDefault();
        target.parentElement.parentElement.remove();
        showAlert("Project Data Deleted", "danger");
    }
})
