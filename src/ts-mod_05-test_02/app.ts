//* 1. функція повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.
async function getPromise(): Promise<Array<string | number>> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}
getPromise().then(data => {
  console.log(data);
});

//* 2. Є тип даних:
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Функція приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайся Pick.
function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

//* 3. Вкажіть дженерики для функції об'єднання об'єктів.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

//* 4. Є наступні класи.
// Приберіть помилку лише додаючи дженерики для класів та інтерфейс.
class Component<T> {
  constructor(public props: T) {}
}
interface ITitle {
  title: number;
}
class Page extends Component<ITitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}
