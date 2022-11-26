function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map(item => item[key]);
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

interface IBaseEvent {
  time: number;
  user: string;
}

interface IEventMap {
  addToCart: IBaseEvent & {
    quantity: number;
    productId: string;
  };
  checkout: IBaseEvent;
}

function sendEvent<Name extends keyof IEventMap>(
  name: Name,
  data: IEventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  productId: 'foo',
  user: 'baz',
  quantity: 1,
  time: 10,
});
sendEvent('checkout', {
  user: 'bob',
  time: 10,
});
