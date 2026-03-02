import { MissionService } from './mission.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Controller {
  constructor(private readonly appService: MissionService) {}

  @Get()
  getSummary(): string {
    return '';
  }
}
