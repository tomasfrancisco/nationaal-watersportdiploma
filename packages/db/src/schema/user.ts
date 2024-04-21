import { sql } from 'drizzle-orm'
import {
  char,
  date,
  foreignKey,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core'
import { timestamps } from '../utils/sql.js'
import { _usersTable } from './_sb_controlled/auth.js'
import { location } from './location.js'
import { country } from './platform.js'

export const user = pgTable(
  'user',
  {
    authUserId: uuid('auth_user_id').primaryKey().notNull(),
    displayName: text('display_name'),
    _metadata: jsonb('_metadata'),
  },
  (table) => {
    return {
      authUserReference: foreignKey({
        columns: [table.authUserId],
        foreignColumns: [_usersTable.id],
        name: 'user_auth_user_id_fk',
      }),
    }
  },
)

export const person = pgTable(
  'person',
  {
    id: uuid('id')
      .default(sql`extensions.uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    userId: uuid('user_id'),
    firstName: text('first_name').notNull(),
    lastNamePrefix: text('last_name_prefix'),
    lastName: text('last_name'),
    dateOfBirth: date('date_of_birth'),
    birthCity: text('birth_city'),
    birthCountry: char('birth_country', { length: 2 }).references(
      () => country.alpha_2,
    ),
    _metadata: jsonb('_metadata'),
  },
  (table) => {
    return {
      userReference: foreignKey({
        columns: [table.userId],
        foreignColumns: [user.authUserId],
        name: 'person_user_id_fk',
      }),
    }
  },
)

export const actorType = pgEnum('actor_type', [
  'student',
  'instructor',
  'location_admin',
  'application',
  'system',
])

export const actor = pgTable(
  'actor',
  {
    id: uuid('id')
      .default(sql`extensions.uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    type: actorType('type').notNull(),
    personId: uuid('person_id'),
    locationId: uuid('location_id').notNull(),
    ...timestamps,
    _metadata: jsonb('_metadata'),
  },
  (table) => {
    return {
      personReference: foreignKey({
        columns: [table.personId],
        foreignColumns: [person.id],
        name: 'actor_person_id_fk',
      }),
      locationReference: foreignKey({
        columns: [table.locationId],
        foreignColumns: [location.id],
        name: 'actor_location_link_location_id_fk',
      }),
      unqActorTypePerson: uniqueIndex('unq_actor_type_person').on(
        table.type,
        table.personId,
      ),
    }
  },
)

export const personLocationLinkStatus = pgEnum('person_location_link_status', [
  'pending',
  'accepted',
  'rejected',
  'revoked',
])

export const locationLinkPermissionLevel = pgEnum(
  'location_link_permission_level',
  // pii_only: Only the person's PII and curriculum progress that is obtained through the location is shared with the location.
  // all: All of the person's PII and curriculum progress is shared with the location.
  ['pii_only', 'all'],
)

export const personLocationLink = pgTable(
  'person_location_link',
  {
    personId: uuid('person_id').notNull(),
    locationId: uuid('location_id').notNull(),
    status: personLocationLinkStatus('status').notNull(),
    permissionLevel: locationLinkPermissionLevel('permission_level').notNull(),
    requestedAt: timestamp('requested_at', {
      withTimezone: true,
      mode: 'string',
    })
      .defaultNow()
      .notNull(),
    acceptedAt: timestamp('accepted_at', {
      withTimezone: true,
      mode: 'string',
    }),
    rejectedAt: timestamp('rejected_at', {
      withTimezone: true,
      mode: 'string',
    }),
    revokedAt: timestamp('revoked_at', {
      withTimezone: true,
      mode: 'string',
    }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.personId, table.locationId],
        name: 'person_location_link_pk',
      }),
      personReference: foreignKey({
        columns: [table.personId],
        foreignColumns: [person.id],
        name: 'person_location_link_person_id_fk',
      }),
      locationReference: foreignKey({
        columns: [table.locationId],
        foreignColumns: [location.id],
        name: 'person_location_link_location_id_fk',
      }),
    }
  },
)
