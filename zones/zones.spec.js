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


// describe('Zones Endpoints', ()=> {



    // describe('Get', ()=> {
    //     test('Return 200 and type as json', async() => {
    //         let res = await request(server)
    //         .get('/api/zones')
    //         expect(res.status).toBe(200);
    //         expect(res.type).toMatch(/json/)
    //     });
    // });
    
    //  describe('Get by :id', () => {
    //     test('Return 200, type json, id being 1', async() => {
    //         let res = await request(server)
    //         .get('/api/zones/1')
    //         expect(res.status).toBe(200)
    //         expect(res.type).toMatch(/json/)
    //         expect(res.body.id).toBe(1)
    //     });
    // })

    //  describe('Get community by :id', () => {
    //     test('Return 200, type json, comm id being 1', async() => {
    //         let res = await request(server)
    //         .get('/api/zones/comm/1')
    //         expect(res.status).toBe(200)
    //         expect(res.type).toMatch(/json/)
    //         expect(res.body.id).toBe(1)
    //     });
    // })
    
    
    //      descibe('Post', () => {
    //     test('Return 200, type json, and body to be zone_letter', async() => {
    //         let res = await request(server)
    //         .post('/api/zones')
    //         .send({
    //              zone_letter: "B",
    //                 community_id: 1,
    //                 community_name: "community 1"
    //             })
    //         expect(res.status).toBe(200)
    //         expect(res.type).toMatch(/json/)
    //         expect(res.body[0].zone_letter).toBe('B')
    //     })
    // });
    // })