export const getInt = (n: string) => {
  return parseInt(n)
}

type Result = ReturnType<typeof getInt>

const createTask = () => {
  return {
    id: 10,
    text: 'new task',
  }
}

type CreateTaskResult = ReturnType<typeof createTask>
