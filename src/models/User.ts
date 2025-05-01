import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  resetToken?: string;
  resetTokenExp?: Date;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExp: Date,
},{timestamps: true});

export default mongoose.model<User>('Users', userSchema);