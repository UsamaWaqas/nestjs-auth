/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { jwtStrategy } from './jwt.strategy';


@Module({
  imports: [PassportModule,UserModule,JwtModule.register(
    {
        secret : "key",
        signOptions:{
            expiresIn : "60s"
        }
    }
  )],
  controllers:[],
  providers: [LocalStrategy, jwtStrategy, AuthService],
  exports : [AuthService]
})
export class AuthModule {}