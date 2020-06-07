const db = require('../data/db-config.js');

module.exports = {
    login
};

async function login(email) {
    return await db('worker').where({ email })
}