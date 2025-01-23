// Smoke test
const https = require('https');

describe('Smoke Test for Length Converter', () => {
    test('Should load homepage successfully', (done) => {
        // GET request to site
        https.get('https://github.com/PatrickM320/Length-Converter-', (response) => {
            // Checking if HTTP code is 200 (this means request has succeeded)
            expect(response.statusCode).toBe(200);
            done();
            //e is a callback function to provide error message if failure occurs
        }).on('error', (e) => {
            done(e);
        });
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 584bab71d4fbe9d4d0de4f2a64db0e8aafcfaf2f
