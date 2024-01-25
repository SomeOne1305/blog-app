import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

class socialNetwork{
  @Prop()
  type:string

  @Prop()
  url:string
}

@Schema({timestamps:true})


export class User {
  @Prop()
  name:string
  
  @Prop()
  surname:string

  @Prop()
  email:string

  @Prop()
  password:string

  @Prop()
  profile_image:string

  @Prop()
  isProfile:boolean

  @Prop()
  social_networks:socialNetwork[]
}

export type UserDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)