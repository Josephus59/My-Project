// Modal functionality for profile photo  
document.getElementById("profilePhoto").onclick = function() {  
    document.getElementById("profileModal").style.display = "block";  
}  

document.getElementById("closeProfileModal").onclick = function() {  
    document.getElementById("profileModal").style.display = "none";  
}  

// Modal functionality for contact form submission confirmation  
document.getElementById("contactForm").onsubmit = function(event) {  
    event.preventDefault(); // Prevent the default form submission  
    document.getElementById("confirmationModal").style.display = "block";  
}  

// Close the confirmation modal  
document.getElementById("closeConfirmationModal").onclick = function() {  
    document.getElementById("confirmationModal").style.display = "none";  
}  

// Confirm submission  
document.getElementById("confirmSubmit").onclick = function() {  
    alert("Form submitted!"); // You can replace this with actual form submission logic  
    document.getElementById("confirmationModal").style.display = "none";  
}  

// Cancel submission  
document.getElementById("cancelSubmit").onclick = function() {  
    document.getElementById("confirmationModal").style.display = "none";  
}  

// Close the modal when clicking outside of it  
window.onclick = function(event) {  
    if (event.target === document.getElementById("profileModal")) {  
        document.getElementById("profileModal").style.display = "none";  
    }  
    if (event.target === document.getElementById("confirmationModal")) {  
        document.getElementById("confirmationModal").style.display = "none";  
    }  
}