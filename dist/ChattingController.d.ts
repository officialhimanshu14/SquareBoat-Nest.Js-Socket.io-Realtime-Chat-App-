import { GlaService } from './ChattingGateways';
export declare class GlaController {
    private readonly glaService;
    constructor(glaService: GlaService);
    handleEvent(message: string): string;
}
