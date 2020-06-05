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


// describe('Survey Roles Endpoints', ()=> {



// describe('Get', ()=> {
//     test('Return 200', async() => {
//         let res = await request(server)
//         .get('/api/surveyRoles')
//         expect(res.status).toBe(200);
//     });
// });

//  describe('Get survey by :id', () => {
//     test('Return 200 and id being 1', async() => {
//         let res = await request(server)
//         .get('/api/surveyRoles/surveyId/1')
//         expect(res.status).toBe(200)
//         expect(res.body.id).toBe(1)
//     });
// });

//  describe('Get role by :id', () => {
//     test('Return 200 and id being 1', async() => {
//         let res = await request(server)
//         .get('/api/surveyRoles/roleId/1')
//         expect(res.status).toBe(200)
//         expect(res.body.id).toBe(1)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200 and id being 1', async() => {
//         let res = await request(server)
//         .get('/api/surveyRoles/1')
//         expect(res.status).toBe(200)
//         expect(res.body.id).toBe(1)
//     });
// });

//      descibe('Post', () => {
//     test('Return 200 and body to be role_id', async() => {
//         let res = await request(server)
//         .post('/api/surveyRoles')
//         .send({
//         survey_id: 1,
//            role_id: 1
//             })
//         expect(res.status).toBe(200)
//         expect(res.body[0].role_id).toBe(1)
//     })
// });
// })