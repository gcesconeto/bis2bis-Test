const request = require('supertest');
const app = require('../api/app');

describe('GET `/`', () => {
  it('Should receive status 200 and help html', async () => {
    const response = await request(app)
      .get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Please refer to the');
  });
});
