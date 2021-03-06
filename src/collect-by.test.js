import test from 'tape'
import collectBy from './collect-by'

test('collectBy', (t) => {
  const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
  const expected = { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
  t.deepEqual(collectBy('foo')(data), expected, 'works')
  t.end()
})
