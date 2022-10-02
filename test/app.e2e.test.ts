import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { RecentStoriesController } from '../src/news/RecentStories.Controller';

describe('AppController (e2e)', () => {
  let storyController: RecentStoriesController;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [RecentStoriesController],
    }).compile();

    storyController = moduleFixture.get<RecentStoriesController>(
      RecentStoriesController,
    );
  });

  describe('/GET Recent Stories', () => {
    it('fetch most used words in recent stories', async () => {
      const res = await storyController.RecentTwentyFiveStories();
      expect(res).toBe(true);
    });
  });
});
