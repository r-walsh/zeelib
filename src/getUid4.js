// @flow

const getUid4 = () : string =>
  ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)

export default getUid4