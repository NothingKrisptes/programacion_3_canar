// src/auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { UsersService } from '../users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    config: ConfigService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    super({
      clientID: config.get<string>('GOOGLE_CLIENT_ID') ?? '',
      clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET') ?? '',
      callbackURL: config.get<string>('GOOGLE_CALLBACK_URL') ?? '',
      scope: ['email', 'profile'],
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const email = profile.emails?.[0]?.value;
    const googleId = profile.id;
    const avatarUrl = profile.photos?.[0]?.value;
    if (!email) return done(new Error('Google no devolvió un email'), false);

    // Si viene un `state`, es el JWT de un usuario ya logueado que quiere vincular
    // su cuenta de Google desde su perfil (no un login nuevo).
    const state = req.query?.state as string | undefined;
    if (state) {
      try {
        const payload = this.jwtService.verify<{ id: string }>(state);
        const linkedUser = await this.usersService.linkGoogleId(payload.id, googleId, avatarUrl);
        return done(null, linkedUser);
      } catch (err) {
        return done(err as Error, false);
      }
    }

    let user = await this.usersService.findByGoogleId(googleId);

    if (!user) {
      user = await this.usersService.findByEmail(email);
    }

    if (!user) {
      user = await this.usersService.createFromGoogle({
        username: email.split('@')[0],
        email,
        googleId,
        avatarUrl,
      });
    } else if (!user.googleId) {
      user = await this.usersService.linkGoogleId(user.id!, googleId, avatarUrl);
    }

    done(null, user);
  }
}