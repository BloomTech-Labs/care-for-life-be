const request = require('supertest');
const db = require('../data/db-config');
const commun = require('./communities-router');
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


// describe('Communites Router', () => {

// describe('Get', ()=> {
//     test('Return 200 and type as json', async() => {
//         const res = await request(server)
//         .get('/api/communities')
//         .expect(res.status).toBe(200)
//         .expect(res.type).toBe(/json/)
//     });
// });


// describe('Get by :id', () => {
//     test('Return 200, type json, id being 1', async() => {
//         const res = await request(server)
//         .get('api/communites/1')
//         expect(res.status).toBe(200)
//         expect(res.type).toMatch(/json/)
//         expect(res.body.id).toBe(1)
//     })
// });

// descibe('Post', () => {
//     test('Return 200, type json, and body to be community', async() => {
//         const res = await request(server)
//         .post('/api/communites')
//         .send({
//             community: "community test"
//         })
//         .expect(res.status).toBe(200)
//        .expect(res.type).toBe(/json/)
//         .expect(res.body.community).toBe('community test')
//     })
// });
// });
