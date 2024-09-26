/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [UserModule,AuthModule],
  controllers:[AppController],
  providers: [],
})
export class AppModule {}
