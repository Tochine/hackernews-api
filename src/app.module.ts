import { Module } from '@nestjs/common';
import { RecentStoriesController } from './news/RecentStories.Controller';
import { RecentStoriesModule } from './news/RecentStories.Module';

@Module({
  imports: [RecentStoriesModule],
})
export class AppModule {}
