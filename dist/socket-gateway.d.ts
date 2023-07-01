import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server } from "socket.io";
export declare class GlaGateways implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    afterInit(server: Server): void;
    handleEvent(data: string): string;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
}
