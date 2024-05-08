import { Controller, Get, Render, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MonorepoAppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  /* @Get()
  getHello(): string {
    return this.monorepoAppService.getHello();
  } */
  @EventPattern('new_mail')
  handleNewMail ( data: unknown ) {
    console.log( { data } )
  }
}