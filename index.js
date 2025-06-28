// Code your solution here
// Function that takes an array of drivers' names and a string, returns matching list of drivers (case insensitive)
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

// Function that takes an array of drivers' names and a string, returns all drivers whose names begin with provided letters
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}

// Function that takes an array of driver objects and a string, returns each element whose name property matches the provided string
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}