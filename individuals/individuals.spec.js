const request = require('supertest');
const db = require('../data/db-config');
const ind = require('./individuals-router');
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


// describe('Individual Endpoints', ()=> {



// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         let res = await request(server)
//         .get('/api/individuals')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         let res = await request(server)
//         .get('/api/individuals/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// })

//      descibe('Post', () => {
//     test('Return 200, type json, and body to be first_name', async() => {
//         let res = await request(server)
//         .post('/api/individuals')
//         .send({
//             first_name: "Test",
//             last_name: "Test",
//             gender: "other",
//             date_of_birth: "2019-05-30T00:00:00.000Z",
//             hoh: true,
//             relation_to_hoh: "son",
//             family_id: 7,
//             family_name: "Brooks"
//             })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0].first_name).toBe('Test')
//     })
// });
// })