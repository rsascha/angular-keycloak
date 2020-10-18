import { Controller, Get, Req } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

export class HelloResponse {
    @ApiProperty({ type: String })
    data: string;
}

@Controller('app')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('get-hello')
    @ApiTags('get-hello')
    @ApiResponse({ status: 200, type: HelloResponse })
    getHello(@Req() request: Request): HelloResponse {
        return {
            data: this.appService.getHello(
                `${request.hostname} with request URL: ${request.originalUrl}`,
            ),
        } as HelloResponse;
    }
}
