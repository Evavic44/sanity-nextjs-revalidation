This is a guide to explain how to set-up on-demand revalidation in a Sanity Nextjs project. Read the [article](article-link). Visit the [live demo](live-demo) to see the project live.

## Live Preview

![preview][preview]

## Prerequisites

This template uses the following versions:

- Nextjs: `v14.0.4`
- next-sanity: `v7.0.4`
- sanity: `3.21.3`
- React: `v18`

### Important files and folders

| File(s)                                        | Description                                         |
| ---------------------------------------------- | --------------------------------------------------- |
| [`sanity.config.ts`](sanity.config.ts)         | Config file for Sanity Studio                       |
| [`sanity.client.ts`](lib/sanity.client.ts)     | Config file for Sanity CLI                          |
| [`studio`](./app/studio/[[...index]]/page.tsx) | Where Sanity Studio is mounted                      |
| [`schemas`](./schema/index.ts)                 | Where Sanity Studio gets its content types from     |
| [`sanity.query.ts`](./lib/sanity.query.ts)     | Where Sanity data is described and retrieved        |
| [`route.ts`](./app/api/revalidate/route.ts)    | Route handler for triggering on-demand revalidation |

## Run project locally

- clone repository

```bash
git clone https://github.com/Evavic44/sanity-nextjs-revalidation.git

cd sanity-nextjs-revalidation

npm install
```

- Rename `.env.example` to `.env`

### Update Env Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` Set to your project ID
- `NEXT_PUBLIC_SANITY_DATASET` Set to "server" or a new project dataset.
- `NEXT_PUBLIC_SANITY_API_VERSION`: Set to your current date in YYYY-MM-DD format or leave as is
- `NEXT_PUBLIC_SANITY_ACCESS_TOKEN` Visit [Sanity Manage][sanity-manage] to create an access token.
- `NEXT_PUBLIC_SANITY_HOOK_SECRET` Visit [Sanity Manage > API][sanity-manage] to create hook secret.

- Now run `npm run dev`
  Visit [http://localhost:3000][3000] to see your site <br />
  Visit [http://localhost:3000/studio][3000-studio] to edit content

<!-- LINK VARIABLES -->

[article-link]: https://victoreke.com/blog/sanity-webhooks-and-on-demand-revalidation
[live-demo]: https://sanity-nextjs-revalidate.vercel.app
[sanity-manage]: https://sanity.io/manage
[3000]: http://localhost:3000
[3000-studio]: http://localhost:3000/studio
[preview]: https://github.com/Evavic44/sanity-nextjs-revalidation/assets/62628408/4108cfc2-e483-4f28-840e-bc094ac63f4c
