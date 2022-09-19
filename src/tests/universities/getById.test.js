const request = require('supertest');
const app = require('../../api/app');
const DATA = require('./testData');
const { mockPopulateDb, mockWipeCollection, closeDbConnection } = require('./dBTools');

describe('GET `/universities/:id`', () => {
  beforeAll(() => {
    mockWipeCollection();
    mockPopulateDb();
  });

  afterAll(() => closeDbConnection());

  it('Should receive status 200 and detailed data on university', async () => {
    const insertResponse = await request(app)
      .post('/universities')
      .send(DATA.newUniversity);
    const { _id } = insertResponse.body;
    const response = await request(app)
      .get(`/universities/${_id}`);
    const { body } = response;
    expect(response.status).toBe(200);
    expect(body._id).toBeDefined();
    expect(body.domains).toBeDefined();
    expect(body.alpha_two_code).toBeDefined();
    expect(body.country).toBeDefined();
    expect(body.web_pages).toBeDefined();
    expect(body.name).toBeDefined();
    expect(body['state-province']).toBeDefined();
  });

  it('Should receive status 404 when provided id is not in database', async () => {
    const response = await request(app)
      .get(`/universities/${DATA.nonExistantId}`);
    expect(response.status).toBe(404);
  });

  it('Should receive status 422 when id is malformed', async () => {
    const response = await request(app)
      .get(`/universities/${DATA.malformedId}`);
    expect(response.status).toBe(422);
  });
});
