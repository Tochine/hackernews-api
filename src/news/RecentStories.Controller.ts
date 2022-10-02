import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RecentStoriesService } from './RecentStories.Service';
import { config } from '../config';

@Controller('news')
export class RecentStoriesController {
  constructor(
    private service: RecentStoriesService,
    readonly http: HttpService,
  ) {}

  @Get('recent')
  async RecentTwentyFiveStories() {
    // counter
    const startItem = 0;
    const endItem = 25;

    // fetch array of item ids
    const { data } = await this.service.fetchStories();
    const stories = data.map((x) => {
      return x;
    });
    const recentStories = stories.slice(startItem, endItem);

    const arr = [];
    // let url = {};
    for (let i = 0; i < recentStories.length; i++) {
      const id = recentStories[i];
      // console.log(`${i} ${id}`);
      const { data } = await this.http.axiosRef.get(
        `${config.url.itemUrl}/${id}.json?print=pretty`,
      );

      arr.push(data.title);
    }

    console.log(arr);

    const newArray = [];
    arr.forEach(function (entry) {
      // eslint-disable-next-line prefer-spread
      newArray.push.apply(newArray, entry.split(' '));
    });

    console.log(newArray);

    const map = {};
    let keys = [];
    for (let i = 0; i < newArray.length; i++) {
      if (map[newArray[i]]) {
        map[newArray[i]]++;
      } else {
        map[newArray[i]] = 1;
      }
    }
    for (const i in map) {
      keys.push(i);
    }
    keys = keys
      .sort((a, b) => {
        if (map[a] === map[b]) {
          if (a > b) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return map[b] - map[a];
        }
      })
      .slice(0, 10);
    return keys;
  }
}
