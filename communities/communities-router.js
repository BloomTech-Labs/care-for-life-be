const router = require('express').Router();

const Comm = require('./communities-model.js');
const Helpers = require('../data/db-helpers.js');



router.get('/', (req, res) => {
    Helpers.find('community')
        .then(communities => {
            res.status(200).json(communities);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.findById(id,'community')
        .then(community => {
            res.status(200).json(community);
        })
        .catch(err => {
            res.status(500).json({ message: 'error finding community' })
        })
})

router.post('/', (req, res) => {
    const community = req.body;
    Helpers.add(community,'community')
        .then(community => {
            res.status(200).json(community);
        })
        .catch(err => {
            res.status(500).json({ message: 'error adding community' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Helpers.update(id, changes,'community')
            .then(community => {
                res.status(201).json(community);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update community' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was update for the community' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Helpers.remove(id,'community')
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Community successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find community' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete community' })
        })
})

module.exports = router;