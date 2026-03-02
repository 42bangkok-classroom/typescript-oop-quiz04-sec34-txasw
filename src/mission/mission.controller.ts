import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';
import { IMission } from './mission.interface';

@Controller('missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get()
  findAll(): IMission[] {
    return this.missionService.findAll();
  }

  @Get()
  getSummary(): { ACTIVE: number; COMPLETED: number; FAILED: number } {
    return this.missionService.getSummary();
  }
}
