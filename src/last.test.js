import test from 'tape'
import last from './last'

test('last', (t) => {
  t.equal(last([ 1, 2, 3 ]), 3, 'returns last el of arr')
  t.end()
})
