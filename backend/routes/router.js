const express = require("express");
const router = new express.Router();
const EmployeeModel = require("../model/employee");
const bcrypt = require("bcryptjs")

//for user registeration
router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;
  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const preuser = await EmployeeModel.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "this Email is already register" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "password and confirm password not match" });
    } else {
      const finalUser = new EmployeeModel({
        fname,
        email,
        password,
        cpassword,
      });

      //here password hasing
      const storeData = await finalUser.save();

      res.status(201).json({status: 201,storeData})
    }
  } catch (error) {
    res.status(422).json(error);

    console.log("catch block error")
  }
});

//for user login
router.post("/login", async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(422).json({ error: "fill all the details" });
    }

    try {

        const validUser = await EmployeeModel.findOne({email: email})

        if(validUser){
            const isMatch = await bcrypt.compare(password, validUser.password)
            if(!isMatch){
                res.status(422).json({ error: "invalid details" });
            }else{
                // token generate
                const token = await validUser.generateAuthtoken()
                
                res.cookie("userCookie", token, {expires:new Date(Date.now()+9000000), httpOnly: true})

                const result = {validUser,token}
                res.status(201).json({status:201, result})
            }
        }
        
    } catch (error) {
        
    }
})

module.exports = router;
