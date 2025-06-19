const request = require('supertest'); // Lib pour simuler des requêtes HTTP
const app = require('../app'); // Ton app Express
const { version } = require('../package.json');


// Tests pour la route GET /
describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

// Tests pour la route GET /status
describe('Test the /status path', () => {
    test('It should respond with JSON containing API status', async () => {
        const response = await request(app).get('/status');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'API is running' });
    });
});

// Tests pour la route GET /version
describe('Test the /version path', () => {
    test('It should respond with the correct version from package.json', async () => {
        const response = await request(app).get('/version');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ version });
    });
});
