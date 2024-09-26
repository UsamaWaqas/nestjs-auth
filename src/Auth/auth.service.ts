/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Users } from "src/users/user.entity";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService :JwtService ) {

     }

     GenerateToken(payload : Users) : string{
        return this.jwtService.sign(payload)
     }

}