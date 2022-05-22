import {Request, Response, NextFunction} from 'express';

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Creating an user...");
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
    res.send("Login user");
}
