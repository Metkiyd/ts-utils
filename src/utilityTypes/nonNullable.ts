import { task, Task } from './readonly'

const getTaskDate = (
  date: Task['completedDate'],
): NonNullable<Task['completedDate']> => {
  if (!date) {
    return new Date()
  }
  return date
}

const result = getTaskDate(task.completedDate)
