import { task, Task } from './readonly'

type RequiredTask = Required<Task>

const getCompleted = (tasks: Task[]) => {
  return tasks.filter(
    (task) => task.isCompleted && task.completedDate,
  ) as RequiredTask[]
}

const tasks = getCompleted([task])

const completedTask = tasks[0].isCompleted
