const express=require('express');
const router=express.Router();
const GetAlldata=require('../../controller/getController');
const Singledata=require('../../controller/getIdController');

// get all data
router.get('/charities',GetAlldata);

// get all data berdasarkan id
router.get('/charities/:id',Singledata)

module.exports=router;

