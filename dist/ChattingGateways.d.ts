import { Server } from 'socket.io';
import { GlaGateways } from './socket-gateway';
export declare class GlaService {
    private readonly gateway;
    private server;
    constructor(gateway: GlaGateways);
    setServer(server: Server): void;
    handleEventService(message: string): string;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
}
