<div align="center">
  <p>
    <a href="https://github.com/twitterjs/twitter.js"><img src="https://raw.githubusercontent.com/twitterjs/guide/main/src/.vuepress/public/branding/banner_small.png" title="Twitter.js" alt="twitter.js github" /></a>
  </p>
  <p>
    <a href="https://discord.gg/f5Pefuskx4"><img src="https://img.shields.io/discord/791722432896434237?color=5865F2&label=discord&logo=discord&logoColor=white&style=flat-square" alt="twitter.js official discord server" /></a>
    <a href="https://www.npmjs.com/package/twitter.js"><img src="https://img.shields.io/npm/v/twitter.js?color=ff2511&style=flat-square" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/twitter.js"><img src="https://img.shields.io/npm/dt/twitter.js?color=1DB954&style=flat-square" alt="NPM downloads" /></a>
    <a href="https://developer.twitter.com/en/docs/twitter-api/early-access"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Ftwbadges.glitch.me%2Fbadges%2Fv2&style=flat-square" alt="Twitter API v2" /></a>
  </p>
</div>

<!-- <div align="center">
	<img src="src/.vuepress/public/branding/banner_small.png" title="Twitter.js Guide" alt="Twitter.js Guide" />
</div> -->

# Twitter.js

An object-oriented Node.js and TypeScript library for interacting with Twitter API v2

## Usage:

Fetching details about a twitter user is as easy as this with `twitter.js` library:

```js
import { Client } from 'twitter.js';
import { bearerToken } from './secrets.js';

const client = new Client();

client.on('ready', async () => {
  const user = await client.users.fetchByUsername({
    username: 'iShiibi',
  });
  console.log(user.description);  // Contributing to open-source 🌐
});

client.loginWithBearerToken(bearerToken);
```

`twitter.js` also provides you the ability to make [`user-context`](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) authorized requests without any hassle:

```js
import { Client } from 'twitter.js';
import { credentials } from './secrets.js';

const client = new Client();

client.on('ready', async () => {
  console.log(`Logged in as ${client.me.username}`);  // Logged in as tjs_test
  const user = await client.users.fetchByUsername({
    username: 'iShiibi'
  })
  await user.follow();
});

client.login(credentials);
```

And did we tell you that you can opt-in for real-time events listening? With `twitter.js`, you can set rules that tell Twitter API to send you tweets matching those rules in real-time. Here is a sample code for a bot that likes every tweet it gets mentioned in:

```js
import { Client } from 'twitter.js';
import { credentials } from './secrets.js';

const client = new Client({ events: ['FILTERED_TWEET_CREATE'] });

client.on('ready', async () => {
  console.log(`Logged in as ${client.me.username}`); // Logged in as tjs_test
  await client.filteredTweets.addRules([{ value: '@tjs_test' }]);
});

client.on('filteredTweetCreate', async tweet => {
  console.log(`${tweet.text}`); // hey @tjs_test, like this tweet if you're listening!
  await tweet.like();
})

client.login(credentials);
```

## Future:

The `twitter.js` library is currently under development and not ready for production use yet. You can expect breaking changes without any major version bump until we release `v1.0.0` of the library.

There is an autogenerated [documentation website](https://twitter.js.org) for API references. We hope to replace it with a custom one soon. If you love web development, then feel free to discuss how you can contribute towards this goal in our [Discord server](https://discord.gg/f5Pefuskx4).

We also have plans for creating a guide website to teach users how to use `twitter.js` library.
