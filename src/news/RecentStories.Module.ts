import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RecentStoriesService } from './RecentStories.Service';
import { RecentStoriesController } from './RecentStories.Controller';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [RecentStoriesController],
  providers: [RecentStoriesService],
})
export class RecentStoriesModule {}
