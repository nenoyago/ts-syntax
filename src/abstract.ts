abstract class StreetFighter {
  constructor() {}

  move(): void {}
  fight(): void {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract get name(): string;
  abstract getSpecialAttack(): string;
}

class Ryu extends StreetFighter {
  get name(): string {
    return 'Ryu';
  }

  getSpecialAttack(): string {
    return 'Hadoken!';
  }
}

class ChunLi extends StreetFighter {
  get name(): string {
    return 'ChunLi';
  }

  getSpecialAttack(): string {
    return 'Lighting Kick!';
  }
}

const ryu = new Ryu();
const chunLi = new ChunLi();

ryu.fight();
chunLi.fight();
