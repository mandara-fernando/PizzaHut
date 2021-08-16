const  express=require("express");
var router = express.Router();
const userModel=require("../../../models/AuthenticationModel");

router.route('/:id').get(async (req, res) => {
    
    const _id =  req.params.id;

    await userModel.findById(_id, (err, UserManagement) => {
        return res.status(200).json({
            success:true,
            UserManagement
        });
    }).catch((err)=>{
        console.log(err);
    });
});
module.exports=router;