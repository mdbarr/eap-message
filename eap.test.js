'use strict';

require('barrkeep/pp');
const eap = require('./index');

const packet = Buffer.from([2, 0, 0, 10, 1, 109, 98, 97, 114, 114]);
console.pp(packet);

describe('EAP Tests', () => {
  it('should decode an eap packet', () => {
    const object = eap.decode(packet);
    console.pp(object);
  });
});
