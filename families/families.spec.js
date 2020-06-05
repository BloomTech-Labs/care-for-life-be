const request = require('supertest');
const db = require('../data/db-config');
const fam = require('./families-router');
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


// describe('Family Endpoints', ()=> {


// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         const res = await request(server)
//         .get('/api/families')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         const res = await request(server)
//         .get('/api/families/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// });

//  describe('Get zone by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         const res = await request(server)
//         .get('/api/families/zone/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// });

//    descibe('Post ', () => {
//     test('Return 200, type json, and body to be family_name', async() => {
//         const res = await request(server)
//         .post('/api/families')
//         .send({
//             family_name: "Test",
//             zone_id: 1,
//             zone_name: "A",
//             community_id: 1
//             })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0].family_name).toBe('Test')
//     })
// });
// })