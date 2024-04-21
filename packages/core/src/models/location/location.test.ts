import assert from 'assert'
import test from 'node:test'
import { withTestTransaction } from '../../contexts/index.js'
import * as Location from './location.js'

test('location crud', () =>
  withTestTransaction(async () => {
    const { id } = await Location.create({
      handle: 'handle-1',
      name: 'title-1',
      websiteUrl: 'https://example.com',
    })

    const list = await Location.list()

    assert.equal(list.length, 1)
    const [item] = list

    assert.deepStrictEqual(item, {
      id,
      handle: 'handle-1',
      name: 'title-1',
      websiteUrl: 'https://example.com',
    })
  }))
