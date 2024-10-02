const userRouter = require('express').Router()
const {addUser,updateUser, getLeaderBoard, showUserRank} = require('../Controllers/userController')



//user Routes

userRouter.post('/addUser',addUser)
userRouter.post('/updateUser/:id',updateUser)
userRouter.get('/leaderboard',getLeaderBoard)
userRouter.get('/showUserRank/:id',showUserRank)

module.exports = userRouter