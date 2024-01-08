const router = require('express').Router();

const sampleRoutes = require('./sample.routes');
const userRoutes = require('./user.routes');
const statRoutes = require('./stat.routes');
const playerSchemaRoutes = require('./playerSchema.routes');



router.use('/sample', sampleRoutes);
router.use('/user', userRoutes);
router.use('/stat', statRoutes);
router.use('/playerSchema', playerSchemaRoutes);


module.exports = router;
