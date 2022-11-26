function MyLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = MyLogFunction();
logger('your string');

/** Functions Creating a Class */
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = '';

    log(str: string) {
      console.log(str);
      this.completeLog += str + '\n';
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log('Foo');
console.log(logger2.dumpLog());

/** Functions Creating a Generic Class */
function createSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T): void {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = createSimpleMemoryDatabase<string>();
const sdb1 = new StringDatabase();
sdb1.set('a', 'Hello');

/** Create a Mixin */
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set('jack', 'Hello Jack');
sdb2.dump();
