type WithGetters<T extends string> = Record<`get${Capitalize<T>}`, () => string>

const user = {
  name: 'John',
  age: 40,
}

declare function createGetters(
  user: Partial<UserType>,
): WithGetters<keyof UserType>

const userWithGetters = createGetters(user)

userWithGetters.getname()
userWithGetters.getage()

userWithGetters.getName()
userWithGetters.getAge()
