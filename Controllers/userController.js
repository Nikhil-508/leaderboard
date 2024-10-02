const userModel = require('../Model/userSchema')



// add User functionality

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


// update the user details -- name and score 

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


//gettign the leaderboard datas in the descending order of score

const getLeaderBoard = async(req,res) => {
    try {
        //getting the data of users include the name and score only
        const userData = await userModel.find().sort({score:-1}).select('name score -_id');
        res.json(userData)
    } catch (error) {
        res.status(400)
        res.json({erroe:error.message})
        console.log(error);
    }
}


//showing the user rank according to their Id

const showUserRank = async(req,res) => {
    try {
        const userId = req.params.id
        const users = await userModel.find().sort({score:-1})
        const userRank = users.findIndex(user => user._id.toString() ===userId) + 1
        const user = await userModel.findById(userId)
        if(user && userRank){
            //sending all details of user also showing the rank
            return res.json({
                name : user.name,
                score : user.score,
                rank : userRank
            })
        }else{
            res.status(404).json({message:"user not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log(error);
    }
}




module.exports = {
    addUser,
    updateUser,
    getLeaderBoard,
    showUserRank
}