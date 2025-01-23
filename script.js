function roundToTwoDecimals(value) {
  return value.toFixed(2); // Round to two decimal places
}

document.addEventListener('DOMContentLoaded', function () {
    const inchesInput = document.getElementById('inches');
    const centimetresInput = document.getElementById('centimetres');
    const metresInput = document.getElementById('metres');

    // Conversion functions
    function inchesToCm(inches) {
        return inches * 2.54;
    }

    function inchesToM(inches) {
        return inches * 0.0254;
    }

    function cmToInches(cm) {
        return cm / 2.54;
    }

    function cmToM(cm) {
        return cm / 100;
    }

    function mToInches(m) {
        return m / 0.0254;
    }

    function mToCm(m) {
        return m * 100;
    }

    // Handle the automatic conversion
    function convertLength(event) {
        const value = parseFloat(event.target.value);
        
        // If the value is empty (user deleted the input), just return and don't do anything
        if (isNaN(value) && event.target.value !== '') {
            return;
        }

        // Convert and update the other fields accordingly
        if (event.target === inchesInput) {
            if (!isNaN(value)) {
                centimetresInput.value = inchesToCm(value).toFixed(2);
                metresInput.value = inchesToM(value).toFixed(2);
            } else {
                centimetresInput.value = '';
                metresInput.value = '';
            }
        } else if (event.target === centimetresInput) {
            if (!isNaN(value)) {
                inchesInput.value = cmToInches(value).toFixed(2);
                metresInput.value = cmToM(value).toFixed(2);
            } else {
                inchesInput.value = '';
                metresInput.value = '';
            }
        } else if (event.target === metresInput) {
            if (!isNaN(value)) {
                inchesInput.value = mToInches(value).toFixed(2);
                centimetresInput.value = mToCm(value).toFixed(2);
            } else {
                inchesInput.value = '';
                centimetresInput.value = '';
            }
        }
    }

    // Add event listeners for input events
    inchesInput.addEventListener('input', convertLength);
    centimetresInput.addEventListener('input', convertLength);
    metresInput.addEventListener('input', convertLength);
});

// Export the functions so they can be used in the test file
module.exports = {
  roundToTwoDecimals,
  convertFromInches: function(value) {
    return {
      inches: roundToTwoDecimals(value),
      centimetres: roundToTwoDecimals(value * 2.54),
      metres: roundToTwoDecimals(value * 0.0254),
    };
  },
  convertFromCentimetres: function(value) {
    return {
      inches: roundToTwoDecimals(value / 2.54),
      centimetres: roundToTwoDecimals(value),
      metres: roundToTwoDecimals(value / 100),
    };
  },
  convertFromMetres: function(value) {
    return {
      inches: roundToTwoDecimals(value * 39.3701),
      centimetres: roundToTwoDecimals(value * 100),
      metres: roundToTwoDecimals(value),
    };
  },
  updateAllConversions: function(value, unit) { 
    const parsedValue = parseFloat(value); // Parse the value into a floating-point number
    if (isNaN(parsedValue)) {
      // Clear all fields if the value is invalid
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

    // Return the converted values
    return {
      inches,
      centimetres,
      metres
    };
  }
};
