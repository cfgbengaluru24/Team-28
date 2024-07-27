import jwt from 'jsonwebtoken';
import Doctor from '../models/Doctor.js';

export const protect = async (req, res, next) => {
//   console.log(req.cookies);

    try {
      const token = req.cookies.token;
      //Bearer tokenhjfsd

      //decodes token id
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    
      req.decoded = decoded.id;
      console.log(req.decoded);

      next();
    } catch (error) {
      res.status(401).json({message:"Not authorized, token failed"});
    }

};

