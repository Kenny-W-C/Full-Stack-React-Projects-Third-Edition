# Full-Stack React Projects / Chapter 2

_Getting to Know Node.js and MongoDB_


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


## Start

You can now run various scripts, by going to the `services/` folder and running them via `node`, as follows:

```
cd services/
node helloworld.js
```

For the `mongodbweb.js` service, make sure to first start a Docker container based on the `mongo` image, as explained in the book.
