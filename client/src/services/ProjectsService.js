import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProjectsService {
async getProjects(){
  const res = await api.get('api/projects')
  logger.log('got projects', res.data)
  const newProjects = res.data.map(pojo => new Project(pojo))
  AppState.myProjects = newProjects
}
}

export const projectsService = new ProjectsService()