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

async createProject(projectData){
  const res = await api.post('api/projects', projectData)
  logger.log('project created', res.data)
  const newProject = new Project(res.data)
  AppState.myProjects.push(newProject)
  return newProject
}
}

export const projectsService = new ProjectsService()