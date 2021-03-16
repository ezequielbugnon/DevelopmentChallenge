import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const token = {}

token.create = (paylod) => {
    const tk = jwt.sign(paylod, process.env.CONFIG_SECRET, {
        expiresIn: '1h'
    })
    return tk
}


token.check = async (req, res, next) => {
    const tk = req.headers['authorization'];
    console.log(tk)
    if(!tk){
        return res.status(401).send({ auth: false, token: 'Token is not provided' })
    }

    try {
        const decoded = await jwt.verify(tk, process.env.CONFIG_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).send({ auth: false, token: 'Invalid token' })
    }
    
}

export default token;