const token = require('../../jwt/index.js');
const User = require('../../db/schema/user.js');
const userControler = {}

userControler.register = async (req, res) => {
    try {
    const { name , email, password }  = req.body;
        console.log(validateEmail(email))
        console.log(validatePassword(password))
        if(validateEmail(email) && validatePassword(password)){
        const user = new User({
                        name, email, password
                    })

        user.password = await user.encryptPassword(password);
        let resp = await user.save();
        tokenRegister(resp, res);
        }else{
            return res.status(400).json({error: "Password must be more than 5 characters and Email must be a format correct"}); 
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}
userControler.login = async (req, res) => {
        const {email, password } = req.body
        if(validateEmail(email) && validatePassword(password)){
          isUserExists(email, password, res);
        }else{
            return res.status(401).send({ auth: false, credentials: 'Wrong credentials' })
        }
}

userControler.me = async (req, res) =>{
        let response;
        try {
             let user = await User.findById(req.userId, { password: 0, _id: 0, updated_at: 0 });
                if(user){
                     response = res.status(200).json({ user });
                }else{
                    response = res.status(200).json({ user: 'User not found' });
                }
        } catch (error) {
            response = res.status(400).json({
                error: error
            });
        }
        return response;
    }

function validateEmail(email) {
        var reg = /\S+@\S+\.\S+/;
        return reg.test(email);
}

function validatePassword(pass) {
        return pass.length > 5;
}

 
async function isUserExists(email, password, res){
        const user = await User.findOne({email, email});
        try {
            if(!user){
                return res.status(401).json({
                   response: 'Wrong credentials'
               })
           }
           await isPasswordCorrect(password, user, res);

        } catch (error) {
            return res.status(400).json(error);
        }
}

async function isPasswordCorrect(pass, user, res){
        let ps = await user.comparePassword(pass);

        if(!ps){
            return res.status(401).json({
                      response: 'Wrong credentials'
                   });
        }else{
            let payload = {id: user.id};
            let tk  = token.create(payload);
            if(tk){
               return res.json({
                        response: tk,
                        auth: true
                      });
            }
        }
}

function tokenRegister(resp, res){
        if(resp){
            let payload = {id : resp.id}
            let tk = token.create(payload)
    
            return res.status(200).json({
                      response: tk,
                      auth: true
                  })
        }else{
             return res.status(400).json({
                        response: 'something went wrong',
                        auth: false
                    })
        }
}


module.exports = userControler;