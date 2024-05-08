import { Inject, Injectable } from '@nestjs/common';
import {ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('MAIL_SERVICE') private readonly _mailClient: ClientProxy,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async newUser(body: { name: string; email: string }) {
    // Verifica si ya existe un usuario
    const existingUser = await this.userRepository.findOne({ where: { email: body.email } });

    // Devuelve un mensaje indicando que ya existe
    if (existingUser) {
      throw new Error('El usuario ya existe en la base de datos.');
    }

    // Inserta el usuario en la base de datos
    const newUser = this.userRepository.create(body);
    const savedUser = await this.userRepository.save(newUser);

    // Emite el evento "new_email" al servicio
    this._mailClient.emit('new_email', savedUser);

    return savedUser;
  }
}