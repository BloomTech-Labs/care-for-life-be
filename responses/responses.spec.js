const request = require('supertest');
const db = require('../data/db-config');
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


// describe('Responses Endpoints', ()=> {



// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         let res = await request(server)
//         .get('/api/responses')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         let res = await request(server)
//         .get('/api/responses/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// })

//      descibe('Post', () => {
//     test('Return 200, type json, and body to be first_name', async() => {
//         let res = await request(server)
//         .post('/api/responses')
//         .send({
//              question: "Use the open-source SMS monitor, then you can bypass the 1080p pixel!?",
//              question_id: 39,
//              response: "The FTP bus is down, connect the mobile protocol so we can back up the HDD alarm!",
//              completed_survey_id: 125,
//              family_id: 1,
//              individual_id: 21,
//               first_name: "Test",
//              last_name: "Test",
//              family_name: "Test"
// })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0].first_name).toBe('Test')
//     })
// });
// })