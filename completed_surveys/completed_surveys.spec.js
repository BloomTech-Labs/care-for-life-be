const request = require('supertest');
const db = require('../data/db-config');
const cs = require('./completed-surveys-router');
const server = require('../api/server');

beforeEach((done) => {
    db.migrate.rollback().then(() => {
      db.migrate.latest().then(() => {
        return db.seed.run().then(() => {
          done();
        });
      });
    });
  });
  afterEach((done) => {
    db.migrate.rollback().then(() => {
      done();
    });
  });


// describe('Completed Survey Endpoints', ()=> {


// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         const res = await request(server)
//         .get('/api/completedSurveys')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         const res = await request(server)
//         .get('/api/completedSurveys/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// });

// descibe('Post', () => {
//     test('Return 200, type json, and body to be survey_id', async() => {
//         const res = await request(server)
//         .post('/api/completedSurveys')
//         .send({
//             survey_id: 2,
//             supervisor_id: 4,
//             family_id: 11,
//             individual_id: 61,
//             completed at: "2020-05-23T00:38:04.879Z"
//             })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0].survey_id).toBe(2)
//     })
// });
// })