const express = require('express')
const router = express.Router()
const calcs = require('../calculator/calc')

router.get('/add', (req, res) => {
    const v1 = parseInt(req.query.var1);
    const v2 = parseInt(req.query.var2);

   res.render('../static/result.pug', { result: calcs.addNums(v1, v2) });
})

router.get('/sub', (req, res) => {
    const v1 = parseInt(req.query.var1);
    const v2 = parseInt(req.query.var2);

   res.render('../static/result.pug', { result: calcs.subNums(v1, v2) });
})

router.get('/mult', (req, res) => {
    const v1 = parseInt(req.query.var1);
    const v2 = parseInt(req.query.var2);

   res.render('../static/result.pug', { result: calcs.multNums(v1, v2) });
})

router.get('/div', (req, res) => {
    const v1 = parseInt(req.query.var1);
    const v2 = parseInt(req.query.var2);

   res.render('../static/result.pug', { result: calcs.divNums(v1, v2) });
})

module.exports = router;