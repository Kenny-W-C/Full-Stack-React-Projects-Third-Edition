# Full-Stack React Projects / Chapter 4

_Integrating a Frontend Using React and TanStack Query_


## Requirements

Please install the following, if you do not already have them installed:

- Node.js v19.6.0
- Git v2.39.1
- Visual Studio Code v1.75.0

The versions listed above are the ones used in the book. While installing a newer version should not be an issue, please note that certain steps might work differently on a newer version. If you are having an issue with the code and steps provided in this book, please try using the mentioned versions.


## Install

If you cloned the full repository for the book, Husky may not find the `.git` directory when running `npm install`. In that case, just run `git init` in the root of the corresponding chapter folder.

```
git init
npm install
```

You also need to install the backend dependencies, as follows:

```
cd services/backend/
npm install
```

Make sure you have a Docker container based on the `mongo` image running, as explained in the book.


## Start

To start the frontend in development mode, run the following command in this folder:

```
npm run dev
```

Then enter the `services/backend/` folder and start the backend in development mode (automatically restarts when files are changed):

```
cd services/backend/
npm run dev
```

To start the backend server in production mode, run:

```
cd services/backend/
npm start
```
