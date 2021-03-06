import * as prismic from '@prismicio/client';
import { HttpRequestLike } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from '../../sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export interface PrismicConfig {
  req?: HttpRequestLike;
}

export function linkResolver(doc) {
  switch (doc.type) {
    case 'post':
      return '/posts';
    default:
      return null;
  }
}

export function createClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    req: config.req,
  });

  return client;
}
