type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
  age: 22,
};

console.log(dog);

/** Mapped Types */
interface IDogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};
type DogInfoOptions = OptionsFlags<IDogInfo>;
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'Needs to be implemented!';
}

const lg: IDogInfo = {
  name: 'LG',
  age: 13,
};
type DogInfoListeners = Listeners<IDogInfo>;

listenToObject<IDogInfo>(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onNameDelete: () => {},
  onAgeDelete: () => {},
});
