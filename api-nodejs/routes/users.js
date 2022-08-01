import express from "express";

const router = express.Router();
import {updateUser, deleteUser, getUser, getUsers} from "../controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("You are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("you are logged in and can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, you are logged in and can delete all account")
// })
//UPDATE 
router.put("/:id",verifyUser, updateUser)
//DELETE 
router.delete("/:id",verifyUser, deleteUser)
//GET
router.get("/:id",verifyUser, getUser)
//GET ALL 
router.get("/",verifyAdmin, getUsers)

export default router;