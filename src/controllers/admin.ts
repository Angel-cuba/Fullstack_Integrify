import {Request, Response, NextFunction} from 'express';
import userService from '../services/user';


export const allUsersFromDatabase = async(req: Request, res: Response, next: NextFunction) => {
    try {
     const data = await userService.getAllUsers();
     res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error)
      
    }
}