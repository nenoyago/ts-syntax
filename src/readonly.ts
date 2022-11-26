interface ICat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<ICat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat('Usul', 'Tabby');
// usul.name = 'Piter';

/** Readonly Tuples */
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;

/** Immutabble Arrays */
const readllyConst = [1, 2, 3] as const;
// readllyConst[0] = 50;
