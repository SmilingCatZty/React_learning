interface todo {
  id: number,
  name: string,
  done: boolean
}

export interface staicPageModel {
  todoList: todo[],
}