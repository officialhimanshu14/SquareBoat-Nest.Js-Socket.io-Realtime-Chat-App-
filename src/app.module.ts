import { Module } from '@nestjs/common';
import {   GlaController } from './ChattingController';
import {  GlaGateways } from './socket-gateway';
import { GlaService } from './ChattingGateways';
import { Server } from 'socket.io';

 

@Module({
  imports: [
    
     ],
  controllers: [GlaController],
  providers: [ GlaGateways, GlaService, Server],
})
export class AppModule {}
