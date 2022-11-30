import PostsClient from '@app/services/posts.client';
import servicesConfig from '@app/services/configuration';

export const postsHttp = new PostsClient(servicesConfig.postsHttp);
