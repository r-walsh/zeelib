// @flow

import objectToString from './object-to-string'

/**
 * Returns true if the value is a dom element
 */

const isDomElement = (v: any): bool =>
  objectToString(v).slice(8, 12) === 'HTML'

export default isDomElement