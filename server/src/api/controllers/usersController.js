const User = require("../models/user");

module.exports = {
  async register (req,res){
    const {name, lastName, password, email} = req.body;
    
    const emailCheck = await User.findOne({email});
    if(emailCheck) return res.json({message: "Ten email jest używany", status: false})
    
    const user = await User({name, lastName, password, email});
    user.save().then(()=>{
      res.json({message: "Użytkownik został utworzony", status: true})
    });
  },

  async login(req,res){
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    user.save().then(()=>{
      res.json({message: "Pomyślnie zalogowano", status: true})
    }).catch((err)=>{
      res.json({message: err.message})
    });
  }
}