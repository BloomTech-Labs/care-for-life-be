const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByZone
};

async function find() {
    return db('family as f')
        .join('zone as z', 'z.id', 'f.zone_id')
        .select('f.id', 'f.family_name', 'f.zone_id', 'z.zone_letter as zone_name', 'z.community_id as community_id')
}

function findBy(filter) {
    return db('family').where(filter);
}

async function add(user) {
    const [id] = await db('family').insert(user, 'id');
    return findById(id);
}

function findByZone(zoneId) {
    return db('family').where('zone_id', zoneId);
}

function findById(id) {
    return db('family').where('id', id).first();
}

function update(id, changes) {
    return db('family')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('family').where('id', id).del()
}