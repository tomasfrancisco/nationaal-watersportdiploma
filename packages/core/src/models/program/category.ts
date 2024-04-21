import { schema as s } from '@nawadi/db'
import { desc, eq } from 'drizzle-orm'
import { alias } from 'drizzle-orm/pg-core'
import { z } from 'zod'
import { useQuery, withTransaction } from '../../contexts/index.js'
import {
  handleSchema,
  possibleSingleRow,
  singleRow,
  successfulCreateResponse,
  withZod,
} from '../../util/index.js'
import { insertSchema, outputSchema } from './category.schema.js'

export const create = withZod(
  insertSchema.pick({
    title: true,
    handle: true,
    description: true,
    parentCategoryId: true,
  }),
  successfulCreateResponse,
  async (item) =>
    withTransaction(async (tx) => {
      const currentHeighestWeight = await tx
        .select({ weight: s.category.weight })
        .from(s.category)
        .orderBy(desc(s.category.weight))
        .limit(1)
        .then((rows) => rows[0]?.weight ?? 0)

      const rows = await tx
        .insert(s.category)
        .values({
          title: item.title,
          handle: item.handle,
          description: item.description,
          parentCategoryId: item.parentCategoryId,
          weight: currentHeighestWeight + 1,
        })
        .returning({ id: s.category.id })

      const row = singleRow(rows)
      return row
    }),
)

export const list = withZod(z.void(), outputSchema.array(), async () => {
  const query = useQuery()

  const rows = await query.select().from(s.category)

  return rows.map(({ parentCategoryId, ...row }) => ({
    ...row,
    parent: rows.find(({ id }) => id === parentCategoryId) ?? null,
  }))
})

export const fromHandle = withZod(
  handleSchema,
  outputSchema.nullable(),
  async (handle) => {
    const query = useQuery()

    const self = alias(s.category, 'parent')

    const rows = await query
      .select()
      .from(s.category)
      .leftJoin(self, eq(s.category.id, self.id))
      .where(eq(s.category.handle, handle))

    const row = possibleSingleRow(rows)

    if (!row) {
      return null
    }

    return {
      ...row.category,
      parent: row.parent,
    }
  },
)
