import jwt from 'jsonwebtoken';
import Doctor from '../models/Doctor.js';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.cookie
  ) {
    try {
      const {token} = req.cookie;
      //Bearer tokenhjfsd

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.decoded = decoded.id;

      next();
    } catch (error) {
      res.status(401).json({message:"Not authorized, token failed"});
    }
  }

  if (!token) {
    res.status(401).json({message:"Not authorized, no token"});
  }
};

