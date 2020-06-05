const router = require('express').Router();
const axios = require('axios');

router.get('/login', (req, res) => {
    const token = req.headers.authorization;
    console.log('token', token)
    axios.post(`https://dev-815303.okta.com/oauth2/default/v1/introspect?client_id=0oadb0iolJz1QUG2c4x6&token=${token}&token_type_hint=id_token`)
        .then(response => {
            console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => res.status(500).json(err.message))
})

module.exports = router;