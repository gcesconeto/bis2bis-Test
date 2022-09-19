const request = require('supertest');
const app = require('../../api/app');
const DATA = require('./testData');
const { mockPopulateDb, mockWipeCollection, closeDbConnection } = require('./dBTools');

describe('DELETE `/universities/:id`', () => {
  beforeAll(() => {
    mockWipeCollection();
    mockPopulateDb();
  });

  afterAll(() => closeDbConnection());

  it('Should receive status 204 when deletion is successfull', async () => {
    const insertResponse = await request(app)
      .post('/universities')
      .send(DATA.newUniversity);
    const { _id } = insertResponse.body;
    const response = await request(app)
      .delete(`/universities/${_id}`);
    expect(response.status).toBe(204);
  });

  it('Should receive status 404 when provided id is not in database', async () => {
    const response = await request(app)
      .delete(`/universities/${DATA.nonExistantId}`);
    expect(response.status).toBe(404);
  });

  it('Should receive status 422 when id is malformed', async () => {
    const response = await request(app)
      .delete(`/universities/${DATA.malformedId}`);
    expect(response.status).toBe(422);
  });
});
