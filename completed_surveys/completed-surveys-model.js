const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    update,
    remove
};

async function find() {
    return db('completed_survey')
}

function findById(id) {
    return db('completed_survey as cs')
        .where('cs.id', id)
        .join('family as f', 'f.id', 'cs.family_id')
        .join('worker as w', 'w.id', 'cs.supervisor_id')
        .join('individual as i', 'i.id', 'cs.individual_id')
        .join('survey as s', 's.id', 'cs.survey_id')
        .select("cs.id", "cs.survey_id", "s.survey_name", "cs.supervisor_id", 'w.first_name as supervisor_name', "cs.family_id", "f.family_name", "cs.individual_id", "i.first_name as individuals_first_name")
        .first();
}

async function add(survey) {
    const [id] = await db('completed_survey').insert(survey, 'id');
    return findById(id);
}

function update(id, changes) {
    return db('completed_survey')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('completed_survey').where('id', id).del()
}