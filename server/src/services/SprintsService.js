import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class SprintsService {
  async createSprint(sprintData) {
    const sprint = await dbContext.Sprints.create(sprintData)
    await sprint.populate('creator', 'name picture')
    return sprint
  }

  async getSprintsByProjectId(projectId) {
    const sprints = await dbContext.Sprints.find({ projectId }).populate('creator', 'name picture')
    return sprints
  }

  async destroySprint(sprintId, userId) {
    const sprint = await dbContext.Sprints.findById(sprintId)
    if (!sprint) { throw new BadRequest(`Invalid id: ${sprintId}`) }
    if (sprint.creatorId.toString() != userId) { throw new Forbidden('This is not your sprint therefore cannot delete') }
    await sprint.remove()
    return `${sprint.name} has been deleted`
  }
}

export const sprintsService = new SprintsService()