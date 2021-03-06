// @flow

/**
 * Sync sleep. Also see `sleepAsync`.
 * @example
 * sleep(1000)
 */

const sleep = (ms: number): void => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

export default sleep
