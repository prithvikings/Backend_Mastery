const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Owners');
    }
);

module.exports = router;