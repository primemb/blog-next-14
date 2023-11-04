import fs from "fs";
import path from "path";

export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
}

class DataStore {
  private filePath: string;

  constructor() {
    this.filePath = path.resolve(path.resolve(), "data.json");
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  private readData(): IPost[] {
    return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
  }

  private writeData(data: IPost[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data));
  }

  public getPosts(): IPost[] {
    return this.readData();
  }

  public getPost(id: string): IPost | undefined {
    const data = this.readData();
    return data.find((post) => post.id === id);
  }

  public addPost(post: IPost): void {
    const data = this.readData();
    data.unshift(post);
    this.writeData(data);
  }

  public updatePost(post: IPost): void {
    const data = this.readData();
    const index = data.findIndex((p) => p.id === post.id);
    if (index !== -1) {
      data[index] = post;
      this.writeData(data);
    }
  }

  public deletePost(id: string): void {
    let data = this.readData();
    data = data.filter((post) => post.id !== id);
    this.writeData(data);
  }
}
const dataStore = new DataStore();
export { dataStore };
