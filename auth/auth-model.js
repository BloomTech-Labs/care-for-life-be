const db = require('../data/db-config.js');

module.exports = {
    login
};

async function login(email) {
    // query worker table
    return await db('worker').where({ email })
    // if email address exists in the table
    // return user info & welcome message
    // if email does not exist
    // create new account 
    // send registration message
}