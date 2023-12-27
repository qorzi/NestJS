import { Body, Controller, Get, Param, Post, Query, Delete, Redirect } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserInfo } from './UserInfo';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<{ message: string }> {
        const { name, email, password } = createUserDto;

        await this.userService.createUser(name, email, password);

        return { message: '회원 가입 요청이 성공적으로 처리되었습니다. 몇 분 내로 이메일이 전달될 것입니다.' };
    }

    @Post('/email-verify')
    @Redirect('https://localhost:3000', 301)
    async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
        const { signupVerifyToken } = dto;

        return await this.userService.verifyEmail(signupVerifyToken);
    }

    @Post('/login')
    async login(@Body() dto: UserLoginDto): Promise<string> {
        const { email, password } = dto;

        return await this.userService.login(email, password);
    }

    @Get('/:id')
    async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
        return await this.userService.getUserInfo(userId);
    }

    @Delete(':id')
    async remove(@Param('id') userId: string): Promise<string> {
        return this.userService.remove(+userId);
    }

}