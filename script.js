const inchesInput = document.getElementById('inches');
const centimetresInput = document.getElementById('centimetres');
const metresInput = document.getElementById('metres');

// Function to round a number to two decimals
function roundToTwoDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// Converts a value in inches to centimetres and metres
function convertFromInches(value) {
  centimetresInput.value = roundToTwoDecimals(value * 2.54); // Inches to centimetres
  metresInput.value = roundToTwoDecimals(value * 0.0254);    // Inches to metres
}

// Converts a value in centimetres to inches and metres
function convertFromCentimetres(value) {
  inchesInput.value = roundToTwoDecimals(value / 2.54);      // Centimetres to inches
  metresInput.value = roundToTwoDecimals(value / 100);       // Centimetres to metres
}

// Converts a value in metres to inches and centimetres
function convertFromMetres(value) {
  inchesInput.value = roundToTwoDecimals(value * 39.3701);   // Metres to inches
  centimetresInput.value = roundToTwoDecimals(value * 100);  // Metres to centimetres
}

// Function to trigger the appropriate conversions
function updateAllConversions(value, unit) {
  const parsedValue = parseFloat(value); // Parse value as a floating point number
  if (isNaN(parsedValue)) {
    // Clear all fields if the value is invalid
    inchesInput.value = '';
    centimetresInput.value = '';
    metresInput.value = '';
    return;
  }
  
  // Determine the unit and convert accordingly
  if (unit === 'inches') {
    convertFromInches(parsedValue);
  } else if (unit === 'centimetres') {
    convertFromCentimetres(parsedValue);
  } else if (unit === 'metres') {
    convertFromMetres(parsedValue);
  }
}

// Event listeners to handle user input and trigger updates
inchesInput.addEventListener('input', (e) => {
  updateAllConversions(e.target.value, 'inches'); // Trigger conversion from inches
});

centimetresInput.addEventListener('input', (e) => {
  updateAllConversions(e.target.value, 'centimetres'); // Trigger conversion from centimetres
});

metresInput.addEventListener('input', (e) => {
  updateAllConversions(e.target.value, 'metres'); // Trigger conversion from metres
});
