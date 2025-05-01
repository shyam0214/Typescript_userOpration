import { Request, Response, NextFunction } from 'express';
import logger from '../common/utils/logger';


const isAuthenticated = async (req: Request, res: Response ,next :NextFunction): Promise<any> =>{
 try{ 
  console.log(req.session?.userId , "session id")
  if (!req.session?.userId){
    logger.error("Unauthorized access attempt detected.");
    return res.status(401).json({ message: 'Unauthorized' });
  } 
  logger.info("User authenticated successfully.");
  return next();
}catch(error){
  logger.error("Authentication Failed: " + error.message);
  return res.status(500).json({ message: 'Internal Server Error' });
}
};

export default isAuthenticated;