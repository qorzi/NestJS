import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'v1.api.localhost' })    // 하위 도메인 요청 처리 설정
export class ApiController {
    @Get()
    index(): string {
        return 'Hello, API v1'
    }
}

@Controller({ host: 'v2.api.localhost' })    // 하위 도메인 요청 처리 설정
export class Api2Controller {
    @Get()
    index(): string {
        return 'Hello, API v2'
    }
}

@Controller({ host: ':version.api.localhost' })    // HostParam을 통한 동적 host 설정
export class Api3Controller {
    @Get()
    index(@HostParam('version') version: string): string {
        return `Hello, API ${version}`
    }
}