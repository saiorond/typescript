const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Hello World");

const conta = returnValue<number>(5);