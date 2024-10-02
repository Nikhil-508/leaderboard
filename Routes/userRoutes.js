const userRouter = require('express').Router()
const {addUser,updateUser, getLeaderBoard} = require('../Controllers/userController')



userRouter.post('/addUser',addUser)
userRouter.post('/updateUser/:id',updateUser)
userRouter.get('/leaderboard',getLeaderBoard)
userRouter.get('/showUserRank',)

module.exports = userRouter