import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
