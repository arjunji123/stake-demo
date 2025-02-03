const express = require('express');
const { checkAdminLoginOrDashboard, showLogin, dashboard, registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetail, updatePassword, updateProfile, allUsers } = require('../contollers/userController');
const { registerUserApi, loginUserApi, logoutApi, forgotPasswordApi, resetPasswordApi, getUserDetailApi, updatePasswordApi, updateProfileApi } = require('../contollers/userApiController');
const { isAuthenticatedUser, authorizeRoles, isApiAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(isAuthenticatedUser, checkAdminLoginOrDashboard)
router.route('/dashboard').get(isAuthenticatedUser, dashboard)

router.route('/register').post(registerUser)

router.route('/login').get(showLogin)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)

router.route('/password/reset/:token').put(resetPassword)

router.route('/logout').get(isAuthenticatedUser, logout)

router.route('/me').get(isAuthenticatedUser, getUserDetail)

router.route('/password/update').post(isAuthenticatedUser, updatePassword)

router.route('/me/update').post(isAuthenticatedUser, updateProfile)

router.route('/users').get(isAuthenticatedUser, allUsers)


/*******REST API*******/

router.route('/api-register').post(registerUserApi)

router.route('/api-login').post(loginUserApi)

router.route('/api-password/forgot').post(forgotPasswordApi)

router.route('/api-password/reset/:token').put(resetPasswordApi)

router.route('/api-logout').get(logoutApi)

router.route('/api-me').get(isApiAuthenticatedUser, getUserDetailApi)

router.route('/api-password/update').post(isApiAuthenticatedUser, updatePasswordApi)

router.route('/api-me/update').put(isApiAuthenticatedUser, updateProfileApi)


module.exports = router;