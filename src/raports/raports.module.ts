import { Module } from '@nestjs/common';
import { RaportsService } from './raports.service';
import { RaportsController } from './raports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raport } from './raports.entity';
@Module({
  providers: [RaportsService],
  controllers: [RaportsController],
  imports: [TypeOrmModule.forFeature([Raport])],
})
export class RaportsModule {}
