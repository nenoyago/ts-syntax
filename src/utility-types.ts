interface IMyUser {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

type OptionalMyUser = Partial<IMyUser>;

const merge = (user: IMyUser, overrides: OptionalMyUser): IMyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { id: 1, name: 'Jack', email: 'dontemail@dontemail.com' },
    { id: 2, name: 'Jack', email: 'dontemailbaz@dontemail.com' }
  )
);

type RequiredMyUser = Required<IMyUser>;
type JustEmailAndName = Pick<IMyUser, 'email' | 'name'>;
type UserWithoutID = Omit<IMyUser, 'id'>;

const mapById = (users: IMyUser[]): Record<IMyUser['id'], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mrs. Baz' },
  ])
);
