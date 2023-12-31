This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


setting up an own server: (needed files) ---follow comments in each files---
---in src folder---
-   server.ts first
-   get-payload.ts second
-   next-utils.ts third
-   payload.config.ts
--- in root---
-   .env copy paste environment variables
-   nodemon.json sixth
-   tsconfig.server.json seventh


creating authentication
---in app folder---
-   sign-up foler --> page.tsx //npm add react-hook-form @hookform/resolvers zod sonner --> for form validation
-   accounts-credentials-validator in app/lib --> good practise to seperate so you can use it also on server-side 
-   TRPC SETUP:
    -   npm add @trpc/client @trpc/next @trpc/react-query @trpc/server @tanstack/react-query (npm add @tanstack/react-query@4.36.1 if latest version isn't compatible)
    -   navigate to components and create Providers.tsx file ---follow steps there---
    -   make api folder --> trpc folder --> [trpc] folder --> route.ts in app folder
    -   make collections folder --> Users.ts in app folder and after that adjust package.json with this: "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types", under "dev" and run "npm run generate:types"
    -   npm i nodemailer to setup account sign up with verification mail. setup happens in get-payload.ts file
