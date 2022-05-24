import {model, Schema, Document} from "mongoose";
import * as bcrypt from 'bcrypt'

export interface IUser extends Document {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  band: boolean;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [30, "Name must be at most 30 characters long"],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, "Lastname is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [30, "Name must be at most 30 characters long"],
        trim: true,
    },
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
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    band: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


export default model<IUser>("User", userSchema);