import { Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { GlaGateways } from './socket-gateway';

@Injectable()
export class GlaService {
  private server: Server;
  constructor(private readonly  gateway: GlaGateways) {}
  joinRoom(socket: Socket, room: string): void {
    socket.join(room);
  }

  leaveRoom(socket: Socket, room: string): void {
    socket.leave(room);
  }

  sendMessage(socket: Socket, room: string, message: string): void {
    socket.to(room).emit('message', message);
  }

  setServer(server: Server) {
    this.server = server;
  }

  handleEventService(message: string): string {
    console.log(message);
    console.log("This is From Service Layer "+this.gateway.handleEvent(message));
    return message;
  }

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
