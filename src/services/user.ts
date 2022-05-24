import User, { IUser } from "../models/User";
import Login,{ ILogin } from "../models/UserLogin";


const createUser= async (user: IUser):Promise<IUser> => {
  return user.save();
}

const loginUser = async (userEmail: string):Promise<ILogin | null> => {
  return Login.findOne({email:userEmail});
}

const getUserById = async(id: string):Promise<IUser | null> => {
  return User.findById(id);
  }

  const updateAnUser = async (id: string, user: IUser):Promise<IUser | null> => {
    return User.findByIdAndUpdate(id, user);
  }

  const deleteAnUser = async (id: string):Promise<IUser | null> => {
    return User.findByIdAndDelete(id);
  }

  const getAllUsers = async():Promise<IUser[]> => {
    return User.find({role: 'USER'});
  }


export default {
  createUser,
  loginUser,
  getUserById,
  updateAnUser,
  deleteAnUser,
  getAllUsers
}