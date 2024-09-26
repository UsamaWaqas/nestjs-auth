/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';
@Injectable()
export class UserService {

    public user:Users[] = [
        {
            username : "user1",
            password : "admin",
            email : "user1@gmail.com",
            age : "23"
            
        },
        {
            username : "user2",
            password : "admin",
              email : "user2@gmail.com",
            age : "23"
            
        },
        {
            username : "user3",
            password : "admin",
              email : "user3@gmail.com",
            age : "23"
            
        },
    ];

    getUSerByName(userName : string) :Users{
        return this.user.find((user)=> user.username === userName)
    }
}
