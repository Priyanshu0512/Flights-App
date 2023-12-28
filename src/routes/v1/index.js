const express = require('express');

const router=express.Router();

const {info_controller} = require('../../controllers');
const airplaneRoutes = require('./airplane_routes');
const cityRoutes = require('./city_routes')

router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);


router.get('/info',info_controller.info);

module.exports=router;
