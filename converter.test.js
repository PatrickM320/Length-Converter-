// Unit Testing

// testing
document.body.innerHTML = `
    <input type="number" id="inches" />
    <input type="number" id="centimetres" />
    <input type="number" id="metres" />
`;

const { convertFromInches, convertFromCentimetres, convertFromMetres, clearForm } = require('./functions.js');

// Testing convertFromInches with positive numbers and zero
describe('Converting from Inches to Centimetres and Metres', () => {
    test('convertFromInches(100) should update the DOM with Centimetres = 254.00 and Metres = 1.00', () => {
        convertFromInches(100);
        expect(document.getElementById('centimetres').value).toBe('254.00');
        expect(document.getElementById('metres').value).toBe('1.00');
    });

    test('convertFromInches(0) should update the DOM with Centimetres = 0.00 and Metres = 0.00', () => {
        convertFromInches(0);
        expect(document.getElementById('centimetres').value).toBe('0.00');
        expect(document.getElementById('metres').value).toBe('0.00');
    });
});

// Testing convertFromCentimetres with positive numbers and zero
describe('Converting from Centimetres to Inches and Metres', () => {
    test('convertFromCentimetres(100) should update the DOM with Inches = 39.37 and Metres = 1.00', () => {
        convertFromCentimetres(100);
        expect(document.getElementById('inches').value).toBe('39.37');
        expect(document.getElementById('metres').value).toBe('1.00');
    });

    test('convertFromCentimetres(0) should update the DOM with Inches = 0.00 and Metres = 0.00', () => {
        convertFromCentimetres(0);
        expect(document.getElementById('inches').value).toBe('0.00');
        expect(document.getElementById('metres').value).toBe('0.00');
    });
});

// Testing convertFromMetres with positive numbers and zero
describe('Converting from Metres to Inches and Centimetres', () => {
    test('convertFromMetres(1) should update the DOM with Inches = 39.37 and Centimetres = 100.00', () => {
        convertFromMetres(1);
        expect(document.getElementById('inches').value).toBe('39.37');
        expect(document.getElementById('centimetres').value).toBe('100.00');
    });

    test('convertFromMetres(0) should update the DOM with Inches = 0.00 and Centimetres = 0.00', () => {
        convertFromMetres(0);
        expect(document.getElementById('inches').value).toBe('0.00');
        expect(document.getElementById('centimetres').value).toBe('0.00');
    });
});
