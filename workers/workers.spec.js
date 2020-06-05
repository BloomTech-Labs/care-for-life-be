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


// describe('Workers Endpoints', ()=> {



// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         let res = await request(server)
//         .get('/api/workers')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         let res = await request(server)
//         .get('/api/workers/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// })

//      descibe('Post', () => {
//     test('Return 200, type json, and body to be first_name', async() => {
//         let res = await request(server)
//         .post('/api/workers')
//         .send({
//              first_name: "Test",
//              last_name: "Test",
//              username: "Test",
//              password: "Test",
//              role_name: "Test",
//              zone_id: 7,
//              community_id: 3,
//              created at: "2020-05-23T00:38:04.844Z"
//             })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0].first_name).toBe('Test')
//     })
// });
// })