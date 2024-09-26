/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Users } from "src/users/user.entity";
import { UserService } from "src/users/user.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userservice : UserService){
        super()
    }
    validate(username : string, password : string) : Users{
        const user : Users = this.userservice.getUSerByName(username);
        if(user === undefined){
            throw new  UnauthorizedException();
        }
        if(user !== undefined && user.password === password){
            return user
        }
        else{
            throw new UnauthorizedException()
        }
    }
}