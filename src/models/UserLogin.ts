import {model, Schema, Document} from "mongoose";


export interface ILogin extends Document {
  email: string;
  password: string;
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


export default model<ILogin>("Login", userSchema, 'users');