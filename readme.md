# log-symbols

<img src="screenshot.png" width="226" height="192" align="right">

> Colored symbols for various log levels

Includes fallbacks for Windows CMD which only supports a [limited character set](https://en.wikipedia.org/wiki/Code_page_437).

## Install

```
$ npm install @zyrouge/log-symbols-no-esm
```

## Usage

```ts
const logSymbols = require("@zyrouge/log-symbols-no-esm"); // JavaScript
import logSymbols from "@zyrouge/log-symbols-no-esm"; // Typescript

console.log(logSymbols.success, "Finished successfully!");
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
```

## API

### logSymbols

#### info

#### success

#### warning

#### error

## Related

-   [log-symbols](https://www.npmjs.com/package/log-symbols) - Original package
-   [figures](https://github.com/sindresorhus/figures) - Unicode symbols with Windows CMD fallbacks
-   [py-log-symbols](https://github.com/ManrajGrover/py-log-symbols) - Python port
-   [log-symbols](https://github.com/palash25/log-symbols) - Ruby port
-   [guumaster/logsymbols](https://github.com/guumaster/logsymbols) - Golang port
