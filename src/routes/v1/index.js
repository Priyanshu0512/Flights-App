const express = require('express');

const router=express.Router();

const {info_controller} = require('../../controllers');
const airplaneRoutes = require('./airplane_routes');

router.use('/airplanes',airplaneRoutes);


router.get('/info',info_controller.info);

module.exports=router;
