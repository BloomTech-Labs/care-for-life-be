const router = require('express').Router();

const Responses = require('./response-model.js');
const Helpers = require('../data/db-helpers.js');


router.get('/', (req, res) => {
    Responses.find()
        .then(responses => {
            res.status(200).json(responses);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        Helpers.findById(id, 'response')
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ message: 'could not find response' })
            })
    } else {
        res.status(404).json({ message: 'No such response' });
    }
})

router.get('/question/:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        Responses.findByQuestionId(id)
            .then(responses => {
                res.status(200).json(responses);
            })
            .catch(err => {
                res.status(500).json({ message: 'could not find responses' })
            })
    } else {
        res.status(404).json({ message: 'No such responses' });
    }
})

router.post('/', (req, res) => {
    const response = req.body;
    Helpers.add(response, 'response')
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'could not add response' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Helpers.update(id, changes, 'response')
            .then(response => {
                res.status(201).json(response);
            })
            .catch(err => {
                res.status(500).json({ message: 'Could not update response' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was update for the response' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.remove(id, 'response')
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Response successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find response' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete response' })
        })
})

module.exports = router;