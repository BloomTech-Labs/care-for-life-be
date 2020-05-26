const router = require('express').Router();

const Helpers = require('../data/db-helpers.js');


router.get('/', (req, res) => {
    Helpers.find('role')
        .then(roles => {
            res.status(200).json(roles);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findById(id, 'role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find role' })
        })
})

router.post('/', (req, res) => {
    const role = req.body;
    Helpers.add(role, 'role')
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add role' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Helpers.update(id, changes, 'role')
            .then(role => {
                res.status(201).json(role);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update role' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was update for the role' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.remove(id, 'role')
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