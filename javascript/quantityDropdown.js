// JavaScript code to generate options for quantity dropdowns
function generateQuantityOptions() {
    // Get all quantity dropdowns on the page
    const quantityDropdowns = document.querySelectorAll('.quantity-select');
    
    // Loop through each dropdown and add options
    quantityDropdowns.forEach(dropdown => {
        // Generate options from 1 to 50
        for (let i = 1; i <= 50; i++) {
            // Create a new option element
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            
            // Append the option to the dropdown
            dropdown.appendChild(option);
        }
    });
}

// Call the function to generate options for all quantity dropdowns on the page
generateQuantityOptions();
