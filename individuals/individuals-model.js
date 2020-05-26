const db = require('../data/db-config.js');

module.exports = {
    find,
    findIndividualDetails
};

async function find() {
    return db('individual as i')
        .join('family as f', 'f.id', 'i.family_id')
        .select('i.id', 'i.first_name', 'i.last_name', 'i.gender', 'i.date_of_birth', 'i.hoh', 'i.relation_to_hoh', 'i.family_id', 'f.family_name as family_name')
}

async function findIndividualDetails(id) {
    const user = await findById(id)
    if (user == undefined) {
        return
    } else {
        return db('individual')
            .where('id', id)
            .first()
            .then(user => {
                return db('zone as z')
                    .where('z.id', user.zone_id)
                    .select('z.id', 'z.name')
                    .then(zone_info => {
                        return {
                            ...users,
                            zone_info
                        }

                    })
            })
    }
}