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

const highriseCNTRoutes = require('./highriseCNT.routes');
const invasionCNTRoutes = require('./invasionCNT.routes');
const karachiCNTRoutes = require('./karachiCNT.routes');

const highriseSNDRoutes = require('./highriseSND.routes');
const invasionSNDRoutes = require('./invasionSND.routes');
const karachiSNDRoutes = require('./karachiSND.routes');
const skidrowSNDRoutes = require('./skidrowSND.routes');
const terminalSNDRoutes = require('./terminalSND.routes');




router.use('/sample', sampleRoutes);
router.use('/user', userRoutes);
router.use('/stat', statRoutes);
router.use('/playerSchema', playerSchemaRoutes);

router.use('/invasionHp', invasionHpRoutes);
router.use('/karachiHp', karachiHpRoutes);
router.use('/skidrowHp', skidrowHpRoutes);
router.use('/subBaseHp', subBaseHpRoutes);
router.use('/terminalHp', terminalHpRoutes);

router.use('/highriseCNT', highriseCNTRoutes);
router.use('/invasionCNT', invasionCNTRoutes);
router.use('/karachiCNT', karachiCNTRoutes);

router.use('/highriseSND', highriseSNDRoutes);
router.use('/invasionSND', invasionSNDRoutes);
router.use('/karachiSND', karachiSNDRoutes);
router.use('/skidrowSND', skidrowSNDRoutes);
router.use('/terminalSND', terminalSNDRoutes);




module.exports = router;
