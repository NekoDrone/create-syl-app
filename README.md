# Create Syl App (create-syl-app)

This project is a simple cli tool which allows me to run `pnpm dlx create-syl-app@latest <app-name>` or `pnpm create syl-app .` in order to quickly scaffold and build new projects within my preferred tech stack.

## Usage

Any one of these is fine. See the result for what you'll get. This is mostly for myself because i forgor 💀 very often.

| Command                                     | Result                                                                                    |
|---------------------------------------------|-------------------------------------------------------------------------------------------|
| `pnpm dlx create-syl-app@latest <app-name>` | Takes you through the full scaffolding flow in the newly created `/<app-name>` subfolder. |
| `pnpm dlx create-syl-app@latest .`          | Takes you through the full scaffolding flow in the current directory.                     |
| `pnpm create syl-app@latest <app-name>`     | Takes you through the full scaffolding flow in the newly created `/<app-name>` subfolder. |
| `pnpm create syl-app@latest .`              | Takes you through the full scaffolding flow in the current directory.                     |

You may include optional flags. These can be seen by running `pnpm dlx create-syl-app@latest --help` or `pnpm create syl-app@latest --help`.

\<WIP\>

## Tech Stack

Below you'll find what's included in the tool, and reasons why I included them in the project, if you're interested.

### Frontend

| Package                              | Reason                                                                                                                                                                                                                                                       |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Next.js](https://nextjs.org/)       | There unfortunately is no competition. Next is the best way to use React, and React is the best framework for quickly building new apps. Not that React is the best full stop, it's just great because Claude et. al tend to write pretty banger React code. |
| [Tailwind](https://tailwindcss.com/) | CSS is fine, but I like to define my styles at the component level and have them Just Work™ and not have to hassle with other style solutions.                                                                                                               |
| [Motion](https://motion.dev/)        | Best animation library hands down. So pretty!!!                                                                                                                                                                                                              |

### Frontend addons

| Package                                                 | Reason                                                                                                                    |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [TanStack Query](https://tanstack.com/query)            | You try doing async calls in react without this lol. Saves so much headache especially when you need to invalidate cache. |
| [Zustand](https://github.com/pmndrs/zustand) (optional) | State management library. It's not Redux or MobX :)                                                                       |
| [Jotai](https://github.com/pmndrs/jotai) (optional)     | State management library. It's not Redux, MobX or Zustand :)                                                              |


### Backend

| Package                        | Reason                                                                                                                          |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [Next.js](https://nextjs.org/) | Because the `/api` directory is goated when you actually deploy. Remember the priority of this is to go fast, not go efficient. |
| [tRPC](https://trpc.io/)       | I ❤️ type-safety                                                                                                                |

### Database

| Package                              | Reason                                                                                                                                                                |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Drizzle](https://orm.drizzle.team/) | I like writing SQL. Unfortunately SQL isn't type safe. Drizzle is the best way to write stuff SQL-like and still get type-safety. Sorry Prisma, you don't come close. |
| [Turso](https://turso.tech/)         | Do you want to have a free 5GB edge database service with up to 500 individual databases all with SQLite? Yeah. I do too.                                             |

### Other addons

| Package                                          | Reason                                                      |
|--------------------------------------------------|-------------------------------------------------------------|
| [Zod](https://zod.dev/)                          | Again, I ❤️ type-safety                                     |
| [zod-drizzle](https://orm.drizzle.team/docs/zod) | Self-explanatory. Generate Zod schemas from Drizzle schema. |

### Dev Tools

| Package                                                                                           | Reason                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ESLint](https://eslint.org/)                                                                     | I ❤️ love good linting rules too.                                                                                                                                                                      |
| [Prettier](https://prettier.io/)                                                                  | I ❤️ love making my code actually look good and readable in a proper format.                                                                                                                           |
| [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) | Why `create-next-app` ships with Tailwind as an option but not Prettier or the Tailwind Prettier plugin is beyond me. Reduces build times and makes life easier when writing components with Tailwind. |

### Theme

| Package                                             | Reason |
|-----------------------------------------------------|--------|
| [Catppuccin Mocha](https://catppuccin.com/palette/) | :3     |


## Development

Mostly for myself, but if you want to fork this project and tweak your own feel free.

To get started with development,

1. Clone this repository. `git clone https://github.com/NekoDrone/create-syl-app.git`
2. Enter the folder. `cd create-syl-app`
3. Install dependencies. `pnpm i`

```bash
git clone https://github.com/NekoDrone/create-syl-app.git
cd create-syl-app
pnpm i
```

You can symlink this project into your npm globally by running `pnpm link` in the project root. This allows you to run `pnpm dlx create-syl-app` with your local dev copy of the project instead of what is published on npm.

You can unlink by running `pnpm unlink` (and can optionally provide `-r` or `--recursive` to unlink in every package found in subdirectories or in every workspace package when executed inside a workspace.). See [pnpm docs](https://pnpm.io/cli/unlink).

## Deployment

To publish, remember to bump the version appropiately with `pnpm version <major|minor|patch>` in accordance to semver.

Then, simply run `pnpm publish` and log in to npm.

## Contribution

Happy to take any requests to improve the project, and issues are always welcome, but this is mostly just for myself so that I don't spend an hour configuring my `tsconfig.json` after running `create-next-app`.

(And also to add ESLint, Prettier, and the Tailwind Prettier plugin because for some reason `create-next-app` doesn't ship that by default?? Crazy tbh.)