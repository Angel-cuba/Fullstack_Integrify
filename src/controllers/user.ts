import {Request, Response, NextFunction} from 'express';
import User, { IUser} from '../models/User';
import userService from '../services/user';
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import keys from '../config/keys';


export const signUp = async(req: Request, res: Response, next: NextFunction) => {
    const {name, lastname, email, password, role} = req.body

    const user = new User({
        name,
        lastname,
        email,
        password,
        role
    });
    try {
        await userService.createUser(user);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(404).send(err);
    }
}
export const getAnUser = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(404).send(err);
    }
}
export const updateAnUser = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
        const user = await userService.updateAnUser(id, req.body);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

export const deletingUser = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
        const user = await userService.deleteAnUser(id);
        res.status(200).json({message: `User ${user?.name} deleted`});
    }
    catch (err) {
        res.status(404).send(err);
    }
}

//Login
export const signIn = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    try {
        //Checking if user exists
    const user = await userService.loginUser(email);
     if(!user)return  res.status(404).send(`User with email: ${email} not found`)
     //Checking if password is correct
 //const isMatch = user.comparePassword(req.body.password)
  const isMatch = await bcrypt.compareSync(password, user.password);
    if(!isMatch) {
        return res.status(404).send(`Password ${password} is incorrect`)
        }else {
            //Generate token
    const userToken = await jwt.sign(
        {email: user.email},
         keys.PRIVATE_KEY as string,
         {
        expiresIn: 86400 // expires in 24 hours
    })
    res.status(200).json({message: "User logged in successfully", token:userToken, user});
        }
    
    } catch (error) {
        res.status(400).send(error)
    }
}
