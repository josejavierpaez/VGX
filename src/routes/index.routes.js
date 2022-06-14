const { Router } = require('express');
const fiboRouter = require('./fibonacci');
const router = Router();
router.use('/fibonace', fiboRouter);


module.exports = router;
