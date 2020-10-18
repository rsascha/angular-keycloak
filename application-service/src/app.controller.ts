//
// API Decorators:
// - List of decorators: https://docs.nestjs.com/openapi/decorators
// - Source Code: https://github.com/nestjs/swagger/tree/master/lib/decorators
// - To validate changes use: http://localhost:3000/swagger-json
//
import { Controller, Get, Req } from '@nestjs/common';
import {
    ApiOperation,
    ApiProperty,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
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
    @ApiOperation({
        operationId: 'getHello',
        summary: 'Get the hello response :)',
    })
    @ApiResponse({ status: 200, type: HelloResponse })
    getHello(@Req() request: Request): HelloResponse {
        return {
            data: this.appService.getHello(
                `${request.hostname} with request URL: ${request.originalUrl}`,
            ),
        } as HelloResponse;
    }
}
