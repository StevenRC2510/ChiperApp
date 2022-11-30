const getBaseDomain = (client = 'r/pics/'): string =>
  `https://api.reddit.com/${client}`;

interface Props {
  postsHttp: {
    baseUrl: string;
  };
}

export default {
  postsHttp: {
    baseUrl: getBaseDomain(),
  },
} as Props;
