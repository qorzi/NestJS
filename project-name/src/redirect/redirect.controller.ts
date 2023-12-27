import { Controller, Redirect, Get, Query, Param } from '@nestjs/common';

@Controller('redirect')
export class RedirectController {
    @Get('/:id')
    @Redirect('https://nestjs.com', 301)
    findOne(@Param('id') id: string) {
        return null
    }

    @Get('/docs')
    @Redirect('https://nestjs.com', 302)
    getDocs(@Query('version') version: string) {
        console.log("/docs")
        console.log(version)
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
}
