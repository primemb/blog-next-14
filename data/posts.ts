export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

class DataStore {
  private data: IPost[] = [
    {
      id: "1",
      title: "Hello World",
      content:
        "Anim sit sunt ex mollit commodo laborum nulla adipisicing. Exercitation dolore sunt qui amet. Adipisicing non ea ullamco esse. Quis proident qui Lorem sit culpa nisi est laboris nostrud dolor consectetur. Esse incididunt proident id tempor et id culpa elit enim exercitation ullamco proident elit.",
      author: "John Doe",
    },
    {
      id: "2",
      title: "Hello World",
      content:
        "Anim sit sunt ex mollit commodo laborum nulla adipisicing. Exercitation dolore sunt qui amet. Adipisicing non ea ullamco esse. Quis proident qui Lorem sit culpa nisi est laboris nostrud dolor consectetur. Esse incididunt proident id tempor et id culpa elit enim exercitation ullamco proident elit.",
      author: "John Doe",
    },
    {
      id: "3",
      title: "Hello World",
      content:
        "Anim sit sunt ex mollit commodo laborum nulla adipisicing. Exercitation dolore sunt qui amet. Adipisicing non ea ullamco esse. Quis proident qui Lorem sit culpa nisi est laboris nostrud dolor consectetur. Esse incididunt proident id tempor et id culpa elit enim exercitation ullamco proident elit.",
      author: "John Doe",
    },
    {
      id: "4",
      title: "Hello World",
      content:
        "Anim sit sunt ex mollit commodo laborum nulla adipisicing. Exercitation dolore sunt qui amet. Adipisicing non ea ullamco esse. Quis proident qui Lorem sit culpa nisi est laboris nostrud dolor consectetur. Esse incididunt proident id tempor et id culpa elit enim exercitation ullamco proident elit.",
      author: "John Doe",
    },
  ];

  public getPosts(): IPost[] {
    return [...this.data];
  }

  public getPost(id: string): IPost | undefined {
    return this.data.find((post) => post.id === id);
  }

  public addPost(post: IPost): void {
    this.data.push(post);
  }

  public updatePost(post: IPost): void {
    const index = this.data.findIndex((p) => p.id === post.id);
    this.data[index] = post;
  }

  public deletePost(id: string): void {
    this.data = this.data.filter((post) => post.id !== id);
  }
}
export const dataStore = new DataStore();
