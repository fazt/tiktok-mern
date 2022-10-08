import {
  getModelForClass,
  modelOptions,
  pre,
  prop,
} from "@typegoose/typegoose";
import { hash, verify } from "argon2";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
@pre<User>("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await this.encryptPassword(this.password);
})
class User {
  @prop({ type: String })
  nickname: string;

  @prop({ type: String })
  name: string;

  @prop({ type: String, required: true })
  email: string;

  @prop({ type: String })
  avatar: string;

  @prop({ type: String, required: true })
  password: string;

  async encryptPassword(password: string): Promise<string> {
    return await hash(password);
  }
}

export default getModelForClass(User);
