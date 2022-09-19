const request = require('supertest');
const app = require('../../api/app');
const { mockPopulateDb, mockWipeCollection, closeDbConnection } = require('./dBTools');

describe('GET `/universities`', () => {
  beforeAll(() => {
    mockWipeCollection();
    mockPopulateDb();
  });

  afterAll(() => closeDbConnection());

  it('Should receive status 200 and list of first 20 universities', async () => {
    const response = await request(app)
      .get('/universities');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(20);
  });

  it('Should receive status 200 and university list from 41 to 42 when ?page=3', async () => {
    const { body: firstPage } = await request(app)
      .get('/universities');
    const response = await request(app)
      .get('/universities?page=3');
    expect(response.status).toBe(200);
    expect(response.body[0]).not.toEqual(firstPage[0]);
    expect(response.body.length).toBe(2);
  });

  it('Should receive status 200 and universities from chile when ?country=chile', async () => {
    const response = await request(app)
      .get('/universities?country=chile');
    expect(response.status).toBe(200);
    expect(response.body[0].country).toBe('Chile');
    expect(response.body.length).toBe(2);
  });

  it('Should receive status 404 when no universities from country exist', async () => {
    const response = await request(app)
      .get('/universities?country=brasil');
    expect(response.status).toBe(404);
  });

  it('Should receive status 404 when page is beyond limit', async () => {
    const response = await request(app)
      .get('/universities?page=100');
    expect(response.status).toBe(404);
  });

  it('Should receive status 422 when query string is invalid', async () => {
    const response = await request(app)
      .get('/universities?page=-2');
    expect(response.status).toBe(422);
  });
});
