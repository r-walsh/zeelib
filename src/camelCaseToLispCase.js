// @flow

const camelCaseToLispCase = (str: string): string =>
  str.replace(/[A-Z]/g, (match) =>
    '-' + match.toLowerCase()).toLowerCase()

export default camelCaseToLispCase