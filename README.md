<p align="center">
  <img src="https://i.imgur.com/2n3U5I8.png" href="https://github.com/xxczaki/xa" height="256">
  <h2 align="center">xa</h2>
  <p align="center">Beautiful & Customizable log messages in your terminal :heart:<p>
  
<p align="center">  
<a href="https://travis-ci.org/xxczaki/xa"><img src="https://travis-ci.org/xxczaki/xa.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style"></a> 
<a href="https://www.youtube.com/watch?v=9auOCbH5Ns4"><img src="https://img.shields.io/badge/unicorn-approved-ff69b4.svg" alt="Unicorn"></a>
  </p>
  
 
 <p align="center"><img src="https://i.imgur.com/LxRnkIN.png" alt="Screenshot"></p>

## Installation 

``` 
npm install --save xa
```
<a href="https://www.patreon.com/akepinski">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

There are 7 options:
  
- `info: (label, message)`

- `loading: (label, message)`

- `warn: (label, message)`

- `experimental: (label, message)`

- `on: (label, message)`

- `off: (label, message)`

- `error: (message)`
  
  You can also highlight commands & links:
  
  - `command: (cmd)`
  - `link: (url)`
  
## Example

> See [example.js](https://github.com/xxczaki/xa/blob/master/example.js) file.

```js
const xa = require('xa');

xa.info('SUCCESS', 'Finished converting file!');

xa.warn('WARN', `This module is deprecated! Read more: ${xa.link('http://example.com')}`);
```

## Customize

xa uses [chalk](https://www.npmjs.com/package/chalk) for colorful output, so you can customize technically every color :unicorn: 

You can also use 2 options for `xa.error` - `silent` or `loud` (see [index.js](https://github.com/xxczaki/xa/blob/master/index.js#L38) for more information).

## Thanks:

- [Jamen Marzonie](https://www.npmjs.com/~jamen) for providing package name!

## License

MIT © [Antoni Kepinski](https://akepinski.me)

<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fxa?ref=badge_large" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fxa.svg?type=large"/></a>



