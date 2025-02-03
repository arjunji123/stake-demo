const Model = require('../models/settingModel');
const QueryModel = require('../models/queryModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');
const db = require('../config/mysql_database');
const Joi = require('joi');

const table_name = Model.table_name;
const module_title = Model.module_title;
const module_single_title = Model.module_single_title;
const module_add_text = Model.module_add_text;
const module_edit_text = Model.module_edit_text;
const module_slug = Model.module_slug;
const module_layout = Model.module_layout;

exports.editForm = catchAsyncErrors(async(req, res,next) => {
    
    const id = 1;
    const blog = await QueryModel.findById(table_name, id, next);
    
    if (!blog) {
        return; 
    }
    res.render(module_slug+'/edit',{ layout: module_layout,title : module_single_title+' '+module_edit_text, blog,module_slug})
});

exports.updateRecord = catchAsyncErrors(async(req, res, next) => {
  //console.log(req.body); return false;
    
   req.body.header_logo = req.body.old_header_logo;
   if (req.file) {
        req.body.header_logo = req.file.filename;
    }
    
   const updateData = {
        site_title: req.body.site_title,
        email: req.body.email,
        phone: req.body.phone,
        header_logo: req.body.header_logo,
        address: req.body.address,
        fb_url: req.body.fb_url,
        google_url: req.body.google_url,
        linkdin_url: req.body.linkdin_url,
        twitter_url: req.body.twitter_url,
        youtube_url: req.body.youtube_url,
        default_meta_title: req.body.default_meta_title,
        default_meta_keyword: req.body.default_meta_keyword,
        default_meta_description: req.body.default_meta_description
    }

    const blog = await QueryModel.findByIdAndUpdateData(table_name,req.params.id,updateData, next);
   
    
    req.flash('msg_response', { status: 200, message: 'Successfully updated '+module_single_title });
   
    res.redirect(`/${process.env.ADMIN_PREFIX}/${module_slug}`);
})



exports.deleteImage = catchAsyncErrors(async(req,res,next) => {
   const updateData = {
        image: ""
    }

    const blog = await QueryModel.findByIdAndUpdateData(table_name,req.params.id,updateData, next);
   
    
    req.flash('msg_response', { status: 200, message: 'Successfully updated '+module_single_title });
   
    res.redirect(`/${process.env.ADMIN_PREFIX}/${module_slug}/edit/${req.params.id}`);
     
 })

exports.apiGetSingleRecord = catchAsyncErrors(async(req, res,next) => {

    let settings = await QueryModel.findBySpecific(table_name,'id', 1, next);
    
    if (!settings) {
        return next(new ErrorHandler('Record not found', 500));
    }
    settings.header_logo = process.env.BACKEND_URL+'/uploads/'+module_slug+'/'+settings.header_logo;

    res.status(200).json({
        success: true,
        settings
    });
});
