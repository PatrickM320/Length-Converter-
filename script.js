function roundToTwoDecimals(value) {
  return value.toFixed(2); // Round to two decimal places
}

function convertFromInches(value) {
  return {
    inches: roundToTwoDecimals(value),
    centimetres: roundToTwoDecimals(value * 2.54),
    metres: roundToTwoDecimals(value * 0.0254),
  };
}

function convertFromCentimetres(value) {
  return {
    inches: roundToTwoDecimals(value / 2.54),
    centimetres: roundToTwoDecimals(value),
    metres: roundToTwoDecimals(value / 100),
  };
}

function convertFromMetres(value) {
  return {
    inches: roundToTwoDecimals(value * 39.3701),
    centimetres: roundToTwoDecimals(value * 100),
    metres: roundToTwoDecimals(value),
  };
}

function updateAllConversions(value, unit) { 
  const parsedValue = parseFloat(value); // Parse the value into a floating-point number
  if (isNaN(parsedValue)) {
    // Clear all fields if the value is invalid
    document.getElementById('inches').value = '';
    document.getElementById('centimetres').value = '';
    document.getElementById('metres').value = '';
    return {
      inches: '',
      centimetres: '',
      metres: ''
    };
  }

  let inches = '';
  let centimetres = '';
  let metres = '';

  // Determine the unit and convert
  if (unit === 'inches') {
    inches = roundToTwoDecimals(parsedValue); // Store the converted inches
    centimetres = roundToTwoDecimals(parsedValue * 2.54); // Inches to centimeters
    metres = roundToTwoDecimals(parsedValue * 0.0254); // Inches to meters
  } else if (unit === 'centimetres') {
    inches = roundToTwoDecimals(parsedValue / 2.54); // Centimeters to inches
    centimetres = roundToTwoDecimals(parsedValue); // Just use the value as is
    metres = roundToTwoDecimals(parsedValue / 100); // Centimeters to meters
  } else if (unit === 'metres') {
    inches = roundToTwoDecimals(parsedValue * 39.3701); // Meters to inches
    centimetres = roundToTwoDecimals(parsedValue * 100); // Meters to centimeters
    metres = roundToTwoDecimals(parsedValue); // Just use the value as is
  }

  // Set the values in the DOM elements
  document.getElementById('inches').value = inches;
  document.getElementById('centimetres').value = centimetres;
  document.getElementById('metres').value = metres;

  // Return the converted values so tests can assert them
  return {
    inches,
    centimetres,
    metres
  };
}

// Export the functions so they can be used in the test file
module.exports = {
  roundToTwoDecimals,
  convertFromInches,
  convertFromCentimetres,
  convertFromMetres,
  updateAllConversions
};
