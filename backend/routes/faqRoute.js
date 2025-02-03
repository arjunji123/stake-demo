const express = require('express'); 
const multer = require("multer");
const {addFrom,createRecord,editForm,updateRecord,deleteRecord,getAllRecords,apiGetAllRecords} = require('../contollers/faqController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
const Model = require('../models/faqModel');
const module_slug = Model.module_slug;
const router = express.Router();


router.route('/'+module_slug+'/add').get(isAuthenticatedUser,authorizeRoles('admin'),addFrom)
router.route('/'+module_slug+'/add').post(isAuthenticatedUser,authorizeRoles('admin'),createRecord)
router.route('/'+module_slug+'/edit/:id').get(isAuthenticatedUser,authorizeRoles('admin'),editForm)
router.route('/'+module_slug+'/update/:id').post(isAuthenticatedUser,authorizeRoles('admin'),updateRecord)
router.route('/'+module_slug+'/delete/:id').get(isAuthenticatedUser,authorizeRoles('admin'),deleteRecord)
router.route('/'+module_slug+'').get(isAuthenticatedUser,authorizeRoles('admin'),getAllRecords) 

/** REST API**/
router.route('/api-'+module_slug+'').get(apiGetAllRecords)

module.exports = router