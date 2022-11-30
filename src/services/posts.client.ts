import {PostTypes} from '@app/interfaces/posts';

import HttpClient from '@app/services/http.client';

export type PostsResponseTypes = {
  data: {
    children: Array<{data: PostTypes}>;
  };
};

export default class PostsClient extends HttpClient {
  public async getPosts(category: string): Promise<PostsResponseTypes> {
    const {data = []} = await this.get(`${category}.json`);
    return data;
  }
}
