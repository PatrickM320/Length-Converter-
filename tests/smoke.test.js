// Smoke test
const https = require('https');

describe('Smoke Test for Length Converter', () => {
    test('Should load homepage successfully', (done) => {
        // GET request to site
        https.get('https://github.com/PatrickM320/Length-Converter-', (response) => {
            // Checking if HTTP code is 200- to see if it has worked
            expect(response.statusCode).toBe(200);
            done();
        }).on('error', (e) => {
            done(e);
        });
    });
});
