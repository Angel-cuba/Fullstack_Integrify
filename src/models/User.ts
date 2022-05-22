import {model, Schema, Document} from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../types/user.type";

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
        trim: true,
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
});

// Hash the password before saving
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) return next();
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
      next()     // next() is required to continue the execution of the function
}
);

//Method to compare the password against the current  password
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
}

export default model<IUser>("User", userSchema);