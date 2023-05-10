type UserType = {
  id: string
  name: string
  age: number
  email: string
  password: string
}

type PublicUserFields = Pick<UserType, 'name' | 'email'>
