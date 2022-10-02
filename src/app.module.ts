import { Module } from '@nestjs/common';
import { RecentStoriesModule } from './news/RecentStories.Module';

@Module({
  imports: [RecentStoriesModule],
})
export class AppModule {}
