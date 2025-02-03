const Model = require("../models/serviceModel");
const QueryModel = require("../models/queryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const db = require("../config/mysql_database");
const Joi = require("joi");
const path = require("path");
const fs = require("fs");

const table_name = Model.table_name;
const module_title = Model.module_title;
const module_single_title = Model.module_single_title;
const module_add_text = Model.module_add_text;
const module_edit_text = Model.module_edit_text;
const module_slug = Model.module_slug;
const module_layout = Model.module_layout;

exports.addFrom = catchAsyncErrors(async (req, res, next) => {
  res.render(module_slug + "/add", {
    layout: module_layout,
    title: module_single_title + " " + module_add_text,
    module_slug,
  });
});

//create a new blog
exports.createRecord = catchAsyncErrors(async (req, res, next) => {
  try {
    await Model.insertSchema.validateAsync(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });
  } catch (error) {
    // Joi validation failed, send 400 Bad Request with error details
    return next(
      new ErrorHandler(
        error.details.map((d) => d.message),
        400
      )
    );
  }

  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

  const images = req.files ? req.files.map((file) => file.filename) : [];

  const headings = req.body.heading
    ? Array.isArray(req.body.heading)
      ? req.body.heading
      : [req.body.heading]
    : req.body.heading;
  const paragraphs = req.body.paragraph
    ? Array.isArray(req.body.paragraph)
      ? req.body.paragraph
      : [req.body.paragraph]
    : [];

  console.log(req.body, paragraphs);

  const insertData = {
    title: req.body.title,
    status: req.body.status,
    images: JSON.stringify(images),
    headings: JSON.stringify(headings),
    paragraphs: JSON.stringify(paragraphs),
    created_at: created_at,
    updated_at: created_at,
  };

  const blog = await QueryModel.saveData(table_name, insertData, next);

  req.flash("msg_response", {
    status: 200,
    message: "Successfully added " + module_single_title,
  });

  res.redirect(`/${process.env.ADMIN_PREFIX}/${module_slug}`);
});

exports.editForm = catchAsyncErrors(async (req, res, next) => {
  const blog = await QueryModel.findById(table_name, req.params.id, next);

  if (!blog) {
    return;
  }
  res.render(module_slug + "/edit", {
    layout: module_layout,
    title: module_single_title + " " + module_edit_text,
    blog,
    module_slug,
  });
});

exports.updateRecord = catchAsyncErrors(async (req, res, next) => {
  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

  // Handling new image uploads (if any)
  const newImages = req.files ? req.files.map((file) => file.filename) : [];

  // Handling old image data, ensuring it's in an array format
  const oldImages = Array.isArray(req.body.old_image)
    ? req.body.old_image
    : [req.body.old_image];

  // Combine old and new images
  const images = [...oldImages, ...newImages];

  // Handling headings (ensuring they are in array format)
  const headings = req.body.heading
    ? Array.isArray(req.body.heading)
      ? req.body.heading
      : [req.body.heading]
    : [];

  // Handling paragraphs (ensuring they are in array format)
  const paragraphs = req.body.paragraph
    ? Array.isArray(req.body.paragraph)
      ? req.body.paragraph
      : [req.body.paragraph]
    : [];

  // Prepare the data for updating the blog post
  const updateData = {
    title: req.body.title,
    images: JSON.stringify(images), // Store images as a JSON string
    headings: JSON.stringify(headings), // Store headings as a JSON string
    paragraphs: JSON.stringify(paragraphs), // Store paragraphs as a JSON string
    status: req.body.status,
    updated_at: created_at, // Update timestamp
  };

  // Perform the database update using the provided model
  const blog = await QueryModel.findByIdAndUpdateData(
    table_name,
    req.params.id,
    updateData,
    next
  );

  // Flash message to indicate success
  req.flash("msg_response", {
    status: 200,
    message: "Successfully updated " + module_single_title,
  });

  // Redirect to the blog list page
  res.redirect(`/${process.env.ADMIN_PREFIX}/${module_slug}`);
});

exports.deleteRecord = catchAsyncErrors(async (req, res, next) => {
  await QueryModel.findByIdAndDelete(table_name, req.params.id, next);

  req.flash("msg_response", {
    status: 200,
    message: "Successfully deleted " + module_single_title,
  });

  res.redirect(`/${process.env.ADMIN_PREFIX}/${module_slug}`);
});

