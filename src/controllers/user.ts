import {Request, Response, NextFunction} from 'express';
import User from '../models/User';
import userService from '../services/user';
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import keys from '../config/keys';


export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    const {name, lastname, email, password, role} = req.body

    //Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        lastname,
        email,
        password: hashedPassword,
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
    res.send("Getting user");
}
export const updateAnUser = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Updating user");
}

export const deletingUser = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Deleting user");
}

//Login
export const loginUser = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    try {
        //Checking if user exists
    const user = await userService.loginUser(email);
    //res.send(user?.password);
     if(!user)return  res.status(404).send(`User with email: ${email} not found`)
     //Checking if password is correct
    const isMatch = await bcrypt.compareSync(password, user.password);
    if(!isMatch) return res.status(404).send(`Password is incorrect`)
    //Generate token
    const token = await jwt.sign(
        {email: req.body.email},
         keys.PRIVATE_KEY as string,
         {
        expiresIn: "1h"
    })
    res.status(200).json({message: "User logged in successfully", token: token, user});
    } catch (error) {
        res.status(400).send(error)
    }
}
