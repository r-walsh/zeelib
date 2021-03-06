import test from 'tape'
import isJson from './is-json'

test('isJson', (t) => {
  t.false(isJson({ a: 'a' }), 'returns false for obj')
  t.false(isJson('{"foo":"bar",baz:2}'), 'returns false for invalid JSON')
  t.true(isJson(JSON.stringify({ a: 'a' })), 'returns true for valid JSON')
  t.end()
})
