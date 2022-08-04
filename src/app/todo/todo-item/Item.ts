export class Todo {
  id!: number;
  title!: string;
  desc!: string;
  done!: boolean;

  constructor(id: number, title: string, desc: string, done: boolean) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.done = done;
  }

  toggleDone(): void {
    console.log("toggleDone");
    this.done = !this.done;
  }


}



