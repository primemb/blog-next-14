export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

export const posts: IPost[] = [
  {
    id: "1",
    title: "Hello World",
    content:
      "Anim sit sunt ex mollit commodo laborum nulla adipisicing. Exercitation dolore sunt qui amet. Adipisicing non ea ullamco esse. Quis proident qui Lorem sit culpa nisi est laboris nostrud dolor consectetur. Esse incididunt proident id tempor et id culpa elit enim exercitation ullamco proident elit.",
    author: "John Doe",
  },
];
