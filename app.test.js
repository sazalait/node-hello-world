// app.test.js
const request = require('supertest');
const app = require('./app'); // Assuming you export the app in app.js

describe('GET /', () => {
  it('should respond with "Gitlab CI/CD Configuration"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Gitlab CI/CD Configuration');
  });
});

