import { Task } from './readonly'

type commonTypes = Extract<keyof UserType, keyof Task>
