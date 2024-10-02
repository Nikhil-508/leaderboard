const userModel = require('../Model/userSchema')


const addUser = async(req,res) => {
    try {
        const {name,score} = req.body
        const NewUser = new userModel({name,score})
        await NewUser.save();
        res.status(201).json(NewUser);
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const userId = req.params.id
        const {name,score} = req.body
        const user = await userModel.findByIdAndUpdate(userId,
            {name,score},
            {new : true}
        )
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(400)
        res.json({error:error.message})
        console.log(error);
    }
}

const getLeaderBoard = async(req,res) => {
    try {
        const userData = await userModel.find().sort({score:1})
        res.json(userData.name)
    } catch (error) {
        res.status(400)
        res.json({erroe:error.message})
        console.log(error);
        
    }
}

const showUserRank = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    addUser,
    updateUser,
    getLeaderBoard,
    showUserRank
}