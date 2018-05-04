// Function to SAVE Customer Database 
localStorage.setItem("Customer Database", JSON.stringify(customerDB))

// Function to SAVE Library Database
localStorage.setItem("Library Database", JSON.stringify(libDB))


// Function to LOAD either database
const loadDatabase = function(DB) {
    
    // Get the string version of either database
    const databaseString = localStorage.getItem(DB)
        
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)

}
    
loadDatabase("Library Database");
loadDatabase("Customer Database");
    
        