# REMIX + MEDUSA STOREFRONT STARTER PROJECT

Starter Medusa StoreFront project built using Remix + Tailwind CSS.

- [Medusa Docs](https://docs.medusajs.com/)
- [Remix Docs](https://remix.run/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)

## Prerequisites

You'll at least need to setup and run a [Medusa server](https://github.com/medusajs/medusa) before running this storefront project:

```sh
# Install Medusa CLI
npm install -g @medusajs/medusa-cli

# Initialize a new commerce store populated with data
medusa new my-medusa-store --seed

# Launch Medusa server in dev mode
medusa develop
```

Running the above commands will have you running a complete commerce engine locally in just a few minutes. Do note the engine is headless and that you'll need [Medusa-Admin](https://github.com/medusajs/admin) for adminstration dashboard.

## Development

From your terminal:

```sh
# Install package dependencies
npm install

# Run storefront in dev mode
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
