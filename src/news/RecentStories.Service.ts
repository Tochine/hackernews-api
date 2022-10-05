import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { config } from '../config';

@Injectable()
export class RecentStoriesService {
  constructor(
    private readonly http: HttpService,
  ) {}
  async fetchStories() {
    const data = await this.http.axiosRef.get(
      `${config.url.topStoryUrl}`,
    );
    return data;
  }
}
