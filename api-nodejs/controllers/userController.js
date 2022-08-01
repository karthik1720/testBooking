import User from "../models/User.js"



export const updateUser = async (req, res, next)=>{
    try {
        //here we are updating by using the ID. new:true will load the newer version...else it will give previous version after the update
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        nexr(error);
    }
}

export const deleteUser = async (req, res, next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.")
    } catch (error) {
        nexr(error);
    }
}

export const getUser = async (req, res, next)=>{
    
    try {
        const User = await User.findById(req.params.id)
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req, res, next)=>{
    
   // const failed = true;
    
    // if(failed) return next(createError(401,"Sorry not authenticated"));

    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}