// @flow

/**
 * Returns true if value is a string
 * @example
 * isString('a') // => true
 */

const isString = (v: any): bool =>
  typeof v === 'string'

export default isString
