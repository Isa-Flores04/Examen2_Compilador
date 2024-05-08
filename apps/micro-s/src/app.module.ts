import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport } from '@nestjs/microservices';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'user',
      entities: [User],
      synchronize: true,
    }),
    
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost', 
          port: 3002, 
        },
      },
    ]),
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}