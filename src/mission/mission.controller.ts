import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get()
  getSummary(): { ACTIVE: number; COMPLETE: number; FAILED: number } {
    return this.missionService.getSummary();
  }
}
