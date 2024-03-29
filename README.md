# Magic Postcard Creator

This project will generate images and postcard text with AI and automatically lets you send the card to your desired recipient. 

![OG Image](/public/ogimage.png)

## Demo


## How it works

It uses an ML model from OpenAI called DALLE-2 to generate an image using AI with just a text description. When text is submitted, the application proxies calls to the OpenAI API via QStash in `/api/image`. QStash sends responses to `/api/callback` in the form of an image URL, which is persisted to Upstash Redis. After calling the OpenAI API, the client polls Redis and loads the image on the page once it's available.

Because API calls are handled by QStash rather than within the Vercel serverless function, they will not time out when deployed on Vercel's Hobby plan, which has a timeout limit of 10s.



```bash
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/randomteam/clone?demo-title=Dall-E%202%20AI%20Art%20Generator&demo-description=Dall-E%202%20frontend%20using%20Upstash%20for%20message%20queue%20%2B%20Redis.&demo-url=https%3A%2F%2Fdalle-2.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3ulf3cJhGCjsBEoALnQd6c%2Fde6a1bddc1eae9422d73e285cd879a6e%2FCleanShot_2022-12-09_at_09.28.09.png&project-name=Dall-E%202%20AI%20Art%20Generator&repository-name=dall-e&repository-url=https%3A%2F%2Fgithub.com%2Fdomeccleston%2Fdalle-2&from=templates&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17&env=OPENAI_API_KEY&envDescription=Get%20an%20API%20key%20at%20OpenAI%3A&envLink=https%3A%2F%2Fopenai.com)
