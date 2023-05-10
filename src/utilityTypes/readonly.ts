export type Task = {
  id: number
  text: string
  isCompleted?: boolean
  completedDate?: Date | undefined
}

// type Task = {
//   readonly id: number
//   readonly text: string
//   readonly isCompleted?: boolean
//   readonly completedDate?: Date | undefined
// }

// type Task = Readonly<{
//   id: number
//   text: string
//   isCompleted?: boolean
//   completedDate?: Date | undefined
// }>

export const task: Task = {
  id: 0,
  text: 'my task',
}

const completeTask = (task: Task) => {
  task.isCompleted = true
  task.completedDate = new Date()
}

completeTask(task)
