import { Controller, Get, Post, Body } from '@nestjs/common';
import { GlaService } from './ChattingGateways';

@Controller('gla')
export class GlaController {
  constructor(private readonly glaService: GlaService) {}
  
  @Post('event')
  handleEvent(@Body('message') message: string): string {
  return "Message Broadcasted : "+this.glaService.handleEventService(message);
}
}
