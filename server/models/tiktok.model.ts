import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Tiktok {
  @prop({
    required: true,
    unique: true,
    type: String,
  })
  title: string;

  @prop({
    trim: true,
    type: String,
  })
  description: string;

  @prop({
    required: true,
    type: String,
  })
  video: string;
}

export default getModelForClass(Tiktok);
