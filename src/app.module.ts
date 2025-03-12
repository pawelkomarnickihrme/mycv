import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RaportsModule } from './raports/raports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Raport } from './raports/raports.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Raport], // Update entities path if necessary
      synchronize: true,
    }),
    UsersModule,
    RaportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
