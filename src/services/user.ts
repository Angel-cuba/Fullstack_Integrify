import { IUser } from "../models/User";
import Login,{ ILogin } from "../models/UserLogin";


const createUser= async (user: IUser):Promise<IUser> => {
  return user.save();
}

const loginUser = async (userEmail: string):Promise<ILogin | null> => {
  return Login.findOne({email:userEmail});
}


export default {
  createUser,
  loginUser
}