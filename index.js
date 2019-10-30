'use strict';

const codes = {
  1: 'Request',
  2: 'Response',
  3: 'Success',
  4: 'Failure'
};

const types = {
  1: 'Identity',
  2: 'Notification',
  3: 'Nak',
  4: 'MD5-Challenge',
  5: 'OTP',
  6: 'Generic Token Card'
};

function encode(object) {
}

function decode(message) {
  const length = message.readInt16BE(2);

  const object = {
    code: codes[message.readInt8(0)],
    identifier: message.readInt8(1)
  }

  if (object.code === codes[1] || object.code === codes[2]) {
    object.type = types[message.readInt8(4)];
    object.data = message.subarray(5, length).toString()
  }

  return object;
}

module.exports = {
  encode,
  decode
};
