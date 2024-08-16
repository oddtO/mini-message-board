type Flatten<Type extends unknown[]> = Type[number];

class CustomArray<Type extends unknown[]> extends Array {
  constructor(...args: Type) {
    super();
    this.push(...args);
  }
  reverseForEach(this: Type, cb: (item: Flatten<Type>) => void): void {
    for (let i = this.length - 1; i >= 0; i--) {
      cb(this[i]);
    }
  }
}

export type Message = {
  text: string;
  user: string;
  added: Date;
};
export const messages = new CustomArray<Message[]>(
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
);
