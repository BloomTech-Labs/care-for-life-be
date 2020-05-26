const router = require('express').Router();

const Helpers = require('../data/db-helpers.js');

router.get('/', (req, res) => {
    Helpers.find('worker')
        .then(worker => {
            res.status(200).json(worker);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/role/:role', (req, res) => {
    const role = req.params.role;
    Helpers.findBySomething(role,'role_name','worker')
        .then(worker => {
            res.status(200).json(worker);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find worker' })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findById(id,'worker')
        .then(worker => {
            res.status(200).json(worker);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find worker' })
        })
})

router.post('/', (req, res) => {
    const survey = req.body;
    Helpers.add(survey,'worker')
        .then(worker => {
            res.status(200).json(worker);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add worker' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Helpers.update(id, changes,'worker')
            .then(worker => {
                res.status(201).json(worker);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update worker' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was updated for the worker' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.remove(id,'worker')
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Worker successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find worker' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete worker' })
        })
})

module.exports = router;