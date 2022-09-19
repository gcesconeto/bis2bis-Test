const request = require('supertest');
const app = require('../../api/app');
const DATA = require('./testData');
const { mockPopulateDb, mockWipeCollection, closeDbConnection } = require('./dBTools');

describe('PUT `/universities/:id`', () => {
  beforeAll(() => {
    mockWipeCollection();
    mockPopulateDb();
  });

  afterAll(() => closeDbConnection());

  it('Should receive status 200 when update is successfull', async () => {
    const insertResponse = await request(app)
      .post('/universities')
      .send(DATA.newUniversity);
    const { _id } = insertResponse.body;
    const response = await request(app)
      .put(`/universities/${_id}`)
      .send(DATA.updateUniversity);
    expect(response.status).toBe(200);
  });

  it('Should receive status 404 when provided id is not in database', async () => {
    const response = await request(app)
      .put(`/universities/${DATA.nonExistantId}`)
      .send(DATA.updateUniversity);
    expect(response.status).toBe(404);
  });

  it('Should receive status 422 if format is invalid', async () => {
    const insertResponse = await request(app)
      .post('/universities')
      .send(DATA.newUniversity);
    const { _id } = insertResponse.body;
    const response = await request(app)
      .put(`/universities/${_id}`)
      .send(DATA.wrongUpdateUniversity);
    expect(response.status).toBe(422);
  });

  it('Should receive status 422 when id is malformed', async () => {
    const response = await request(app)
      .delete(`/universities/${DATA.malformedId}`);
    expect(response.status).toBe(422);
  });
});
