import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RecentStoriesService {
  constructor(private readonly http: HttpService) {}
  async fetchStories() {
    const data = await this.http.axiosRef.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
    return data;
  }
}
