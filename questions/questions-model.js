const db = require('../data/db-config.js');

module.exports = {
    find,
    findByQuestionId,

};

async function find() {
    return db('question as q')
        .join('survey as s', 's.id', 'q.survey_id')
        .join('question_type as qt', 'qt.id', 'q.question_type')
        .select("q.id", "q.question", 'q.question_type', 'qt.type')
    // const id = db('users').select('id').orderBy('id')
    // const arrId = id.map(id => { return id.id });
    // return await arrId.map(id => findUserDetails(id))
}


function findByQuestionId(id) {
    return db('question as q')
        .where('q.id', id)
        .join('survey as s', 's.id', 'q.survey_id')
        .select("q.id", "q.question", 's.survey_name')
        .first()
}

