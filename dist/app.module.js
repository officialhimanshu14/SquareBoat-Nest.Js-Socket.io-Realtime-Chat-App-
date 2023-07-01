"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const ChattingController_1 = require("./ChattingController");
const socket_gateway_1 = require("./socket-gateway");
const ChattingGateways_1 = require("./ChattingGateways");
const socket_io_1 = require("socket.io");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [ChattingController_1.GlaController],
        providers: [socket_gateway_1.GlaGateways, ChattingGateways_1.GlaService, socket_io_1.Server],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map