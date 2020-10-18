import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private readonly configService: ConfigService) {}

    getHello(info: string): string {
        return `Hello from ${
            AppService.name
        } at ${info} at :${this.configService.get('port')}`;
    }
}
