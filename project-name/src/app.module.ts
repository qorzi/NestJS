import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { RedirectController } from './redirect/redirect.controller';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema
    })
  ],
  controllers: [
    ApiController,
    RedirectController
  ],
  providers: [],
})
export class AppModule { }
