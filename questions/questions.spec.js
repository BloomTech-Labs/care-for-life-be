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


// describe('Question Endpoints', ()=> {



// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         let res = await request(server)
//         .get('/api/questions ')
//         expect(res.status).toBe(200);
//         expect(res.type).toMatch(/json/)
//     });
// });

//  describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         let res = await request(server)
//         .get('/api/questions/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     });
// })

//ask about post endpoint
//      descibe('Post', () => {
//     test('Return 200, type json, and body to be first_name', async() => {
//         let res = await request(server)
//         .post('/api/questions')
//         .send({
//             })
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body[0]).toBe('')
//     })
// });
// })