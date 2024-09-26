/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './Auth/auth.service';


@Controller()
export class AppController {
  constructor(private readonly authservice : AuthService) {}

  @Post("/login")
  @UseGuards(AuthGuard('local'))
  Login(@Request () req ): string {
   return  this.authservice.GenerateToken(req.user)

  }
  @Get("/andriod")
  @UseGuards(AuthGuard('jwt'))
  andriod(): string {
   return  'this is for andriod';

  }
}
