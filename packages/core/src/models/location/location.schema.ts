import { schema as s } from '@nawadi/db'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const insertSchema = createInsertSchema(s.location, {
  handle: (schema) =>
    schema.handle
      .trim()
      .toLowerCase()
      .min(3)
      .regex(/^[a-z0-9\-]+$/),
  name: (schema) => schema.name.trim(),
  websiteUrl: (schema) => schema.websiteUrl.url(),
})
export type Input = z.input<typeof insertSchema>

export const selectSchema = createSelectSchema(s.location, {
  _metadata: z.any(),
})

export const outputSchema = selectSchema.omit({
  logoMediaId: true,
  squareLogoMediaId: true,
  certificateMediaId: true,
})

export type Output = z.output<typeof outputSchema>
