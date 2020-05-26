const router = require('express').Router();

const Helpers = require('../data/db-helpers.js');

router.get('/', (req, res) => {
    Helpers.find('survey_role')
        .then(roles => {
            res.status(200).json(roles);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findById(id, 'survey_role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.get('/surveyId/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findBySomething(id, 'survey_id', 'survey_role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.get('/roleId/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findBySomething(id, 'role_id', 'survey_role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.post('/', (req, res) => {
    const role = req.body;
    Helpers.add(role, 'survey_role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add survey role' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Helpers.update(id, changes, 'survey_role')
            .then(role => {
                res.status(201).json(role);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update survey role' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was update for the survey role' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.remove(id, 'survey_role')
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'User successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find role' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete role' })
        })
})

module.exports = router;