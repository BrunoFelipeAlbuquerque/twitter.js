import { regsiterErrorMessage } from './TwitterjsError.js';

const messages = {
  INVALID_TYPE: (name: string, expected: string, an = false) =>
    `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
  TWEET_RESOLVE_ID: 'Could not resolve the tweet ID to fetch the tweet.',
  INVALID_FETCH_OPTIONS: 'Could not fetch the requested data due to supplied options being invalid or incomplete.',
  USER_RESOLVE_ID: 'Could not resolve the user ID to fetch the user.',
  NOT_BEARER_CLIENT: 'The client used to log in with is not an instance of BearerClient',
  NOT_USER_CONTEXT_CLIENT: 'The client used to log in with is not an instance of UserContextClient',
  NO_BEARER_TOKEN: 'Unable to find bearer token for making API requests',
  NO_CLIENT_CREDENTIALS: 'Unable to find client credentials for making API requests',
};

for (const [key, message] of Object.entries(messages)) {
  regsiterErrorMessage(key, message);
}