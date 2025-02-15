const { 
  roundToTwoDecimals, 
  convertFromInches, 
  convertFromCentimetres, 
  convertFromMetres, 
  updateAllConversions 
} = require('../script');

describe('Input Test', () => {
  beforeAll(() => {
    // Create testing elements of wep page
    global.document = {
      getElementById: jest.fn((id) => ({
        value: '' // set the value property
      }))
    };
    
    // create getElementById for testing 
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      return {
        value: '' // return the value
      };
    });
  });

  test('roundToTwoDecimals should round to two decimal places', () => {
    expect(roundToTwoDecimals(2.345)).toBe('2.35');
    expect(roundToTwoDecimals(1.1)).toBe('1.10');
  });

  test('convertFromInches should convert inches to centimeters and meters', () => {
    const result = convertFromInches(10);
    expect(result.centimetres).toBe('25.40');
    expect(result.metres).toBe('0.25');
  });

  test('convertFromCentimetres should convert centimeters to inches and meters', () => {
    const result = convertFromCentimetres(25.4);
    expect(result.inches).toBe('10.00');
    expect(result.metres).toBe('0.25');
  });

  test('convertFromMetres should convert meters to inches and centimeters', () => {
    const result = convertFromMetres(1);
    expect(result.inches).toBe('39.37');
    expect(result.centimetres).toBe('100.00');
  });

  test('updateAllConversions should return correct conversions for valid input', () => {
    const result = updateAllConversions('10', 'inches');
    expect(result.inches).toBe('10.00');
    expect(result.centimetres).toBe('25.40');
    expect(result.metres).toBe('0.25');
  });

  test('updateAllConversions should return empty values for invalid input', () => {
    const result = updateAllConversions('invalid', 'inches');
    expect(result.inches).toBe('');
    expect(result.centimetres).toBe('');
    expect(result.metres).toBe('');
  });
});
