const puppeteer = require('puppeteer');

describe('Input Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Should allow user to input and convert lengths', async () => {
        await page.goto('https://patrickm320.github.io/Length-Converter-/');

        // Simulate entering a value into the "Inches" input field
        await page.type('#inches', '10'); // Input 10 inches
        await page.waitForTimeout(500); // Wait for the conversion to happen

        // Check if the "Centimetres" field shows the correct converted value
        const centimetresValue = await page.$eval('#centimetres', el => el.value);
        expect(parseFloat(centimetresValue)).toBeCloseTo(25.4, 1); // 10 inches should be 25.4 cm

        // Simulate entering a value into the "Centimetres" input field
        await page.type('#centimetres', '100'); // Input 100 cm
        await page.waitForTimeout(500);

        // Check if the "Metres" field shows the correct converted value
        const metresValue = await page.$eval('#metres', el => el.value);
        expect(parseFloat(metresValue)).toBeCloseTo(1, 1); // 100 cm should be 1 metre
    });
});
