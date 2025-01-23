// Round a number to two decimals
function roundToTwoDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// Converts inches to centimeters and meters, and returns the results
function convertFromInches(value) {
  return {
    centimetres: roundToTwoDecimals(value * 2.54), // Inches to centimeters
    metres: roundToTwoDecimals(value * 0.0254),    // Inches to meters
  };
}

// Converts centimeters to inches and meters, and returns the results
function convertFromCentimetres(value) {
  return {
    inches: roundToTwoDecimals(value / 2.54),      // Centimeters to inches
    metres: roundToTwoDecimals(value / 100),       // Centimeters to meters
  };
}

// Converts meters to inches and centimeters, and returns the results
function convertFromMetres(value) {
  return {
    inches: roundToTwoDecimals(value * 39.3701),   // Meters to inches
    centimetres: roundToTwoDecimals(value * 100),  // Meters to centimeters
  };
}

// Update all conversions based on input, returns converted values
function updateAllConversions(value, unit) {
  const parsedValue = parseFloat(value); // Parse the value into a floating-point number
  if (isNaN(parsedValue)) {
    // Return empty values if the input is invalid
    return {
      inches: '',
      centimetres: '',
      metres: ''
    };
  }

  // Determine the unit and convert
  if (unit === 'inches') {
    return convertFromInches(parsedValue);
  } else if (unit === 'centimetres') {
    return convertFromCentimetres(parsedValue);
  } else if (unit === 'metres') {
    return convertFromMetres(parsedValue);
  }
}

// Initialize the event listeners (to be called after the DOM is ready)
function initializeEventListeners() {
  const inchesInput = document.getElementById('inches');
  const centimetresInput = document.getElementById('centimetres');
  const metresInput = document.getElementById('metres');

  if (!inchesInput || !centimetresInput || !metresInput) {
    throw new Error("One or more DOM elements are missing");
  }

  inchesInput.addEventListener('input', (e) => {
    const result = updateAllConversions(e.target.value, 'inches');
    inchesInput.value = result.inches;
    centimetresInput.value = result.centimetres;
    metresInput.value = result.metres;
  });

  centimetresInput.addEventListener('input', (e) => {
    const result = updateAllConversions(e.target.value, 'centimetres');
    inchesInput.value = result.inches;
    centimetresInput.value = result.centimetres;
    metresInput.value = result.metres;
  });

  metresInput.addEventListener('input', (e) => {
    const result = updateAllConversions(e.target.value, 'metres');
    inchesInput.value = result.inches;
    centimetresInput.value = result.centimetres;
    metresInput.value = result.metres;
  });
}

// Exports for tests and real-world use
module.exports = {
  roundToTwoDecimals,
  convertFromInches,
  convertFromCentimetres,
  convertFromMetres,
  updateAllConversions,
  initializeEventListeners,
};
