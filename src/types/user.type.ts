import User from "../models/User";

 type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  
}

export interface IUser extends Document {
  // id: string;
  // name: string;
  // lastname: string;
  // email: string;
  // password: string;
  // role: string;
  User: User;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}