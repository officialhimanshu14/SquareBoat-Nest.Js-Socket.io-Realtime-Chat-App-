"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlaService = void 0;
const common_1 = require("@nestjs/common");
const socket_gateway_1 = require("./socket-gateway");
let GlaService = exports.GlaService = class GlaService {
    constructor(gateway) {
        this.gateway = gateway;
    }
    setServer(server) {
        this.server = server;
    }
    handleEventService(message) {
        console.log(message);
        console.log("This is From Service Layer " + this.gateway.handleEvent(message));
        return message;
    }
    handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
};
exports.GlaService = GlaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [socket_gateway_1.GlaGateways])
], GlaService);
//# sourceMappingURL=ChattingGateways.js.map