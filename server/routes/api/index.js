const router = require('express').Router();

const sampleRoutes = require('./sample.routes');
const userRoutes = require('./user.routes');
const statRoutes = require('./stat.routes');
const playerSchemaRoutes = require('./playerSchema.routes');
const invasionHpRoutes = require('./invasionHp.routes');
const karachiHpRoutes = require('./karachiHp.routes');
const skidrowHpRoutes = require('./skidrowHp.routes');
const subBaseHpRoutes = require('./subBaseHp.routes');
const terminalHpRoutes = require('./terminalHp.routes');




router.use('/sample', sampleRoutes);
router.use('/user', userRoutes);
router.use('/stat', statRoutes);
router.use('/playerSchema', playerSchemaRoutes);
router.use('/invasionHp', invasionHpRoutes);
router.use('/karachiHp', karachiHpRoutes);
router.use('/skidrowHp', skidrowHpRoutes);
router.use('/subBaseHp', subBaseHpRoutes);
router.use('/terminalHp', terminalHpRoutes);




module.exports = router;
