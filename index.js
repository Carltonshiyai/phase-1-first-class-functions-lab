// Code your solution in this file!
// Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Store both functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Function that takes an array and a function, and calls the function with the array
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
