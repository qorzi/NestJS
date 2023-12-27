import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { RedirectController } from './redirect/redirect.controller';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [
    ApiController,
    RedirectController
  ],
  providers: [],
})
export class AppModule { }
