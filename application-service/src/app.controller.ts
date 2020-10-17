import { Controller, Get, Res } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';

export class HelloResponse {
    @ApiProperty({ type: String })
    data: string;
}

@Controller('app-controller')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('get-hello')
    @ApiTags('get-hello')
    @ApiResponse({ status: 200, type: HelloResponse })
    getHello(): HelloResponse {
        const apiResponse = {
            data: this.appService.getHello(),
        } as HelloResponse;
        return apiResponse;
    }
}
