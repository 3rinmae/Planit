import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Project.js').Project[]} */
  myProjects: [],
/** @type {import('./models/Project.js').Project | null} */
  activeProject: null,
/** @type {import('./models/Sprint.js').Sprint[]} */
  sprints: [],
/** @type {import('./models/Sprint.js').Sprint | null} */
  activeSprint: null,
/** @type {import('./models/Task.js').Task[]} */
  tasks: [],
/** @type {import('./models/Task.js').Task | null} */
  activeTask: null,

  isEditingTask: false,
/** @type {import('./models/Note.js').Note[]} */
  notes:[]
})
