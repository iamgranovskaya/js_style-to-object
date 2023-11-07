'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const array = sourceString.split(';');

  array.forEach((style) => {
    const [styleName, styleValue] = style.split(':');

    if (styleName && styleValue) {
      object[styleName.trim()] = styleValue.trim();
    }
  });

  return object;
}

module.exports = convertToObject;
