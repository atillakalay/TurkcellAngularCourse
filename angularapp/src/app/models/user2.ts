export class User2 {
  userId: number
  id: number
  title: string
  completed: boolean

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this.id = id
    this.completed = completed
    this.title = title
    this.userId = userId
  }

}
