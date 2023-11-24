import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true, maxlength: 50 },
    picture: { type: String, maxlength: 300 },
    // NOTE If you wish to add additional properties do so here
    title: { type: String, maxlength: 30 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

