// TIP: You can run 'node example.js' in the project directory to see the output in your terminal!

const xa = require('.');

xa.loading('TEST', 'Running test...');

xa.info('SUCCESS', 'Finished converting file!');

xa.warn('WARN', `This module is deprecated! Read more: ${xa.link('http://example.com')}`);

xa.experimental('EXPERIMENTAL', 'This feature is not implemented yet!');

xa.on('ON', 'You turned on unicorn mode!');

xa.off('OFF', 'You turned off unicorn mode!');

xa.error('Could not find chalk. Make sure you have installed it!', {silent: true});
