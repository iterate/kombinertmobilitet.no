# Sanity scripts

Scripts for dumping contents from production to development, or for
doing database migrations when making larger changes to the schema.

## Create a file `sanityToken.js`:

```js
/*
 * Name:
 * <token name> (Read+Write)
 */
module.exports = <token>
```

Create a token for the project with read and write acces. Export it from `sanityToken.js`. (This file is ignored by git.)

## Run

Run the desired script using Node

```sh
  $ node script.js
```
