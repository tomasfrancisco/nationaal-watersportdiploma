import assert from 'assert'
import test from 'node:test'
import { withTestTransaction } from '../../contexts/index.js'
import * as Competency from './competency.js'

test('competency crud', () =>
  withTestTransaction(async () => {
    const { id } = await Competency.create({
      title: 'title-1',
      handle: 'handle-1',
      type: 'knowledge',
    })

    const list = await Competency.list()

    assert.equal(list.length, 1)
    const [item] = list

    assert.deepStrictEqual(item, {
      id,
      title: 'title-1',
      handle: 'handle-1',
      type: 'knowledge',
    })
  }))
