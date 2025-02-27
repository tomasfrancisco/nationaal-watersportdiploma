import * as api from '@nawadi/api'
import * as core from '@nawadi/core'
import * as application from '../application/index.js'

export const getLocationCohorts: api.GetLocationCohortsOperationHandler<
  application.Authentication
> = async (incomingRequest, authentication) => {
  const { location } = incomingRequest.parameters

  // TODO list cohorts

  return {
    status: 200,
    parameters: {},
    contentType: 'application/json',
    entity: () => [
      {
        id: '',
        handle: '',
        title: '',
      },
      {
        id: '',
        handle: '',
        title: '',
      },
    ],
  }
}

export const createLocationCohort: api.CreateLocationCohortOperationHandler<
  application.Authentication
> = async (incomingRequest, authentication) =>
  core.withTransaction(async () => {
    const { location } = incomingRequest.parameters
    const entity = await incomingRequest.entity()

    // TODO create cohort

    return {
      status: 201,
      parameters: {},
      contentType: 'application/json',
      entity: () => ({
        id: '',
      }),
    }
  })
