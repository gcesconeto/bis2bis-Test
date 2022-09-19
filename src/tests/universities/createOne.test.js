const request = require('supertest');
const app = require('../../api/app');
const DATA = require('./testData');
const { mockPopulateDb, mockWipeCollection, closeDbConnection } = require('./dBTools');

describe('POST `/universities`', () => {
  beforeAll(() => {
    mockWipeCollection();
    mockPopulateDb();
  });

  afterAll(() => closeDbConnection());

  it('Should receive status 201 and inserted university with id', async () => {
    const response = await request(app)
      .post('/universities')
      .send(DATA.newUniversity);
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  });

  it('Should receive status 422 if format is invalid', async () => {
    const response = await request(app)
      .post('/universities')
      .send(DATA.wrongFormatUniversity);
    expect(response.status).toBe(422);
  });

  it('Should receive status 409 if university already exists', async () => {
    const response = await request(app)
      .post('/universities')
      .send(DATA.existingUniversity);
    expect(response.status).toBe(409);
  });
});
