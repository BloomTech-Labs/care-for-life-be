const db = require('../data/db-config.js');

module.exports = {
    find
};

async function find() {
    return db('zone as z')
        .join('community as c', 'c.id', 'z.community_id')
        .select('z.id', 'z.zone_letter', 'z.community_id', 'c.community as community_name')
}
