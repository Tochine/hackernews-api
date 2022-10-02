type Config = {
  url: {
    itemUrl: string;
    topStoryUrl: string;
  };
};

export const config: Config = {
  url: {
    itemUrl: 'https://hacker-news.firebaseio.com/v0/item',
    topStoryUrl:
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
  },
};
