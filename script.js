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

