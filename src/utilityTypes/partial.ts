import { task, Task } from './readonly'

type OptionalTask = Partial<Task>

const updateTask = (task: Task, patch: OptionalTask) => {
  return {
    ...task,
    ...patch,
  }
}

updateTask(task, { id: 2, text: 'updated text' })
