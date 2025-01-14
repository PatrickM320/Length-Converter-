const inchesInput = document.getElementById('inches');
const centimetresInput = document.getElementById('centimetres');
const metresInput = document.getElementById('metres');

function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}

function convertFromInches(value) {
  centimetresInput.value = roundToTwoDecimals(value * 2.54);
  metresInput.value = roundToTwoDecimals(value * 0.0254);
}

function convertFromCentimetres(value) {
  inchesInput.value = roundToTwoDecimals(value / 2.54);
  metresInput.value = roundToTwoDecimals(value / 100);
}

function convertFromMetres(value) {
  inchesInput.value = roundToTwoDecimals(value * 39.3701);
  centimetresInput.value = roundToTwoDecimals(value * 100);
}

// Function to trigger all conversions automatically
function updateAllConversions(value, unit) {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    inchesInput.value = '';
    centimetresInput.value = '';
    metresInput.value = '';
    return;
  }
  
  if (unit === 'inches') {
    convertFromInches(parsedValue);
  } else if (unit === 'centimetres') {
    convertFromCentimetres(parsedValue);
  } else if (unit === 'metres') {
    convertFromMetres(parsedValue);
  }
}

// Add event listeners for real-time conversion
inchesInput.addEventListener('input', (e) => {
  updateAllConversions(e.target.value, 'inches');
});

centimetresInput.addEventListener('input', (e) => {
 
  updateAllConversions(e.target.value, 'centimetres');
});

metresInput.addEventListener('input', (e) => {
  updateAllConversions(e.target.value, 'metres');
});
