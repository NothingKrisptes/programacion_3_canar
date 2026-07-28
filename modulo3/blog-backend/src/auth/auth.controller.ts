import {
 Controller,
 Post,
 Body,
 BadRequestException,
 UnauthorizedException,
 Get,
 UseGuards,
 Req,
 Res,
 Delete
} from '@nestjs/common';
import express from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';


@Controller('auth')
export class AuthController {
 constructor(
   private readonly authService: AuthService,
   private readonly usersService: UsersService
 ) { }

 @Post('login')
 async login(@Body() loginDto: LoginDto) {
   const token = await this.authService.login(loginDto);
   if (!token) {
     throw new UnauthorizedException('Invalid credentials');
   }
   return new SuccessResponseDto('Login successful', { access_token: token });
 }

 @Post('register')
 async register(@Body() createUserDto: CreateUserDto) {
   const token = await this.authService.register(createUserDto);
   if (!token) {
     throw new BadRequestException('Failed to register user');
   }
   return new SuccessResponseDto('Registration successful', { access_token: token });
 }

 @Get('google')
 @UseGuards(GoogleAuthGuard)
 async googleAuth() {
   // Nunca se ejecuta: el guard intercepta la petición y redirige a Google.
   // Si la request trae ?state=<jwt> (usuario ya logueado vinculando su cuenta),
   // GoogleAuthGuard lo reenvía y Google lo devuelve intacto en el callback.
 }

 @Get('google/callback')
 @UseGuards(GoogleAuthGuard)
 async googleAuthCallback(@Req() req: express.Request, @Res() res: express.Response) {
   const token = await this.authService.loginWithUser(req.user as User);
   const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:5173';
   res.redirect(`${frontendUrl}/auth/google/callback?token=${token}`);
 }

 @Delete('google')
 @UseGuards(JwtAuthGuard)
 async unlinkGoogle(@Req() req: express.Request) {
   const userId = (req.user as { id: string }).id;
   const user = await this.usersService.unlinkGoogleId(userId);
   return new SuccessResponseDto('Google account unlinked', user);
 }
 
}
