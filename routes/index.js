const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendStatus(400)
})
//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', actions.dashboard)

//@desc Historico
//@route GET /history
router.get('/history', actions.history)

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc Edit Profile
//@route POST /editprofile
router.post('/editprofile', actions.editprofile)

//@desc Config Chair
//@route POST /configs
router.post('/configs', actions.configchair)

//@desc Edit Password
//@route POST /updatepass
router.post('/updatepass', actions.updatepass)

//@desc Request Password
//@route POST /requestpass
router.post('/requestpass', actions.passrequest)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)

module.exports = router