exports.getAllRecords = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 1;
  const page = parseInt(req.query.page) || 1;
  const searchQuery = req.query.search || "";
  const filterQuery = req.query.filter || "";
  // Calculate offset for pagination
  const offset = (page - 1) * resultPerPage;

  try {
    // Count total blogs
    const totalBlogsResult = await db.query(
      "SELECT COUNT(*) as count FROM " + table_name
    );
    const totalBlogs = totalBlogsResult[0][0].count;

    // Fetch blogs with pagination and filtering
    // const blogs = await db.query('SELECT * FROM blogs  LIMIT ? OFFSET ?', [resultPerPage, offset]);
    const blogs = await db.query(
      "SELECT * FROM " + table_name + " order by id desc"
    );

    /*res.status(200).json({
            success: true,
            totalBlogs,
            resultPerPage,
            page,
            blogs
        });*/
    const message = req.flash("msg_response");

    res.render(module_slug + "/index", {
      layout: module_layout,
      title: module_title,
      blogs,
      message,
      module_slug,
    });
  } catch (error) {
    return next(new ErrorHandler("Database query failed", 500));
  }
});

exports.getSingleRecord = catchAsyncErrors(async (req, res, next) => {
  const blog = await QueryModel.findById(table_name, req.params.id, next);

  if (!blog) {
    return next(new Error("Blog not found"));
  }

  // अगर images, headings, paragraphs null हैं तो उन्हें खाली array बना दो
  blog.images = JSON.parse(blog.images);
  blog.headings = JSON.parse(blog.headings);
  blog.paragraphs = JSON.parse(blog.paragraphs);
  console.log(blog.images);

  res.render(module_slug + "/detail", {
    layout: module_layout,
    title: module_single_title,
    blog,
    module_slug,
  });
});

exports.deleteImage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { image } = req.query;
  const blog = await QueryModel.findById(table_name, id, next);

  if (!image) {
    const updateData = {
      images: JSON.stringify(
        blog.images.filter((imageFile) => imageFile !== image)
      ),
    };

    const newService = await QueryModel.findByIdAndUpdateData(
      table_name,
      id,
      updateData,
      next
    );
    res.redirect(
      `/${process.env.ADMIN_PREFIX}/${module_slug}/edit/${req.params.id}`
    );
  }

  if (!blog) {
    return next(new ErrorHandler("Service not found", 404));
  }

  const updateData = {
    images: JSON.stringify(
      blog.images.filter((imageFile) => imageFile !== image)
    ),
  };

  const newService = await QueryModel.findByIdAndUpdateData(
    table_name,
    id,
    updateData,
    next
  );

  const imagePath = path.join(__dirname, "..", "uploads", "services", image);

  if (fs.existsSync(imagePath)) {
    fs.unlink(imagePath, (err) => {
      if (err) {
        return next(new ErrorHandler("Error deleting the image file", 500));
      }
    });
  }

  req.flash("msg_response", {
    status: 200,
    message: "Successfully updated " + module_single_title,
  });

  res.redirect(
    `/${process.env.ADMIN_PREFIX}/${module_slug}/edit/${req.params.id}`
  );
});

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+$/g, ""); // Remove trailing hyphens
}
exports.apiGetAllRecords = catchAsyncErrors(async (req, res, next) => {
  try {
    const [service_records] = await db.query(
      "SELECT id, title, headings, paragraphs, images FROM " +
        table_name +
        " ORDER BY id DESC"
    );

    if (!service_records || service_records.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No records found" });
    }

    const services = service_records.map((row) => ({
      id: row.id,
      title: row.title,
      headings: row.headings ? JSON.parse(row.headings) : [], // Array format
      paragraphs: row.paragraphs ? JSON.parse(row.paragraphs) : [], // Array format
      images: row.images
        ? JSON.parse(row.images).map(
            (image) =>
              `${process.env.BACKEND_URL}/uploads/${module_slug}/${image}`
          )
        : [],
    }));

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    console.error("Database query error:", error);
    return next(new ErrorHandler("Database query failed", 500));
  }
});

exports.apiGetSingleRecord = catchAsyncErrors(async (req, res, next) => {
  let blog = await QueryModel.findBySpecific(
    table_name,
    "slug",
    req.params.slug,
    next
  );

  if (!blog) {
    return next(new ErrorHandler("Record not found", 500));
  }
  blog.image =
    process.env.BACKEND_URL + "/uploads/" + module_slug + "/" + blog.image;

  res.status(200).json({
    success: true,
    blog,
  });
});
