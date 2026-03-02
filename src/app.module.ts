import { Module } from '@nestjs/common';
import { MissionService } from './mission/mission.service';

@Module({
  imports: [MissionService],
  controllers: [],
  providers: [],
})
export class AppModule {}
