const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');
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


// describe('experience-router', function () {

//     const survey = {
//         survey_name: 'new survey'
//     }

    // describe('GET /api/surveys', function () {
    //     it('Should return 200', async function () {
    //         let res = await request(server).get("/api/surveys")
    //         expect(res.status).toBe(200);
    //     })
    // })

    // describe('Get /api/surveys', function () {
    //     it('Should be an object', async function () {
    //         let res = await request(server).post("/api/surveys").send(survey)
    //         expect(res.status).toBe(201);
    //     })
    // })

//     describe('/api/surveys', function () {
//         it('Should return 200', async function () {
//             let res = await request(server).post("/api/surveys").send(survey);
//             expect.objectContaining(survey)
//         })
//     })

// });