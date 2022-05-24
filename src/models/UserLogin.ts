import {model, Schema, Document} from "mongoose";
import * as bcrypt from 'bcrypt'


export interface ILogin extends Document {
  email: string;
  password: string;
comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});

//Method to compare the password against the current  password
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
   return bcrypt.compareSync(candidatePassword, this.password);
}

export default model<ILogin>("Login", userSchema, 'users');