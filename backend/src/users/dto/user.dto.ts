import { IsBoolean, IsEmail, IsNotEmpty, IsStrongPassword, isEmail } from "class-validator";

class socialProfile {
  @IsNotEmpty()
  type:string;
  
  @IsNotEmpty()
  url:string
}

export class UserDto {
  
  @IsNotEmpty()
  name:string;

  @IsNotEmpty()
  surname:string;

  @IsEmail()
  email:string;

  @IsStrongPassword({minLength:8})
  password:string;

  @IsNotEmpty()
  profile_image:string;

  @IsBoolean()
  isProfile:boolean;

  social_networks:socialProfile[]
}