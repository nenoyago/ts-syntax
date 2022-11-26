type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(
  permuteRows(addFullName, [
    {
      first: 'Jack',
      last: 'Herrington',
    },
  ])
);

/** Constructor Parameters & InstanceType */
class PersonWithFullName {
  constructor(public readonly name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map(item => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [
    {
      first: 'LG',
      last: 'Herrington',
    },
  ]).map(obj => obj.fullName)
);
