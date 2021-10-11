# Doctorinna-Frontend
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d6c01263e90b4c3a9e85b630e274eb72)](https://www.codacy.com/gh/Doctorinna/frontend/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Doctorinna/frontend&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/Doctorinna/frontend/branch/master/graph/badge.svg?token=8BE2XA4162)](https://codecov.io/gh/Doctorinna/frontend)

This repository is place for Doctorinna frontend project. It is built using next js framework on react, with redux as state manager and material ui components. Project is written on typescript to allow code completion and catching bugs more easily. Current version is just layout of a SPA.

## Getting Started
For project I use Node.js 14, but most of packages are working on different versions of node, if you have a problems with sass [check supported versions](https://github.com/sass/node-sass) and use different version of node/node-sass(edit package.json and package-lock.json) package

To learn your version of node run:

```bash
node --version
```

To install dependencies run:

```bash
npm install
# or
yarn install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## MVC
MVC of applicatiom is deployed to vercel platform that already has CI.

But unfortunately, vercel only permit https, so it isn't integrated with backend yet. It works locally though.

You can see the app here [https://doctorinna.vercel.app/](https://doctorinna.vercel.app/)