this.name = 'module';
const person = {
  name: 'jack',
  speak() {
    console.log(`I am ${this.name}`);
  },
  say: () => {
    console.log(`My name is ${this.name}`);
  },
};
